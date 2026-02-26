# Deployment Guide

This guide will help you deploy your portfolio website to various hosting platforms.

## 🚀 Vercel (Recommended)

Vercel offers the easiest deployment for Vite projects.

### Steps:

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd portfolio
vercel
```

3. Follow the prompts and your site will be live!

### Or use Vercel Dashboard:

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will auto-detect Vite and deploy

## 🌐 Netlify

### Option 1: Drag and Drop

1. Build your project:
```bash
npm run build
```

2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to Netlify

### Option 2: Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
npm run build
netlify deploy --prod
```

## 📄 GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/portfolio"
}
```

3. Update `vite.config.js`:
```javascript
export default {
  base: '/portfolio/',
  // ... rest of config
}
```

4. Deploy:
```bash
npm run deploy
```

## 🔧 Custom Server

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder to your server

3. Configure your web server (Apache/Nginx) to serve the files

### Nginx Configuration:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 🌍 Environment Variables

If you need environment variables:

1. Create `.env` file:
```
VITE_API_URL=your_api_url
```

2. Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## ✅ Pre-Deployment Checklist

- [ ] Test the build locally: `npm run build && npm run preview`
- [ ] Update contact information
- [ ] Add your actual projects
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Optimize images
- [ ] Update meta tags for SEO

## 🔍 Performance Tips

- Images should be optimized (use WebP format)
- Enable gzip compression on your server
- Use a CDN for static assets
- Monitor with Google Lighthouse

## 📊 Analytics (Optional)

Add Google Analytics to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🆘 Troubleshooting

### Build fails:
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `npm cache clean --force`

### Blank page after deployment:
- Check browser console for errors
- Verify base path in vite.config.js
- Ensure all routes are configured correctly

## 📞 Need Help?

Contact: navedhusainshaikh@gmail.com
