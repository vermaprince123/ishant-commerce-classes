# Ishant Commerce Classes - Website

A modern, responsive website for Ishant Commerce Classes - a premier result-oriented commerce education institute in Palwal, Haryana. Built with Next.js 16, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern UI/UX**: Beautiful, light-colored design with smooth animations
- **Dark/Light Theme**: Toggle between light and dark modes
- **Fully Responsive**: Mobile-first design that works on all devices
- **Interactive Components**:
  - Animated hero banner with floating education icons
  - YouTube video gallery with automatic thumbnail fallback
  - Photo gallery section
  - Student testimonials and achievements
  - Contact form with email integration
- **SEO Optimized**: Proper metadata and semantic HTML
- **Performance**: Optimized images and lazy loading
- **Accessibility**: ARIA labels and keyboard navigation support

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Shadcn UI (New York style)
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod validation
- **Theme Management**: next-themes
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

## 🛠️ Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ishant-commerce-classes
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
ishant-commerce-classes/
├── app/                    # Next.js app directory
│   ├── about/             # About Us page
│   ├── about-tutor/       # About Tutor page
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── subjects/          # Subject pages (Accountancy, Business)
│   ├── cities/            # City pages (Palwal, Faridabad)
│   ├── testimonials/      # Testimonials page
│   ├── api/               # API routes (currently unused)
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/          # Page sections
│   │   ├── hero-banner.tsx
│   │   ├── features.tsx
│   │   ├── achievements.tsx
│   │   ├── testimonials.tsx
│   │   ├── youtube-links.tsx
│   │   └── photo-gallery.tsx
│   ├── navbar.tsx         # Navigation bar
│   ├── footer.tsx         # Footer component
│   ├── contact-form.tsx   # Contact form
│   ├── scroll-to-top.tsx  # Scroll to top button
│   └── theme-toggle.tsx   # Theme switcher
├── lib/                   # Utility functions
│   ├── theme-provider.tsx
│   └── utils.ts
├── public/                # Static assets
└── components.json        # Shadcn UI config
```

## 🎨 Key Pages

- **Home** (`/`): Hero banner, features, achievements, testimonials, YouTube links, photo gallery
- **About Us** (`/about`): Mission, vision, and why choose us
- **About Tutor** (`/about-tutor`): Tutor qualifications and achievements
- **Contact** (`/contact`): Contact information and form
- **FAQ** (`/faq`): Frequently asked questions
- **Subjects**: Accountancy and Business Studies pages
- **Cities**: Palwal and Faridabad center pages
- **Testimonials** (`/testimonials`): Student reviews and feedback

## 📧 Contact Form

The contact form uses a `mailto:` link to open the user's email client with pre-filled details. No backend API is required.

**Email**: ishantvermasrcc@gmail.com

## 🎯 Features in Detail

### Hero Banner

- Animated floating education icons
- Dynamic gradient backgrounds
- Statistics showcase (Rating, Reviews, Students, Years)
- Smooth transitions and hover effects

### YouTube Integration

- Automatic thumbnail loading with fallback system
- Links to actual YouTube channel videos
- Subscribe button to channel

### Theme System

- Light/Dark mode toggle
- System preference detection
- Smooth theme transitions
- Persistent theme selection

### Navigation

- Dropdown menus for Subjects and Cities
- Mobile-responsive hamburger menu
- Smooth hover effects

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

You can also deploy to:

- **Netlify**: Connect your Git repository
- **AWS Amplify**: Follow Next.js deployment guide
- **Self-hosted**: Build and run `npm run build && npm start`

## 📝 Environment Variables

Currently, no environment variables are required. If you plan to add email services or other APIs, create a `.env.local` file:

```env
# Example for future email service
# RESEND_API_KEY=your_api_key
# EMAIL_FROM=noreply@yourdomain.com
# EMAIL_TO=ishantvermasrcc@gmail.com
```

## 🔧 Customization

### Colors

Edit `app/globals.css` to change the color scheme. The project uses CSS variables with `oklch` color space.

### Content

- Update contact information in `components/footer.tsx` and `app/contact/page.tsx`
- Modify testimonials in `components/sections/testimonials.tsx`
- Update YouTube videos in `components/sections/youtube-links.tsx`
- Change features in `components/sections/features.tsx`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a private project for Ishant Commerce Classes. For suggestions or improvements, please contact the development team.

## 📄 License

All rights reserved. © 2024 Ishant Commerce Classes

## 👨‍💻 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Components

1. Create component in `components/` directory
2. Use TypeScript for type safety
3. Follow existing component patterns
4. Add animations with Framer Motion
5. Ensure mobile responsiveness

## 📞 Support

For issues or questions:

- **Email**: ishantvermasrcc@gmail.com
- **Phone**: +91 91384 05051
- **Address**: 85, behind Attri Property, HUDA Sector-2, Palwal, Haryana 121102

---

Built with ❤️ for Ishant Commerce Classes
