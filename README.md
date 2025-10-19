# Daleel Application Documentation

## Project Overview
This project is a modern web platform that provides complete guidance on how and where to obtain government documentation in Egypt, such as ID cards, passports, birth certificates, licenses, and more.
The website offers detailed, verified, and continuously updated instructions on each process — including required documents, steps, fees, and official locations.

Users must create an account and subscribe to gain access to the platform.
Only paid subscribers can view the documentation, guides, and step-by-step procedures.
The platform’s goal is to make dealing with government paperwork simpler, faster, and more reliable, eliminating confusion and wasted time.

**Core Problems Addressed:**
1. Scattered and outdated information about government procedures.
2. Difficulty identifying correct steps, fees, and required forms.
3. Frequent wasted visits due to missing or incorrect documents.
4. No centralized, verified source for all documentation needs.
5. Lack of transparency and clarity in official processes.

**Technical Stack:**
- **Frontend:** React.js  
- **Backend:** NestJS  
- **Database & Auth:** Supabase (PostgreSQL + Auth + Storage)  
- **Language:** TypeScript  
- **State Management:** React Query or Context API  
- **Security:** JWT authentication and subscription-based access control


## 2. Application Manual

### 2.1. Feature Guides

#### 2.1.1. Government Documentation Search & Access

- **Overview:**  
  Access the **“Services”** section from the main navigation bar.  
  The main page provides a categorized list of all available government documentation guides (e.g., National ID, Passport Renewal, Birth Certificate, Driver’s License, etc.).

  - Browse or search for any government service using keywords (e.g., “passport”, “tax card”).  
  - Each service entry displays a short summary, estimated time, and associated fees.  
  - Click on a service to open its detailed guide.

- **Viewing a Documentation Guide:**  
  - After selecting a service, you will be redirected to a step-by-step guide.  
  - Each step includes:
    - Description of the process (e.g., “Submit the completed application form at your local civil office”).  
    - Required documents.  
    - Associated fees and payment methods.  
    - Estimated processing time.  
  - You can mark steps as completed as you progress.

- **Subscription Access:**  
  - All users must **create an account** and **subscribe** to access any documentation guide.  
  - After logging in, navigate to **“Subscribe”** to activate your premium plan.  
  - Once subscribed, full access to all documentation guides, office locators, and downloadable checklists becomes available.

- **Search Filters:**  
  - Filter by category (e.g., “Civil Status”, “Traffic & Licenses”, “Taxes & Business”).  
  - Filter by city or region to view offices closest to you.  
  - Sort results by most viewed or most recent updates.

---

#### 2.1.2. Office Locator

- **Overview:**  
  Access the **“Offices”** section to find nearby government service branches.  
  The map view displays each office location and its available services.

  - Each office card shows:
    - Office name and category (e.g., “Nasr City Civil Registry”).  
    - Address, working hours, and contact details.  
    - Supported services (e.g., National ID Renewal, Birth Certificate).  

- **Using the Map View:**  
  - You can zoom in/out to explore different areas.  
  - Click a location marker to view office details and navigate using Google Maps or Mapbox integration.  
  - The system automatically detects your city to prioritize nearby offices.

---

#### 2.1.3. Step-by-Step Checklist

- **Overview:**  
  Each documentation guide includes a dynamic checklist generated from the service steps.  
  The checklist allows users to track their progress.

- **Usage:**
  - Open a service guide (e.g., “Renew National ID”).  
  - Tap **“Generate Checklist”** to create a personalized list.  
  - Check items off as you complete them.  
  - Download or print the checklist for offline use (PDF format).

---

#### 2.1.4. Subscription & Account Management

- **Overview:**  
  Access the **“Profile”** tab in the navigation menu to manage account details and subscription.

- **Account Information:**  
  - View and edit your name and email.  
  - Manage your subscription plan (monthly or annual).  
  - View payment history and renewal date.

- **Subscription Settings:**  
  - Upgrade or cancel your subscription anytime.  
  - Automatic renewal is enabled unless disabled manually.  
  - Access to all guides is revoked if the subscription expires.

- **Security Settings:**  
  - Change password and manage login credentials.  
  - Two-factor authentication (2FA) available for added security.  
  - Session logout available for all connected devices.

- **Theme Preferences:**  
  - Toggle between **Light Mode** and **Dark Mode** from the profile settings.

---

### 2.2. Settings Configuration

- **Theme:**  
  Profile > Preferences > Theme > Select “Light” or “Dark”.

- **Language:**  
  Profile > Preferences > Language > Choose Arabic or English (default).

- **Notifications:**  
  Profile > Preferences > Notifications > Enable or disable email alerts for service updates.

- **Checklist Management:**  
  Services > Select a Procedure > Generate Checklist > Download or Print.

- **Subscription Renewal:**  
  Profile > Subscription > Manage Plan > Renew or Cancel Subscription.

- **Security Settings:**  
  Profile > Security > Enable 2FA or Change Password.

---
