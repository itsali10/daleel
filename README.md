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

## 3. Business Case

### 3.1. Market Analysis

- **Target Market:**  
  Egyptian citizens and residents who need to obtain or renew official documents such as national IDs, passports, birth certificates, driver’s licenses, or tax files.  
  The target audience includes **students, professionals, expats, and families**—people who regularly interact with government entities and need **clear, reliable guidance**.

- **Problem Validation:**  
  Government processes in Egypt are often **confusing, fragmented, and time-consuming**.  
  Many citizens face difficulties due to **outdated information**, **unclear requirements**, and **long queues caused by incomplete paperwork**.  
  There is currently **no centralized, user-friendly platform** that explains each process step-by-step or provides verified, updated details.

- **Market Size:**  
  Egypt has a population exceeding **110 million**, with millions of document transactions conducted annually.  
  As digital transformation accelerates across government services, the demand for **online guidance platforms** is expected to grow rapidly.  
  The market opportunity lies in serving both individuals and organizations that require frequent document processing.

- **Competition:**  
  There are **no comprehensive competitors** currently offering a paid, centralized, and verified guide for government documentation in Egypt.  
  Existing information sources (Facebook groups, forums, individual blogs) are unreliable and unstructured.

---

### 3.2. Revenue Models

1. **Subscription Model:**
   - **Paid Access Only:** All users must subscribe to access the website’s guides and documentation.
   - **Subscription Tiers:**  
     - **Monthly Plan:** Short-term access for users handling one or two documents.  
     - **Annual Plan:** Discounted rate for frequent users and businesses.
   - **Included Features:**
     - Full access to all government documentation guides.  
     - Office locator with interactive map.  
     - Step-by-step downloadable checklists.  
     - Updates and notifications for changing requirements and fees.  
     - Multi-language access (Arabic/English).

2. **Partnership Opportunities:**
   - Collaborate with **legal offices, translation agencies, or notary services** to promote premium plans.  
   - Establish affiliate programs with courier/document delivery services.  
   - Offer partnerships to **universities or HR departments** to provide access for employees and students.  

---

### 3.3. User Acquisition Strategy

- **Digital Marketing:**  
  Run targeted campaigns on Facebook, Instagram, TikTok, and Google Search, focusing on keywords like “renew passport Egypt” or “get ID quickly”.

- **Search Engine Optimization (SEO):**  
  Optimize service pages to appear in search results for documentation-related queries in both Arabic and English.

- **Content Marketing:**  
  Create informative posts and blogs explaining simplified versions of document processes, linking to the full premium guide.

- **Referral Program:**  
  Offer users a small discount or one-day free access for referring others.

- **Institutional Collaborations:**  
  Partner with organizations and universities to offer group subscription plans for their staff and students.

- **Email Marketing:**  
  Send periodic newsletters about newly added documentation guides or updated government procedures.

---

### 3.4. Cost Structure

- **Development Costs:**  
  Frontend development (React), backend (NestJS), and Supabase integration for database and authentication.

- **Maintenance Costs:**  
  Hosting on Vercel (frontend) and Render/Railway (backend), database management, and API maintenance for maps and location services.

- **Marketing & Operations:**  
  Paid advertising, SEO optimization, content creation, and customer support.

- **Operational Costs:**  
  Team salaries (developers, designers, content managers, marketing), payment gateway fees, and legal setup.

---

### 3.5. Break-Even Analysis and Projected ROI

- **Assumptions:**  
  Based on estimated user acquisition cost (CAC), monthly subscriptions, and annual retention rate.  
  Revenue will scale with the number of active subscribers.

- **Break-Even Point:**  
  Expected within **2–3 years** of launch, assuming steady user growth through digital marketing and institutional partnerships.

- **Projected ROI:**  
  With moderate adoption, the project can achieve ROI > 1 within **4–5 years**.  
  Growth depends on expanding content coverage and increasing institutional subscribers.

---

### 3.6. Potential Expansion Opportunities

- **Feature Expansion:**  
  Add online appointment scheduling for government services, document tracking, and notifications for renewal deadlines.

- **Integration Expansion:**  
  Integrate with government APIs (where available) to verify office hours or required documents in real-time.

- **Platform Expansion:**  
  Launch a **mobile app** version for easier access and offline document viewing.

- **Geographical Expansion:**  
  Extend coverage to other Arab countries with similar bureaucratic processes (e.g., Jordan, UAE).

- **B2B Offerings:**  
  Offer tailored enterprise dashboards for HR departments or agencies managing employee documentation.

---
