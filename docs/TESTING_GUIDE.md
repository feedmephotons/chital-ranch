# Chital Ranch - Testing Guide

## Quick Test

Start the development server and verify the site works:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Testing Checklist

### ✅ Visual Testing

#### Header & Navigation
- [ ] Header is visible and sticky on scroll
- [ ] Logo and site title display correctly
- [ ] Navigation links work (smooth scroll to sections)
- [ ] Mobile menu opens/closes properly
- [ ] "Get In Touch" button scrolls to contact section

#### Hero Section
- [ ] Full-screen hero displays with background
- [ ] Headline and subheadline are readable
- [ ] Call-to-action buttons work
- [ ] Scroll indicator animates
- [ ] Background parallax effect works

#### Welcome & Highlights Section
- [ ] Welcome text is centered and readable
- [ ] Three highlight cards display in grid
- [ ] Icons show for each highlight
- [ ] Responsive layout on mobile (stacks vertically)

#### Quote Banner
- [ ] Quote displays with proper styling
- [ ] Background color is navy
- [ ] Text is readable and centered

#### About Us Section
- [ ] Background image displays (if available)
- [ ] Content card has semi-transparent background
- [ ] Text is readable over background
- [ ] Responsive on mobile

#### The Herd Section
- [ ] Two-column layout for breeding info
- [ ] Gallery grid displays 8 images
- [ ] Images have hover effects
- [ ] Placeholder images show (or custom images if added)
- [ ] Responsive grid (1 column mobile, 4 columns desktop)

#### For Sale Section
- [ ] Four stock type cards display
- [ ] "How to Buy" section is readable
- [ ] Request form displays correctly
- [ ] Form has all required fields

#### Visit Section
- [ ] Two-column layout (info + form)
- [ ] Background image displays
- [ ] Date and time inputs work
- [ ] Form validation works

#### Contact Section
- [ ] Dark background with white text
- [ ] Contact information displays correctly
- [ ] Phone number is clickable (tel: link)
- [ ] Contact form displays
- [ ] Form has all fields

#### Footer
- [ ] Three-column layout on desktop
- [ ] Links work properly
- [ ] Contact information displays
- [ ] Current year shows dynamically
- [ ] Stacks nicely on mobile

### ✅ Functionality Testing

#### Form Submissions

