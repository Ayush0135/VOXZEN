# Voxzen AI - Production Website

A modern, production-ready Next.js website for **Voxzen AI**, a premium AI dubbing service for YouTube creators.

## 🚀 Features

- **Modern Design**: Clean, conversion-focused design with gradient accents and smooth animations
- **Fully Responsive**: Mobile-first approach, works perfectly on all devices
- **SEO Optimized**: Complete meta tags, Open Graph, and semantic HTML
- **Performance**: Built with Next.js App Router for optimal performance
- **Accessible**: WCAG compliant with proper ARIA labels and semantic markup

## 📋 Sections

1. **Header** - Navigation with mobile menu and CTA
2. **Hero** - Compelling headline with embedded demo video
3. **Features** - 6 key features with icons and descriptions
4. **Pricing** - 4 pricing tiers (Free, Creator, Pro Creator, Agency) + Add-ons
5. **Demo Video** - Product demonstration section
6. **FAQ** - 10 comprehensive Q&A items with accordion UI
7. **Contact** - CTA section with email contact
8. **Footer** - Social links, navigation, and legal links

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Font**: Inter (Google Fonts)
- **Language**: JavaScript (ES6+)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Development

The development server runs on `http://localhost:3000`

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
voxzen-web/
├── app/
│   ├── components/
│   │   ├── Header.js          # Navigation header
│   │   ├── Footer.js          # Site footer
│   │   ├── VideoEmbed.js      # YouTube video embed
│   │   ├── PricingCard.js     # Pricing plan card
│   │   └── FAQItem.js         # FAQ accordion item
│   ├── globals.css            # Global styles
│   ├── layout.js              # Root layout with SEO
│   └── page.js                # Main landing page
├── public/                    # Static assets
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS config
├── postcss.config.js          # PostCSS config
└── package.json               # Dependencies
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: { ... },  // Main brand color
  accent: { ... },   // Accent/secondary color
}
```

### Content

All content is in `app/page.js`:
- Features data
- Pricing plans
- Add-ons
- FAQ items

### Video Embeds

Replace the `videoId` in VideoEmbed components:

```jsx
<VideoEmbed 
  videoId="YOUR_YOUTUBE_VIDEO_ID" 
  title="Video Title"
/>
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Other Platforms

```bash
# Build the project
npm run build

# The build output is in .next/
# Upload to your hosting platform
```

## 🔧 Environment Variables

For production, create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://voxzenai.in
NEXT_PUBLIC_CONTACT_EMAIL=support@voxzenai.in
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 SEO Features

- Meta tags (title, description, keywords)
- Open Graph tags
- Twitter Card tags
- Semantic HTML5
- Structured data ready
- Mobile-friendly
- Fast page load

## 📧 Contact

For questions or support:
- Email: support@voxzenai.in
- Website: https://voxzenai.in

## 📄 License

© 2026 Voxzen AI. All rights reserved.

---

**Built with ❤️ using Next.js and Tailwind CSS**
