# 🚀 Quick Start Guide

Get your portfolio website up and running in 5 minutes!

## Step 1: Navigate to Project

```bash
cd portfolio
```

## Step 2: Install Dependencies (if not already done)

```bash
npm install
```

This will install:
- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

## Step 3: Start Development Server

```bash
npm run dev
```

Your portfolio will be available at: **http://localhost:5173**

## Step 4: View Your Portfolio

Open your browser and visit:
```
http://localhost:5173
```

You should see:
- ✅ Hero section with your name
- ✅ About section with professional summary
- ✅ Skills section with technical expertise
- ✅ Projects showcase
- ✅ Experience timeline
- ✅ Contact information
- ✅ Smooth animations throughout

## 🎨 Quick Customization

### Change Primary Color

Edit `portfolio/tailwind.config.js`:
```javascript
colors: {
  primary: '#2563EB', // Change to your color
}
```

### Update Your Information

Edit these files:
- `src/components/Hero.jsx` - Your name and title
- `src/components/About.jsx` - Your story
- `src/components/Projects.jsx` - Your projects
- `src/components/Contact.jsx` - Your contact info

## 📦 Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## 🌐 Deploy

### Option 1: Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
1. Run `npm run build`
2. Drag `dist` folder to netlify.com

### Option 3: GitHub Pages
See `DEPLOYMENT.md` for detailed instructions

## 🔍 Preview Production Build

```bash
npm run preview
```

## 📱 Test Responsiveness

1. Open browser DevTools (F12)
2. Click device toolbar icon
3. Test different screen sizes:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1920px

## ✅ Checklist Before Deployment

- [ ] Updated personal information
- [ ] Added real projects
- [ ] Tested all links
- [ ] Checked mobile responsiveness
- [ ] Verified contact information
- [ ] Tested build: `npm run build`
- [ ] Previewed build: `npm run preview`

## 🆘 Troubleshooting

### Port already in use?
```bash
# Kill the process or use different port
npm run dev -- --port 3000
```

### Build errors?
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
```

### Animations not working?
- Check browser console for errors
- Ensure Framer Motion is installed
- Clear browser cache

## 📚 Additional Resources

- **Full Documentation**: See `README.md`
- **Deployment Guide**: See `DEPLOYMENT.md`
- **Customization Guide**: See `CUSTOMIZATION.md`
- **Project Summary**: See `PROJECT_SUMMARY.md`

## 💡 Pro Tips

1. **Hot Reload**: Changes auto-refresh in dev mode
2. **Component Structure**: Each section is a separate component
3. **Tailwind Classes**: Use Tailwind utility classes for styling
4. **Animations**: Powered by Framer Motion
5. **Icons**: From React Icons library

## 🎯 Next Steps

1. ✅ Start dev server
2. ✅ Customize content
3. ✅ Add your projects
4. ✅ Test responsiveness
5. ✅ Build for production
6. ✅ Deploy to hosting

## 📞 Need Help?

**Naved Husain Shaikh**
- Email: navedhusainshaikh@gmail.com
- GitHub: github.com/navedhusain06

---

**Happy Coding! 🚀**

Your professional portfolio is ready to showcase your expertise to the world!
