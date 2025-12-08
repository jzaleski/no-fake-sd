# No Fake SD

A modern, responsive Next.js website promoting awareness and education about legitimate service dogs and combating service dog fraud.

## Overview

This website is dedicated to educating the public about legitimate service dogs, ADA requirements, and the impact of service dog fraud on people with disabilities who rely on these amazing working dogs. The site features a clean, minimalist design with strong visual hierarchy and optimized performance.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist Sans & Geist Mono
- **Email**: Resend
- **Analytics**: Vercel Analytics & Speed Insights
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 24.11.1 or later (see `.node-version`)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd no-fake-sd
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your actual values:
- `RESEND_API_KEY`: Your Resend API key for email functionality
- `CONTACT_FORM_FROM_ADDRESS`: Email address to send from (use Resend verified domain)
- `CONTACT_FORM_TO_ADDRESS`: Email address to receive contact form submissions
- `NEXT_PUBLIC_CANONICAL_BASE_URL`: Your production domain (e.g., https://www.nofakesd.com)
- `NEXT_TELEMETRY_DISABLED`: Set to 1 to disable Next.js telemetry (optional)

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
no-fake-sd/
├── app/                         # Next.js app directory
│   ├── api/                    # API routes
│   │   └── contact/            # Contact form API
│   ├── contact/                # Contact page with form
│   ├── get-involved/           # Community involvement page
│   ├── resources/              # Educational resources page
│   ├── service-dog-etiquette/  # Etiquette guidelines page
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── robots.ts               # Robots.txt generation
│   └── sitemap.ts              # Sitemap generation
├── components/                 # React components
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   └── Header.tsx
├── public/                     # Static assets
│   └── images/                # Images
└── data/                       # Data files (if needed)
```

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run prettier` - Format code with Prettier
- `npm run tsc` - Type check with TypeScript

## Features

- 📱 **Fully Responsive Design** - Mobile-first approach with consistent button styling across all devices
- 🎨 **Modern Minimalist Design** - Clean black & white theme matching the original nofakesd.org aesthetic
- 🖼️ **Hero Image Integration** - Full-width hero section with optimized images from SquareSpace
- 🔍 **SEO Optimized** - Complete metadata, OpenGraph tags, Twitter cards, robots.txt, and XML sitemap
- 📧 **Contact Form** - Email integration via Resend API
- 📊 **Analytics & Performance** - Vercel Analytics and Speed Insights for monitoring
- 🚀 **Performance Optimized** - Next.js Image optimization, font optimization, and web vitals tracking
- ♿ **Accessibility** - Semantic HTML, ARIA labels, and proper heading hierarchy
- 🎯 **Visual Indicators** - Color-coded do's (green checkmarks) and don'ts (red X's) for better UX

## Environment Variables

Required environment variables (see `.env.example` for template):
- `RESEND_API_KEY` - Your Resend API key for email functionality
- `CONTACT_FORM_FROM_ADDRESS` - Email address to send from (must be verified with Resend)
- `CONTACT_FORM_TO_ADDRESS` - Email address to receive contact form submissions
- `NEXT_PUBLIC_CANONICAL_BASE_URL` - Your production domain URL

Optional:
- `NEXT_TELEMETRY_DISABLED` - Set to 1 to disable Next.js telemetry

## License

Copyright © 2025 No Fake SD. All rights reserved.

## Pages

- **Home** (`/`) - Full-width hero with impactful messaging, mission statement, and call-to-action sections
- **Resources** (`/resources`) - Comprehensive educational content about service dogs, ADA requirements, legal consequences, and the difference between service dogs and ESAs
- **Service Dog Etiquette** (`/service-dog-etiquette`) - Detailed guidelines with color-coded do's and don'ts, business owner information, and child education tips
- **Get Involved** (`/get-involved`) - Multiple pathways for community involvement, advocacy, and fraud reporting
- **Contact** (`/contact`) - Contact form with email integration for inquiries and reports

## Design & Theme

### Color Palette
- **Primary**: Black (#000000) - High contrast for headers, nav, and emphasis
- **Background**: White (#FFFFFF) - Clean, professional base
- **Secondary**: Light Gray (#F8F8F8) - Subtle section backgrounds
- **Accent**: Gray (#E0E0E0) - Borders and dividers
- **Interactive**: Blue (#2563EB) for links, Green (#16A34A) for positive indicators, Red (#DC2626) for warnings

### Typography
- **Primary Font**: Geist Sans (Vercel)
- **Monospace Font**: Geist Mono (Vercel)
- Optimized font loading with variable fonts

### Layout
- **Header**: Black background with white text, 96px height (h-24)
- **Footer**: Minimal copyright notice
- **Buttons**: Full-width on mobile, auto-width on desktop with consistent styling
- **Hero**: 700px mobile, 800px desktop with 40% black overlay for text readability

## SEO & Performance

### SEO Features
- ✅ Dynamic metadata generation per page
- ✅ OpenGraph tags for social media sharing
- ✅ Twitter Card integration
- ✅ Canonical URLs
- ✅ XML Sitemap (`/sitemap.xml`)
- ✅ Robots.txt configuration
- ✅ Semantic HTML structure
- ✅ Descriptive alt text for images
- ✅ Keyword optimization

### Performance Optimizations
- ✅ Next.js Image component for automatic optimization
- ✅ WebP/AVIF format support
- ✅ Lazy loading for images
- ✅ Font optimization with variable fonts
- ✅ Vercel Analytics integration
- ✅ Speed Insights monitoring
- ✅ Minimal JavaScript bundle
- ✅ Static generation where possible

## Deployment

This site is optimized for deployment on Vercel with automatic builds and previews.

### Environment Variables Required
```env
RESEND_API_KEY=your_resend_api_key
CONTACT_FORM_FROM_ADDRESS=noreply@yourdomain.com
CONTACT_FORM_TO_ADDRESS=recipient_email@example.com
NEXT_PUBLIC_CANONICAL_BASE_URL=https://www.nofakesd.com
NEXT_TELEMETRY_DISABLED=1
```

## Support

For questions or support, please use the contact form on the website.
