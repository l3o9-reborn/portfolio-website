## ✨ Features

* **Modern & Responsive Design**: A clean, user-friendly interface that looks great on all devices.
* **Light & Dark Mode**: A theme toggle for user preference, with system theme detection.
* **Interactive Animations**: Smooth and performant animations powered by Framer Motion to enhance user experience.
* **Dynamic Project Showcase**: A dedicated projects section with a parallax scroll effect on the homepage.
* **Functional Contact Form**: A working contact form that sends emails directly to me using Resend.
* **Performance Optimized**: Built for speed with a focus on achieving high Lighthouse scores.
* **SEO Friendly**: Configured with proper metadata and a sitemap for better search engine visibility.

## 🛠️ Tech Stack

This project is built with the following technologies:

* **Framework**: Next.js
* **Language**: TypeScript
* **Styling**: Tailwind CSS
* **UI Components**: Shadcn UI
* **Animations**: Framer Motion
* **Form Handling**: React Hook Form & Zod
* **Email Service**: Resend
* **Deployment & Analytics**: Vercel

## 🚀 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/sparsh-kamat/portfolio-website
    cd portfolio-website
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables**
    For the contact form to work, you need to set up environment variables. Create a file named `.env.local` in the root of the project.
    ```
    .env.local
    ```
    Add the following variables to the file:
    ```
    RESEND_API_KEY=your_resend_api_key
    CONTACT_EMAIL=your_email_address
    ```

4.  **Run the development server**
    The project uses Turbopack for faster development.
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🌐 Deployment

This project is deployed on [Vercel](https://vercel.com/), the platform from the creators of Next.js, and includes Vercel Analytics and Speed Insights for monitoring.

---

Developed and designed by L3o9_reborn.
