#!/bin/bash

# --- CONFIGURATION ---
TEMPLATE_FILE="./templates/pantry.json"
CSV_FILE="$1"
srcDir="./src/data/pantries"
# We will save the intermediate TSV output here for debugging
DEBUG_OUTPUT_FILE="/tmp/pantry_debug_output.tsv"

echo "--- Script starting ---"

# --- 1. VALIDATE INPUTS ---

# Ensure that we have a CSV file provided as $1
if [ -z "$CSV_FILE" ]; then
    echo "Usage: $0 <path_to_csv_file>"
    exit 1
fi

# Check if the template file exists
if [ ! -f "$TEMPLATE_FILE" ]; then
    echo "Error: Template file not found at $TEMPLATE_FILE"
    exit 1
fi

# Check if the CSV file exists and is readable
if [ ! -f "$CSV_FILE" ] || [ ! -r "$CSV_FILE" ]; then
    echo "Error: CSV file not found or is not readable at: $CSV_FILE"
    echo "Please provide the correct path to the CSV file."
    exit 1
fi

# Check if python3 is available
if ! command -v python3 &> /dev/null
then
    echo "Error: python3 is required to parse the CSV file correctly."
    echo "Please install python3 and ensure it's in your PATH."
    exit 1
fi

echo "--- 2. Loading Template ---"
# Load the schema into a variable *once* for efficiency.
schema_json=$(cat "$TEMPLATE_FILE")
if [ -z "$schema_json" ]; then
    echo "Error: Template file $TEMPLATE_FILE is empty."
    exit 1
fi
echo "Template loaded successfully."

# --- 3. PARSING CSV with Python ---
echo "Parsing CSV file: $CSV_FILE"
echo "Debugging TSV output will be saved to: $DEBUG_OUTPUT_FILE"

# Use Python to properly parse the CSV (handling quoted commas)
# and convert it to Tab-Separated Values (TSV).
# Then, pipe that TSV into the bash 'while read' loop.
# We use 'tee' to save a copy of the output to $DEBUG_OUTPUT_FILE
python3 -c '
import sys, csv, io
# Set stdout to utf-8
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
csv_file_path = sys.argv[1]
# Read from the CSV file passed as an argument
try:
    # Note: Using "errors=ignore" to skip potential bad characters in the source CSV
    with open(csv_file_path, "r", encoding="utf-8", errors="ignore") as f:
        reader = csv.reader(f)
        # Write to stdout as TSV
        writer = csv.writer(sys.stdout, delimiter="\t", quoting=csv.QUOTE_MINIMAL, lineterminator="\n")
        for row in reader:
            writer.writerow(row)
except Exception as e:
    # If Python fails, print the error to stderr so it does not
    # get piped to the 'while' loop.
    print(f"Python Error: Failed to read {csv_file_path}. Error: {e}", file=sys.stderr)
    sys.exit(1)
' "$CSV_FILE" | tee "$DEBUG_OUTPUT_FILE" | \
# The 'while' loop now reads the clean TSV data.
# IFS=$'\t' sets the separator to a Tab character.
while IFS=$'\t' read -r pantry_name pantry_logo_url pantry_physical_address pantry_latitude pantry_longitude pantry_website pantry_phone_number pantry_email pantry_service_area
do
    # --- 4. PROCESSING EACH ROW ---

    # Skip the header line
    if [ "$pantry_name" == "pantry_name" ]; then
        echo "Skipping header row..."
        continue
    fi
    
    echo "--- Processing pantry: $pantry_name ---"

    # Construct the JSON payload for each pantry
    #
    # *** CRITICAL FIX ***
    # We pass the schema in as a JSON argument (--argjson schema)
    # This avoids piping (`echo | jq`) inside the 'while' loop,
    # which prevents the 'jq' command from stealing 'stdin' from the 'read' command.
    # We also use 'jq -n' (no input) to make it clear.
    payload=$(jq -n \
        --argjson schema "$schema_json" \
        --arg name "$pantry_name" \
        --arg logo "$pantry_logo_url" \
        --arg physical "$pantry_physical_address" \
        --arg latitude "$pantry_latitude" \
        --arg longitude "$pantry_longitude" \
        --arg website "$pantry_website" \
        --arg phone "$pantry_phone_number" \
        --arg email "$pentry_email" \
        --arg service_area_raw "$pantry_service_area" \
        '
        # jq comment: Clean the service area (remove \r)
        # Note: We must check for null *before* sub() or it will fail
        ($service_area_raw // "") | sub("\r$"; "") as $sa |
        
        # Start with the template ($schema), then add/replace fields
        $schema | 
         .name = $name |
         .logo = (if $logo == "N/A" then "" else $logo end) |
         .location.physical = $physical |
         .location.mailing = $physical |
         .location.latitude = ($latitude | tonumber? // null) |
         .location.longitude = ($longitude | tonumber? // null) |
         .contact.website = (if $website == "N/A" then "" else $website end) |
         .contact.phone = (if $phone == "N/A" then "" else $phone end) |
         .contact.email = (if $email == "N/A" then "" else $email end) |
         # Use the clean $sa variable
         .eligibility.serviceArea = (if $sa == "N/Distance(N/A)" or $sa == "" or $sa == "N/A" then [] else ($sa | split(" / ")) end)
        '
    )


    # Get the first service area
    first_service_area=$(echo "$payload" | jq -r '.eligibility.serviceArea[0] // "None"')
    # Split it at the underscore to get the State and County
    IFS='_' read -r state county <<< "$first_service_area"
    # Lowercase the state and county for URL construction
    state_lower=$(echo "$state" | tr '[:upper:]' '[:lower:]')
    county_lower=$(echo "$county" | tr '[:upper:]' '[:lower:]')

    # Put the name in a dashed format for URL and lowercase
    name_dashed=$(echo "$pantry_name" | tr '[:upper:] ' '[:lower:]-' | tr -s '-')

    countyPath="$srcDir/$state_lower/$county_lower"
    mkdir -p "$countyPath"
    echo "$payload" > "$countyPath/$name_dashed.json"



done

echo "--- Script finished ---"