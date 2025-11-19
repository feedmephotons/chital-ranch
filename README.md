# 🦌 Chital Ranch Website

Professional, modern website for **Chital Ranch** - A premier Texas breeding operation specializing in chocolate fallow deer.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables
# Edit .env.local and add your Resend API key
RESEND_API_KEY=your_api_key_here
EMAIL_FROM=noreply@chitalranch.com
EMAIL_TO=your@email.com

# 3. Run development server
npm run dev

# 4. Open browser
# Visit http://localhost:3000
```

## 📋 What's Included

### ✅ Complete Website Features
- **Hero Section** - Stunning full-screen introduction
- **Welcome & Highlights** - Three-column feature showcase
- **About Us** - Ranch history and breeding philosophy
- **The Herd** - Breeding program details with image gallery
- **For Sale** - Available stock with request form
- **Visit the Ranch** - Appointment scheduling form
- **Contact** - Full contact information and message form

### ✅ Technical Features
- Fully responsive design (mobile, tablet, desktop)
- Professional color palette (Navy, Charcoal, Gold)
- Working contact forms with email integration
- SEO optimized with metadata and Open Graph tags
- Fast performance with Next.js optimization
- TypeScript for type safety
- Tailwind CSS for styling

### ✅ Forms with Email Integration
All three forms are fully functional and integrated with Resend API:
1. **Request Availability** - For inquiring about available animals
2. **Schedule Visit** - For booking ranch appointments
3. **Contact Form** - For general inquiries

## 📚 Documentation

Comprehensive guides available in the `/docs` folder:

| Document | Description |
|----------|-------------|
| [PROJECT_OVERVIEW.md](docs/PROJECT_OVERVIEW.md) | Site structure, content strategy, and brand identity |
| [DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) | Colors, typography, components, and design specs |
| [SETUP_GUIDE.md](docs/SETUP_GUIDE.md) | Installation, development, and customization |
| [IMAGE_GENERATION.md](docs/IMAGE_GENERATION.md) | How to generate custom AI images |
| [DEPLOYMENT_GUIDE.md](docs/DEPLOYMENT_GUIDE.md) | Deploy to Vercel, Netlify, or custom server |

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom CSS
- **Email**: [Resend API](https://resend.com/)
- **Deployment**: Ready for Vercel, Netlify, or custom hosting

## 🎨 Customization

### Update Content
Content is in React components under `/components`:
- Edit text directly in component files
- Changes appear immediately in dev mode

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    navy: '#1a2332',    // Change to your colors
    charcoal: '#2d3748',
    gold: '#d4af37',
  }
}
```

### Add Custom Images
1. **Option 1**: Use the provided image generation scripts
   - See [IMAGE_GENERATION.md](docs/IMAGE_GENERATION.md)
   - Requires OpenAI and Google AI API keys

2. **Option 2**: Use your own photos
   - Place images in `public/images/`
   - Follow the naming convention in docs

3. **Option 3**: Use stock photos
   - Download from Unsplash, Pexels, or Pixabay
   - Optimize images before uploading

## 📧 Email Setup

### Get Resend API Key
1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add to `.env.local`

### Domain Verification (Production)
1. Add your domain in Resend dashboard
2. Add DNS records (SPF, DKIM)
3. Verify domain
4. Update `EMAIL_FROM` to use your domain

### Test Mode (Development)
- Use `onboarding@resend.dev` as sender
- Emails only sent to verified addresses

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
```

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables

### Custom Server
```bash
npm run build
npm start
# Runs on port 3000
```

See [DEPLOYMENT_GUIDE.md](docs/DEPLOYMENT_GUIDE.md) for detailed instructions.

## 📁 Project Structure

```
chital-ranch/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Home page (all sections)
│   ├── globals.css        # Global styles
│   └── api/               # API routes for forms
├── components/            # React components
│   ├── Header.tsx         # Sticky navigation
│   ├── Footer.tsx         # Site footer
│   ├── HeroSection.tsx    # Landing hero
│   ├── *Section.tsx       # All page sections
│   ├── Button.tsx         # Reusable button
│   ├── Input.tsx          # Form input
│   └── ...                # Other components
├── public/                # Static assets
│   └── images/            # Images
│       ├── backgrounds/   # Section backgrounds
│       ├── gallery/       # Deer photos
│       └── icons/         # Icons
├── docs/                  # Documentation
└── tailwind.config.ts     # Tailwind configuration
```

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📞 Contact Information

**Chital Ranch**
- **Address**: 1424 County Rd 329, Floresville, TX 78114
- **Phone**: (210) 275-7107
- **Location**: South Texas

## 📝 License

This project is proprietary and created for Chital Ranch.

## 🤝 Support

For technical issues or questions:
1. Check the documentation in `/docs`
2. Review [Next.js documentation](https://nextjs.org/docs)
3. Check [Tailwind CSS docs](https://tailwindcss.com/docs)

---

**Built with** Next.js, TypeScript, and Tailwind CSS
**Ready to deploy** on Vercel, Netlify, or custom hosting
**Professional, responsive, and production-ready**
