<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/100znJ_AQKQw3IqF-Yl5NP0KWam5rsJxW

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Set up EmailJS for contact form:
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create an email service (Gmail, Outlook, etc.)
   - Create an email template with the following variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{company}}` - Company name
     - `{{phone}}` - Phone number
     - `{{product}}` - Interested product
   - Add these to your `.env.local` file:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```
4. (Optional) Set a custom port in your `.env.local` file:
   ```
   PORT=8080
   ```
   Or use `VITE_PORT=8080`. If not specified, the app will run on port 3000 by default.
5. Run the app:
   `npm run dev`
