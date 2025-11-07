# **📍 Corespark Community Center**

<img
   src="./public/logo_w_text.webp"
   alt="Corespark Logo"
   width="400"
/>

Welcome to the official repository for the **Corespark Community Center**. This project is a free, open-source virtual hub built to connect our neighbors in **Northwest North Carolina** and **Southwest Virginia** with vital community resources.

Our mission is to use accessible technology to provide these resources to everyone. This project is, and will always be, **100% free**.

## **🤝 How You Can Help**

We welcome contributions of all kinds\! Whether you're a developer or a community member, there's a way for you to help.

### **1\. 💻 Contributing Code (For Developers)**

We'd love your help fixing bugs, improving accessibility, or building new features.

1. Check out our [**Issues tab**](https://www.google.com/search?q=https://github.com/corespark-io/community/issues) to see what we're working on.  
2. We try to label good first issues with good first issue.  
3. Feel free to fork the repo, make your changes, and submit a pull request\!

### **2\. 🍽️ Contributing Data (For Community Members)**

The most valuable way to contribute is by helping us add or update information for our resource locators.

* Example: Food Pantry Data  
  If you own a pantry, see incorrect information, or know of a pantry that's missing, please use our simple form. We'll handle the rest\!

  ➡️ Submit or Update Your Pantry Info

## **🚀 Running the Project Locally**

1. **Clone the repository:**  
   git clone \[https://github.com/corespark-io/community.git\](https://github.com/corespark-io/community.git)  
   cd community

2. **Install dependencies** (we use pnpm, but npm or yarn work too):  
   pnpm install

3. **Run the development server:**  
   pnpm dev

4. **Open your browser** and navigate to http://localhost:4321 (or the port shown in your terminal).

## **🗂️ Project Structure**

The project is a standard [Astro](https://astro.build/) application. As we add more resources, this structure will grow.

/  
├── src  
│   ├── components/         \# Reusable Astro/UI components  
│   │   ├── food-pantry/    \# Components \*specific\* to the food pantry map  
│   │   │   ├── Map.astro  
│   │   │   └── Search.astro  
│   │   └── ...  
│   ├── data/  
│   │   └── pantries/       \# Data for the Food Pantry Locator  
│   │       ├── nc/         \# Organized by /state/county  
│   │       └── va/  
│   ├── layouts/  
│   │   └── Layout.astro    \# Main site layout  
│   └── pages/  
│       ├── index.astro     \# Homepage (Community Center)  
│       ├── food-pantries.astro \# The Food Pantry Locator page  
│       └── ...             \# New resource pages will go here  
│  
├── public/                 \# Static assets (images, fonts)  
├── astro.config.mjs        \# Astro configuration  
└── package.json            \# Project dependencies

## **Featured Project: Food Pantry Locator**

Our first major resource is the Food Pantry Locator. To make contributing data as easy as possible, all pantry information is stored in individual .json files.

### **Food Pantry Data Schema**

{  
  "claimed": false,  
  "name": "Pantry Name",  
  "logo": "\[https://url-to-logo.png\](https://url-to-logo.png)",  
  "location": {  
    "physical": "123 Main St, City, ST 12345",  
    "mailing": "123 Main St, City, ST 12345",  
    "latitude": 36.12345,  
    "longitude": \-81.12345  
  },  
  "contact": {  
    "website": "\[https://www.pantry-website.com\](https://www.pantry-website.com)",  
    "phone": "555-555-5555",  
    "email": "contact@pantry-website.com"  
  },  
  "hours": {  
    "monday": "09:00-12:00, 14:00-17:00",  
    "tuesday": "09:00-12:00",  
    "wednesday": "24\_HOURS",  
    "thursday": "09:00-12:00",  
    "friday": "09:00-12:00",  
    "saturday": "Closed",  
    "sunday": "Closed"  
  },  
  "specialInstructions": "Please call ahead.\\nSecond line of instructions.",  
  "types": \["WALK\_IN", "DRIVE\_THRU"\],  
  "services": \["PRE\_PACKAGED\_FOOD", "FRESH\_PRODUCE"\],  
  "eligibility": {  
    "serviceArea": \["VA\_GRAYSON", "NC\_ASHE"\],  
    "documents": \["PHOTO\_ID", "PROOF\_OF\_ADDRESS"\],  
    "frequency": {  
      "increment": "1",  
      "period": "WEEK"  
    }  
  }  
}

* **claimed**: (true/false) Whether this data has been verified by the pantry owner.  
* **hours**: Use "09:00-12:00" for times, "Closed", "24\_HOURS", or comma-separate for split hours.  
* **specialInstructions**: Use \\n for line breaks, which will become bullet points.  
* **types, services, serviceArea, documents**: These all use keys from the /src/consts.ts file.

## **License**

As we want this community project to always be free and open, we opted to license this repository under the GNU Affero General Public License (AGPLv3). See the [LICENSE](./LICENSE) file for more details.