**Before Testing Forms:**
1. Get a Resend API key from [resend.com](https://resend.com)
2. Add to `.env.local`:
   ```
   RESEND_API_KEY=your_key_here
   EMAIL_TO=your@email.com
   ```
3. Restart dev server

**Test Request Availability Form:**
1. Scroll to "For Sale" section
2. Fill out all required fields:
   - Name
   - Email
   - Phone
   - Interest (e.g., "Breeder bucks")
   - Message (optional)
3. Click "Send Request"
4. Check for:
   - [ ] Loading state (button shows "Sending...")
   - [ ] Success message appears
   - [ ] Form clears after submission
   - [ ] Email received at `EMAIL_TO` address

**Test Schedule Visit Form:**
1. Scroll to "Visit the Ranch" section
2. Fill out all required fields:
   - Name
   - Email
   - Phone
   - Preferred Date (use date picker)
   - Preferred Time (use time picker)
   - Additional notes (optional)
3. Click "Request Appointment"
4. Check for:
   - [ ] Loading state
   - [ ] Success message
   - [ ] Form clears
   - [ ] Email received with formatted date/time

**Test Contact Form:**
1. Scroll to "Contact" section
2. Fill out all required fields:
   - Name
   - Email
   - Phone (optional)
   - Subject
   - Message
3. Click "Send Message"
4. Check for:
   - [ ] Loading state
   - [ ] Success message
   - [ ] Form clears
   - [ ] Email received

#### Navigation
- [ ] Clicking nav links scrolls smoothly to sections
- [ ] Anchor links work (e.g., #about, #contact)
- [ ] Back button works after navigation
- [ ] URL updates with hash on scroll (optional)

#### Responsive Design

**Desktop (1920px+):**
- [ ] Full-width hero
- [ ] Multi-column layouts display correctly
- [ ] Images are properly sized
- [ ] No horizontal scroll

**Laptop (1280px):**
- [ ] Content fits within viewport
- [ ] Grids adjust appropriately
- [ ] Navigation remains accessible

**Tablet (768px):**
- [ ] Navigation collapses to mobile menu
- [ ] Grids become 2 columns
- [ ] Forms remain usable
- [ ] Images scale properly

**Mobile (375px):**
- [ ] All sections stack vertically
- [ ] Mobile menu works
- [ ] Forms are easy to fill out
- [ ] Buttons are tappable
- [ ] Text is readable (no need to zoom)

### ✅ Performance Testing

#### Page Load Speed
```bash
# Build for production
npm run build

# Start production server
npm start

# Test with Lighthouse (Chrome DevTools)
# Ctrl+Shift+I → Lighthouse tab → Generate report
```

**Target Scores:**
- [ ] Performance: 90+
- [ ] Accessibility: 90+
- [ ] Best Practices: 90+
- [ ] SEO: 90+

#### Image Loading
- [ ] Background images load progressively
- [ ] Gallery images don't cause layout shift
- [ ] Lazy loading works (images below fold)

### ✅ SEO Testing

#### Metadata
View page source (Ctrl+U) and verify:
- [ ] `<title>` tag present
- [ ] `<meta name="description">` present
- [ ] Open Graph tags present (`og:title`, `og:description`)
- [ ] Favicon loads

#### Content
- [ ] One `<h1>` tag per page (in hero)
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] All images have `alt` attributes
- [ ] Links have descriptive text

### ✅ Accessibility Testing

#### Keyboard Navigation
- [ ] Tab key moves through all interactive elements
- [ ] Enter key submits forms
- [ ] Escape closes mobile menu
- [ ] Focus indicators are visible

#### Screen Reader
Use Chrome DevTools or actual screen reader:
- [ ] Sections have proper landmarks
- [ ] Forms have labels
- [ ] Buttons have accessible names
- [ ] Alternative text for images

#### Color Contrast
- [ ] Text is readable on all backgrounds
- [ ] Links are distinguishable
- [ ] Focus states are visible
- [ ] Error messages are clear

### ✅ Browser Testing

Test in multiple browsers:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### ✅ Error Handling

#### Form Errors
Test each form:
- [ ] Submit empty form → validation errors show
- [ ] Submit invalid email → error shows
- [ ] API failure → error message displays
- [ ] Network offline → graceful error

#### Missing Images
- [ ] Placeholder images display if custom images missing
- [ ] No broken image icons
- [ ] Alt text shows if image fails

#### JavaScript Disabled
- [ ] Page content still visible
- [ ] Forms still accessible (may not submit)
- [ ] No console errors

## Testing Email Integration

### Resend Test Mode
If you haven't verified your domain:
```env
EMAIL_FROM=onboarding@resend.dev
```
- Emails only sent to your verified Resend email
- Good for testing

### Production Email
After domain verification:
```env
EMAIL_FROM=noreply@yourdomain.com
```
- Emails sent to any address
- Better deliverability

### Email Checklist
Test each form email:
- [ ] Subject line is descriptive
- [ ] Email is properly formatted (HTML)
- [ ] All form fields appear in email
- [ ] Reply-to is set to user's email
- [ ] Branding matches site (colors, logo)
- [ ] Email doesn't go to spam

## Automated Testing (Optional)

### Add Jest + Testing Library
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

### Example Component Test
```typescript
// __tests__/Button.test.tsx
import { render, screen } from '@testing-library/react'
import Button from '@/components/Button'

test('renders button with text', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByText('Click me')).toBeInTheDocument()
})
```

### Add E2E Testing with Playwright
```bash
npm install --save-dev @playwright/test
```

## Common Issues & Fixes

### Forms Don't Submit
**Issue**: Button doesn't do anything
**Fix**:
1. Check browser console for errors
2. Verify Resend API key is set
3. Check network tab for failed requests

### Images Don't Load
**Issue**: Broken image icons
**Fix**:
1. Verify images exist in `public/images/`
2. Check file names match (case-sensitive)
3. Run `node create-placeholders.js` to regenerate

### Styles Don't Apply
**Issue**: Site looks unstyled
**Fix**:
1. Verify Tailwind CSS is configured
2. Check `globals.css` imports Tailwind
3. Restart dev server

### Build Fails
**Issue**: `npm run build` errors
**Fix**:
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

## Pre-Deployment Checklist

Before deploying to production:
- [ ] All forms tested and working
- [ ] Email integration tested
- [ ] Images optimized (or placeholders ready)
- [ ] SEO metadata updated
- [ ] Environment variables documented
- [ ] Resend domain verified (production)
- [ ] Build succeeds (`npm run build`)
- [ ] Lighthouse score 90+
- [ ] Mobile responsive verified
- [ ] Cross-browser tested

## Post-Deployment Testing

After deploying:
- [ ] Visit production URL
- [ ] Test all forms in production
- [ ] Verify emails deliver
- [ ] Check SSL certificate (HTTPS)
- [ ] Test on real mobile devices
- [ ] Submit sitemap to Google
- [ ] Monitor analytics (if configured)

## Support

If you encounter issues:
1. Check documentation in `/docs`
2. Review Next.js error messages
3. Check browser console for errors
4. Verify environment variables
5. Review Resend dashboard for email delivery

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Resend Docs](https://resend.com/docs)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
