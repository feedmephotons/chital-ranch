# Chital Ranch - Deployment Guide

## Pre-Deployment Checklist

### 1. Environment Variables
Ensure `.env.local` is configured with your Resend API key:
```env
RESEND_API_KEY=your_actual_api_key
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=your@email.com
```

### 2. Custom Images (Optional)
Replace placeholder images with real photos:
- Generate with AI: See [IMAGE_GENERATION.md](./IMAGE_GENERATION.md)
- Use stock photos: Download from Unsplash/Pexels
- Use your own: Add photos to `public/images/`

### 3. Build Test
```bash
npm run build
npm start
```

Visit `http://localhost:3000` to verify everything works.

## Deployment Options

### Option 1: Vercel (Recommended)

**Why Vercel:**
- Built by Next.js creators
- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Free tier available

**Steps:**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables:
   - `RESEND_API_KEY`
   - `EMAIL_FROM`
   - `EMAIL_TO`
6. Click "Deploy"

**Custom Domain:**
1. In Vercel dashboard, go to your project
2. Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

### Option 2: Netlify

**Steps:**
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Add environment variables in Site settings
7. Deploy

### Option 3: Custom VPS (Digital Ocean, AWS, etc.)

**Requirements:**
- Node.js 18+
- nginx (recommended for reverse proxy)
- SSL certificate (Let's Encrypt)

**Setup:**
```bash
# Clone repository
git clone your-repo-url
cd chital-ranch

# Install dependencies
npm install

# Build
npm run build

# Use PM2 for process management
npm install -g pm2
pm2 start npm --name "chital-ranch" -- start

# Configure nginx reverse proxy
# Point nginx to localhost:3000
```

## Post-Deployment

### 1. Domain Setup
Point your domain to deployment:
- **Vercel**: Add A/CNAME records
- **Netlify**: Add A/CNAME records
- **VPS**: Point A record to server IP

### 2. Email Configuration

**Resend Domain Verification:**
1. Go to Resend dashboard
2. Add your domain
3. Add DNS records:
   - SPF record
   - DKIM record
   - DMARC record (optional)
4. Verify domain
5. Update `EMAIL_FROM` to use your domain

**Test Email Sending:**
```bash
# Submit a form on your site
# Check email delivery
# Check spam folder if not received
```

### 3. SEO Setup

**Update metadata in `app/layout.tsx`:**
```typescript
export const metadata: Metadata = {
  title: 'Chital Ranch | Texas-Bred Chocolate Fallow Deer',
  description: 'Your actual description',
  openGraph: {
    url: 'https://yourdomain.com', // Update
  },
}
```

**Submit sitemap:**
```bash
# Create sitemap.xml in public/
# Submit to Google Search Console
# Submit to Bing Webmaster Tools
```

### 4. Analytics (Optional)

**Google Analytics:**
1. Create GA4 property
2. Add tracking code to `app/layout.tsx`

**Plausible Analytics (privacy-friendly):**
1. Sign up at plausible.io
2. Add script to layout

### 5. Performance Optimization

**Image Optimization:**
- Replace SVG placeholders with optimized JPG/WebP
- Use Next.js Image component (already implemented)
- Compress images before uploading

**Caching:**
- Vercel/Netlify handle this automatically
- For VPS, configure nginx caching

## Monitoring

### Check Build Logs
- Vercel: Dashboard → Deployments → Build Logs
- Netlify: Dashboard → Deploys → Deploy Log

### Monitor Form Submissions
- Check Resend dashboard for email delivery
- Review API route logs for errors

### Performance Monitoring
- Vercel Analytics (built-in)
- Google PageSpeed Insights
- GTmetrix

## Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Forms Don't Send Emails
1. Check Resend API key is correct
2. Verify domain is verified in Resend
3. Check browser console for errors
4. Review API route logs

### Images Not Loading
1. Verify images exist in `public/images/`
2. Check file paths are correct
3. Review Next.js image config

### Slow Load Times
1. Optimize images (compress, WebP format)
2. Check Lighthouse score
3. Enable caching headers

## Security

### HTTPS
- Vercel/Netlify: Automatic
- VPS: Use Certbot for Let's Encrypt

### Environment Variables
- Never commit `.env.local` to Git
- Use platform environment variable settings
- Rotate API keys periodically

### Rate Limiting
Consider adding rate limiting to API routes:
```typescript
// Example with upstash/ratelimit
import { Ratelimit } from "@upstash/ratelimit"
```

## Backup

### Code
- Keep Git repository updated
- Use GitHub/GitLab for backups

### Database
- This site is static, no database needed
- Form submissions are emailed

## Cost Estimates

### Vercel
- Hobby (Free): 100GB bandwidth/month
- Pro ($20/month): 1TB bandwidth
- Forms/API: Included

### Netlify
- Starter (Free): 100GB bandwidth/month
- Pro ($19/month): 400GB bandwidth

### Resend Email
- Free: 3,000 emails/month
- Pro ($20/month): 50,000 emails/month

### Domain
- $10-15/year (Namecheap, Google Domains)

## Maintenance

### Monthly
- Check email delivery status
- Review form submissions
- Monitor site performance

### Quarterly
- Update dependencies: `npm update`
- Review and rotate API keys
- Check for Next.js updates

### Annually
- Renew domain
- Review hosting plan
- Update content/images

## Support Resources

- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Resend Docs: https://resend.com/docs
- Next.js Discord: https://discord.gg/nextjs
