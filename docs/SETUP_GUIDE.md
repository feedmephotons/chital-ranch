# Chital Ranch - Setup Guide

## Prerequisites
- Node.js 18+ and npm
- Git (optional, for version control)
- Text editor (VS Code recommended)

## Installation

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create/edit `.env.local` file:
```
RESEND_API_KEY=your_resend_api_key_here
EMAIL_FROM=noreply@chitalranch.com
EMAIL_TO=info@chitalranch.com
```

**To get Resend API Key**:
1. Sign up at https://resend.com
2. Verify your domain (or use test mode)
3. Create an API key
4. Add to `.env.local`

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
chital-ranch/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── api/               # API routes
│       ├── contact/
│       ├── request-availability/
│       └── schedule-visit/
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Button.tsx
│   └── forms/
├── public/               # Static assets
│   ├── images/
│   │   ├── icons/
│   │   ├── backgrounds/
│   │   └── gallery/
│   └── favicon.ico
├── docs/                 # Documentation
│   ├── PROJECT_OVERVIEW.md
│   ├── DESIGN_SYSTEM.md
│   └── SETUP_GUIDE.md
├── tailwind.config.ts    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json
```

## Development Commands

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Run Linter
```bash
npm run lint
```

## Customization

### Updating Content
Content is embedded in components. To update:
1. Navigate to the component file (e.g., `app/page.tsx`)
2. Edit the text content
3. Save - changes appear immediately in dev mode

### Changing Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    navy: '#1a2332',    // Change these values
    charcoal: '#2d3748',
    gold: '#d4af37',
  },
}
```

### Adding Images
1. Place images in `public/images/`
2. Reference in code: `/images/filename.jpg`
3. Use Next.js `<Image>` component for optimization

### Modifying Forms
Form logic in `app/api/` routes. Update:
1. Validation rules
2. Email templates
3. Success/error messages

## Email Setup

### Resend Configuration
1. **Domain Verification** (Production):
   - Add DNS records in Resend dashboard
   - Verify domain
   - Update `EMAIL_FROM` in `.env.local`

2. **Test Mode** (Development):
   - Use `onboarding@resend.dev` as sender
   - Emails sent to verified addresses only

### Email Templates
Located in API route files:
- `app/api/contact/route.ts`
- `app/api/request-availability/route.ts`
- `app/api/schedule-visit/route.ts`

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables
5. Deploy

### Custom Server
```bash
npm run build
npm start
```

Runs on port 3000 by default.

## Troubleshooting

### Dependencies Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
1. Check TypeScript errors: `npm run lint`
2. Verify all environment variables are set
3. Clear Next.js cache: `rm -rf .next`

### Form Submission Errors
1. Verify Resend API key is correct
2. Check email addresses are valid
3. Review API route logs in terminal

### Image Loading Issues
1. Ensure images are in `public/images/`
2. Check file paths are correct
3. Verify Next.js config allows domain (if external)

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization
- Images: Use Next.js Image component (automatic optimization)
- Fonts: Preloaded in layout
- Code splitting: Automatic with Next.js
- Lazy loading: Images below fold

## Security Notes
- Never commit `.env.local` to version control
- Keep dependencies updated
- Use environment variables for all secrets
- Validate all form inputs server-side

## Support & Resources
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Resend API: https://resend.com/docs
- TypeScript: https://www.typescriptlang.org/docs
