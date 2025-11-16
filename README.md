# Sidra Coaching — Website

This repository contains the source code for the Sidra Coaching website.
The site is built with Next.js (App Router) and deployed on Netlify.
It provides program information, subjects offered, and a secure contact form for inquiries.

### 🚀 Tech Stack

Next.js 14 (App Router)

Tailwind CSS

Next/Image for optimized images

Resend (email service)

Google Sheets (submission logging)

Netlify (deployment)

### 📦 Installation

npm install
npm run dev

Visit:
http://localhost:3000

## To build for production:

npm run build
npm start

### 🔐 Environment Variables

Create a .env.local file:

RESEND_API_KEY=
GOOGLE_SHEETS_WEBHOOK_URL=
GOOGLE_SHEETS_SECRET=
NEXT_PUBLIC_SITE_URL=

These must be added in Netlify’s environment settings as well.

### ✉️ Contact Form

The form uses a Next.js Server Action to:

Send an email via Resend

Log the submission to Google Sheets

Redirect the user to a “Thank You” page

To update the recipient email, edit:

**app/\_actions/sendEmail.js**

### 📄 Updating Content

You can edit text or sections inside:

app/page.js (Home)
app/about/page.js
app/programs/page.js
app/subjects/page.js
app/contact/page.js
components/ (Buttons, Navbar, Footer, etc.)

### Images are stored in:

/public

OG image: /public/og-image.png

### 🌐 Deployment Notes

Hosted on Netlify

Make sure environment variables are set before deploying

If the domain changes, update:

metadataBase in app/layout.js

OpenGraph url field

NEXT_PUBLIC_SITE_URL

### 🛠️ Maintenance

Update Google Sheets script URL if the Apps Script is redeployed

Keep .env.local out of version control

Replace or optimize images in /public as needed
