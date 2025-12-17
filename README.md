# Salum Ismail - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring smooth animations with GSAP and Framer Motion.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices
- **Modern Animations**: GSAP and Framer Motion for smooth interactions
- **Contact Form**: Functional email sending with EmailJS
- **Project Showcase**: Display of full-stack development projects
- **CV Download**: Downloadable resume functionality
- **Professional UI**: Clean, modern design with dark theme

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: GSAP, Framer Motion
- **Email Service**: EmailJS
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saluumaa/saluma-portfolio.git
   cd saluma-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your EmailJS credentials (see EmailJS Setup below)

4. **Run development server**
   ```bash
   npm run dev
   ```

## 📧 EmailJS Setup (Required for Contact Form)

The contact form uses EmailJS to send emails. Follow these steps to set it up:

### 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Click "Sign Up" and create a free account

### 2. Add Email Service
- In your EmailJS dashboard, go to **"Email Services"**
- Click **"Add New Service"**
- Choose your email provider (Gmail, Outlook, Yahoo, etc.)
- Follow the setup instructions to connect your email account
- **Note your Service ID** (it will look like `service_xxxxxxxxx`)

### 3. Create Email Template
- Go to **"Email Templates"** in your dashboard
- Click **"Create New Template"**
- Use this exact template structure:

```
Subject: New Contact Form Message from {{from_name}}

Hi Salum,

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

Best regards,
Portfolio Contact Form
```

- Click **"Save"**
- **Note your Template ID** (it will look like `template_xxxxxxxxx`)

### 4. Get Your Public Key
- Go to **"Account"** → **"General"** in your dashboard
- Copy your **Public Key** (it will look like a long string of characters)

### 5. Update Environment Variables
Update your `.env` file with the credentials you just obtained:

```env
VITE_EMAILJS_SERVICE_ID=service_your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=template_your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### 6. Test the Contact Form
- Run your development server: `npm run dev`
- Go to the contact section
- Fill out and submit the form
- Check your email for the test message

### Troubleshooting
- **"Template ID not found"**: Double-check your Template ID in EmailJS dashboard
- **"Service ID not found"**: Verify your Service ID is correct
- **"Bad Request"**: Ensure all credentials are properly set in `.env`
- **Still not working**: Check browser console for detailed error messages

**Important**: Make sure your EmailJS account is on the free plan (which allows 200 emails/month) and that your email service is properly configured.

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**: Import your GitHub repo to Vercel
2. **Add Environment Variables**: In Vercel dashboard → Project Settings → Environment Variables
3. **Deploy**: Vercel will automatically build and deploy

### Other Platforms

The app can be deployed to any static hosting service like Netlify, GitHub Pages, etc.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

- **Colors**: Update Tailwind config or component classes
- **Content**: Modify data in component files
- **Projects**: Update the projects array in `src/components/Projects.tsx`
- **Personal Info**: Update contact details and about section

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ by Salum Ismail