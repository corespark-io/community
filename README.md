# **📍 Corespark Community Center**

<img
   src="./public/logo_w_text.webp"
   alt="Corespark Logo"
   width="400"
/>

Welcome to the official repository for the **Corespark Community Center**. This project is a free, open-source virtual hub built to connect our neighbors in **Northwest North Carolina** and **Southwest Virginia** with vital community resources.

Our mission is to use accessible technology to provide these resources to everyone. This project is, and will always be, **100% free**.

## **🤝 How You Can Help**

We welcome contributions of all kinds! Whether you're a developer or a community member, there's a way for you to help.

### **1. 💻 Contributing Code (For Developers)**

We'd love your help fixing bugs, improving accessibility, or building new features.

1. Check out our [**Issues tab**](https://www.google.com/search?q=https://github.com/corespark-io/community/issues) to see what we're working on.  
2. We try to label good first issues with good first issue.  
3. Feel free to fork the repo, make your changes, and submit a pull request!

### **2. 🍽️ Contributing Data (For Community Members)**

The most valuable way to contribute is by helping us add or update information for our resource locators.

* Example: Food Pantry Data  
  If you own a pantry, see incorrect information, or know of a pantry that's missing, please use our simple form. We'll handle the rest!

  ➡️ [Submit or Update Your Pantry Info](https://corespark.io/community/forms/food-pantry/org-application)

## **🚀 Running the Project Locally**

1. **Clone the repository:**  
```bash
   git clone https://github.com/corespark-io/community.git
   cd community
```

2. **Install dependencies** (we use pnpm, but npm or yarn work too):  
   pnpm install

3. **Run the development server:**  
   pnpm dev

4. **Open your browser** and navigate to `http://localhost:4321` (or the port shown in your terminal).

## **🗂️ Project Structure**

The project is a standard [Astro](https://astro.build/) application. As we add more resources, this structure will grow.

```tree
/  
├── src  
│   ├── components/         # Reusable Astro/UI components  
│   │   ├── food-pantry/    # Components *specific* to the food pantry map  
│   │   │   ├── Map.astro  
│   │   │   └── Search.astro  
│   │   └── ...  
│   ├── data/  
│   │   └── pantries/       # Data for the Food Pantry Locator  
│   │       ├── nc/         # Organized by /state/county  
│   │       └── va/  
│   ├── layouts/  
│   │   └── Layout.astro    # Main site layout  
│   └── pages/  
│       ├── index.astro     # Homepage (Community Center)  
│       ├── food-pantries.astro # The Food Pantry Locator page  
│       └── ...             # New resource pages will go here  
│  
├── public/                 # Static assets (images, fonts)  
├── astro.config.mjs        # Astro configuration  
└── package.json            # Project dependencies
```

## **Featured Project: Food Pantry Locator**

Our first major resource is the Food Pantry Locator. To make contributing data as easy as possible, all pantry information is stored in individual .json files.

### **Food Pantry Data Schema**

```json
{  
  "claimed": false,  
  "name": "Pantry Name",  
  "id": "<prefix>.<unique-id>",  
  "location": {  
    "physical": "123 Main St, City, ST 12345",  
    "mailing": "123 Main St, City, ST 12345",  
    "latitude": 36.12345,  
    "longitude": -81.12345  
  },  
  "contact": {  
    "website": "https://www.pantry-website.com",  
    "phone": "555-555-5555",  
    "email": "contact@pantry-website.com"  
  },  
  "hours": {  
    "monday": "09:00-12:00, 14:00-17:00",  
    "tuesday": "09:00-12:00",  
    "wednesday": "24_HOURS",  
    "thursday": "09:00-12:00",  
    "friday": "09:00-12:00",  
    "saturday": "Closed",  
    "sunday": "Closed"  
  },  
  "specialInstructions": "Please call ahead.nSecond line of instructions.",  
  "types": ["WALK_IN", "DRIVE_THRU"],  
  "services": ["PRE_PACKAGED_FOOD", "FRESH_PRODUCE"],  
  "eligibility": {  
    "serviceArea": ["VA_GRAYSON", "NC_ASHE"],  
    "documents": ["PHOTO_ID", "PROOF_OF_ADDRESS"],  
    "frequency": {  
      "increment": "1",  
      "period": "WEEK"  
    }  
  }  
}
```

* **claimed**: (`true`/`false`) Whether this data has been verified by the pantry owner.  
* **id**: The unique member ID created for the pantry. It can be found in the `Community Members List`. Use the format `<prefix>.<unique-id>`, where `<prefix>` is `fp` for food pantries.
* **hours**: Use `"09:00-12:00"` for times, `"Closed"`, `"24_HOURS"`, or comma-separate for split hours.  
* **specialInstructions**: Use `n` for line breaks, which will become bullet points.  
* **types, services, serviceArea, documents**: These all use keys from the `/src/consts.ts` file.

## **Community Membership**

The Corespark community offers free memberships to individuals and organizations who wish to participate in and contribute to our shared resources. This can be in the form of listing your organization (such as a food pantry) or signing up as a volunteer. Memberships help us maintain accurate records and ensure we have a method of verification.

### Obtaining Membership

Community Membership is automatically granted to organizations that submit their information through our resource submission forms. (Such as the Food Pantry Claim Form) 

#### Cost of Membership

This Membership is **free of charge**.

#### Requirements

The membership does not require anything from you beyond:
- Making sure that your membership doesn't expire
- Ensuring that you maintain a good standing within the community.

### Verification

In the Corespark Community, we want to ensure that trustworthiness and reliability are upheld for all members. Therefore, we have a simple verification process in place to maintain the integrity of our community.

Anybody has the ability to verify the membership status of an organization or individual by using our [Community Member Verification Tool](https://community.corespark.io/members/verify). This tool allows you to enter a member ID and see the current status of that member. 

### Membership Expiration

To keep our community active and engaged, memberships have an expiration date. Members will receive notifications as their expiration date approaches, prompting them to renew their membership. Expiration of membership can be found via the [Community Member Verification Tool](https://community.corespark.io/members/verify).

### Reporting Members

If you encounter any issues or have concerns about a community member's behavior or actions, we encourage you to report them for review. We take all reports seriously and will investigate them thoroughly.

Additionally, if you feel that a member has positively contributed to the community, we welcome positive reports as well!

#### Appealing a report

Any member is able to appeal a report against them. To do so, please email [community-member-reports@corespark.io](community-member-reports@corespark.io) with your appeal using this template:

* Subject: `Appeal of Member Report - [Your Member Name or ID] - [Report ID]`
* Body:
  ```
  Dear Corespark Community Team,
  
  I am writing to formally appeal the report filed against my membership in the Corespark Community. Below are the details of my membership and the report in question:
  
  - Member Name: [Your Member Name]
  - Member ID: [Your Member ID]
  - Report ID: [Report ID]
  
  I believe that the report was made in error and would like to provide the following information to support my appeal:
  
  <!-- Provide your explanation and any supporting evidence here -->
  
  I kindly request a thorough review of my case and the opportunity to discuss this matter further. Please let me know if there are any additional steps I need to take or information I need to provide.
  
  Thank you for your attention to this matter. I look forward to your response.
  
  Sincerely,
  [Your Name]
  ```

### **Onboarding/Updating Members**

The membership system is as follows:

1. Update the `Community Members List` spreadsheet with the new or updated member information.
2. Create a new JSON file, using the [Member JSON Schema](#member-json-schema), in the `/src/data/members/<level>` directory using the member's unique ID as the filename (e.g., `fp.nc-county-000.json` for a food pantry).
  - `<level>` Should be the membership level, such as `pantry`, `volunteer`, etc.

### **Member JSON Schema**

The Member JSON schema is simply but intended to provide authoritative information.

```json
{
    "name": "Member Name",
    "id": "id.unique-id-000",
    "verification": {
        "verified_on": "01/01/2025",
        "verified_by": "Your Name",
        "verification_expiry": "01/01/2999"
    },
    "status": {
        "code": "ACTIVE",
        "message": "This is required, except for active or expired statuses. We always recommend providing context.",
        "updated_by": "Your Name",
        "updated_on": "01/01/2025"
    }
}
```

* **name**: The official name of the member (individual or organization).
* **id**: The unique member ID created for the member. Use the format `id.unique-id-000`.
* **verification**: Information about when and by whom the member was verified, along with the verification expiry date.
  * **verified_on**: The date the member was verified (MM/DD/YYYY).
  * **verified_by**: The name of the person who verified the member.
  * **verification_expiry**: The date the verification expires (MM/DD/YYYY). This should match exactly the expiration date in the `Community Members List` spreadsheet.
* **status**: The current status of the member.
  * **code**: The status code of the member. See [const.ts](./src/consts.ts) (`MEMBERSHIP_STATUSES`) for valid codes.
  * **message**: If this is not set, `Status Details` will not be shown. This is intended to provide context on the status code. It is required for all statuses except `ACTIVE` and `EXPIRED`.
  * **updated_by**: The name of the person who last updated the member's status.
  * **updated_on**: The date the status was last updated (MM/DD/YYYY).

### Renewal

The renewal process is quite simple. When a member's verification expiry date is approaching, they simply need to email [community@corespark.io](mailto:community@corespark.io) to request a renewal. 

> [!IMPORTANT]
> You should include any details that you'd like updated in this request to ensure that your information is accurate.

The community team will then review the member's information and update their verification and expiration date accordingly.

#### Expired Status

If a member's status is set to `EXPIRED`, their status will forever be `EXPIRED` no matter what status code is set. This is to ensure that expired members cannot be accidentally reactivated without going through the full verification process again.



## **License**

As we want this community project to always be free and open, we opted to license this repository under the GNU Affero General Public License (AGPLv3). See the [LICENSE](./LICENSE) file for more details.
