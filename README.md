# Food Pantry Map Project

This project is a web application designed to provide a searchable map of food pantries in a specific area. Users can easily find food pantries based on their location and access important information about each pantry.

## Project Structure

The project is organized as follows:

```
food-pantry-map
├── src
│   ├── components
│   │   ├── Map.astro        # Component for rendering the map of food pantries
│   │   └── Search.astro     # Component for searching food pantries
│   ├── data
│   │   └── pantries.json    # JSON schema for food pantry data
│   ├── layouts
│   │   └── Layout.astro      # Main layout for the application
│   └── pages
│       └── index.astro      # Entry point of the application
├── public                    # Public assets
├── astro.config.mjs         # Astro configuration file
├── package.json              # npm configuration file
├── tsconfig.json             # TypeScript configuration file
└── README.md                 # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd food-pantry-map
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the development server:**
   ```
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Usage Guidelines

- Use the search component to filter food pantries by name or location.
- Click on a pantry marker on the map to view more details about the pantry.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.