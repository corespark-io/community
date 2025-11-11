// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Community Services provided by Corespark";
export const SITE_DESCRIPTION =
  "A collection of free community services provided by Corespark to our neighbors and friends.";
export const BASE_URL = "https://community.corespark.io";


// Social Links
export const SOCIAL_LINKS = {
  x: "https://x.com/coresparkio",
  instagram: "https://www.instagram.com/coresparkio",
  linkedin: "https://www.linkedin.com/company/corespark-io",
  facebook: "https://www.facebook.com/corespark.io",
  google: "https://share.google/BoDBv0BwAdjVUq1pE",
};

/*
  FOOD PANTRY
*/

// Service Types
export const SERVICE_TYPES: Record<string, string> = {
  WALK_IN: "Walk-in",
  DRIVE_THRU: "Drive-thru",
  APPOINTMENT_ONLY: "Appointment only",
  APPOINTMENT: "Appointment",
  DELIVERY: "Delivery",
};

// Services Offered
export const SERVICES_OFFERED: Record<string, string> = {
  PRE_PACKAGED_FOOD: "Pre-packaged food boxes / Meal Kits",
  CLIENT_CHOICE: "Client choice (grocery store style)",
  FRESH_PRODUCE: "Fresh produce",
  CANNED_BOXED_GOODS: "Canned / boxed goods",
  REFRIGERATED_PRODUCTS: "Refrigerated products",
  FROZEN_PRODUCTS: "Frozen products",
  HOT_MEALS: "Hot meals",
  HYGIENE_PRODUCTS: "Hygiene products",
  BABY_PRODUCTS: "Baby products",
  OTHER: "Other",
};

// Service Areas
export const SERVICE_AREAS: Record<string, string> = {
  // North Carolina
  NC_ALLEGHANY: "Alleghany County, NC",
  NC_ASHE: "Ashe County, NC",
  NC_STOKES: "Stokes County, NC",
  NC_SURRY: "Surry County, NC",
  NC_YADKIN: "Yadkin County, NC",
  NC_WILKES: "Wilkes County, NC",

  // Virginia
  VA_GRAYSON: "Grayson County, VA",
  VA_CARROLL: "Carroll County, VA",
  VA_GALAX: "Galax, VA"
};

// Required Documentation
export const REQUIRED_DOCUMENTATION: Record<string, string> = {
  NO_DOCUMENTATION: "No documentation required",
  PHOTO_ID: "Photo ID",
  PROOF_OF_ADDRESS: "Proof of address",
  PROOF_OF_INCOME: "Proof of income",
  SOCIAL_SECURITY_FOR_HOUSEHOLD: "Social Security cards for household members",
  OTHER: "Other",
};

// Frequency of Service
export const FREQUENCY_OF_SERVICE: Record<string, string> = {
  DAY: "Day",
  WEEK: "Week",
  MONTH: "Month",
  OTHER: "Other",
  AS_NEEDED: "As needed",
};
