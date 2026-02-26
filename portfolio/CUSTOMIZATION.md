# Customization Guide

This guide will help you customize the portfolio to match your personal brand and information.

## 🎨 Changing Colors

### Primary Color

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#2563EB', // Change this to your preferred color
    },
  },
}
```

### Color Suggestions:
- Blue: `#2563EB` (Current)
- Purple: `#7C3AED`
- Green: `#059669`
- Orange: `#EA580C`
- Red: `#DC2626`

## 🔤 Changing Fonts

### Update Font Family

1. Edit `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Poppins', 'system-ui', 'sans-serif'], // Change 'Inter' to your font
},
```

2. Update `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

### Popular Font Combinations:
- **Modern**: Inter + Inter
- **Professional**: Poppins + Poppins
- **Elegant**: Playfair Display + Source Sans Pro
- **Tech**: Roboto Mono + Roboto

## 📝 Updating Content

### Personal Information

Edit `src/components/Hero.jsx`:
```javascript
<h1>Hi, I'm <span className="text-primary">Your Name</span></h1>
<h2>Your Title | Your Subtitle</h2>
<p>Your tagline here</p>
```

### About Section

Edit `src/components/About.jsx` - Update the paragraphs with your own story.

### Skills

Edit `src/components/Skills.jsx`:
```javascript
const skills = [
  { name: 'Your Skill', icon: YourIcon, color: 'text-blue-600' },
  // Add more skills
]
```

### Projects

Edit `src/components/Projects.jsx`:
```javascript
const projects = [
  {
    name: 'Project Name',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2'],
    github: 'your-github-link',
    live: 'your-live-demo-link', // Optional
  },
]
```

### Experience

Edit `src/components/Experience.jsx` - Update work experience and education arrays.

### Contact Information

Edit `src/components/Contact.jsx`:
```javascript
const contacts = [
  {
    name: 'Email',
    value: 'your-email@example.com',
    href: 'mailto:your-email@example.com',
    // ... rest of config
  },
]
```

## 🖼️ Adding Images

### Profile Picture

1. Add your image to `public/` folder
2. Update Hero section:
```javascript
<img src="/profile.jpg" alt="Your Name" className="rounded-full w-48 h-48" />
```

### Project Images

1. Add images to `public/projects/` folder
2. Update Projects component:
```javascript
<img src="/projects/project1.jpg" alt="Project" />
```

## 🎭 Customizing Animations

### Animation Speed

Edit any component with Framer Motion:
```javascript
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }} // Change duration
>
```

### Disable Animations

Remove or comment out `motion` components and replace with regular `div`:
```javascript
// Before
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

// After
<div>
```

## 📱 Adding New Sections

1. Create new component in `src/components/`:
```javascript
// src/components/NewSection.jsx
const NewSection = () => {
  return (
    <section id="new-section" className="py-20">
      {/* Your content */}
    </section>
  )
}
export default NewSection
```

2. Import in `App.jsx`:
```javascript
import NewSection from './components/NewSection'

// Add to JSX
<NewSection />
```

3. Add to navigation in `Navbar.jsx`:
```javascript
const navItems = [
  // ... existing items
  { name: 'New Section', href: '#new-section' },
]
```

## 🔗 Adding Social Links

Edit `src/components/Contact.jsx` to add more social platforms:

```javascript
import { FaTwitter, FaYoutube } from 'react-icons/fa'

const contacts = [
  // ... existing contacts
  {
    name: 'Twitter',
    value: '@yourhandle',
    href: 'https://twitter.com/yourhandle',
    icon: FaTwitter,
    color: 'text-blue-400',
    bgColor: 'bg-blue-50',
    hoverColor: 'hover:bg-blue-100',
  },
]
```

## 🎯 SEO Optimization

### Update Meta Tags

Edit `index.html`:
```html
<title>Your Name - Your Title</title>
<meta name="description" content="Your description" />
<meta property="og:title" content="Your Name" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="/og-image.jpg" />
```

### Add Favicon

1. Add your favicon to `public/` folder
2. Update `index.html`:
```html
<link rel="icon" type="image/png" href="/favicon.png" />
```

## 🌙 Adding Dark Mode (Optional)

1. Install dependencies:
```bash
npm install @headlessui/react
```

2. Create theme context and toggle component
3. Update Tailwind config for dark mode
4. Add dark: variants to your classes

## 📊 Adding Analytics

### Google Analytics

Add to `index.html` before closing `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Testing Your Changes

1. Start dev server:
```bash
npm run dev
```

2. Test build:
```bash
npm run build
npm run preview
```

3. Check responsiveness:
- Use browser dev tools
- Test on actual devices
- Use responsive design mode

## 💡 Tips

- Keep animations subtle and professional
- Maintain consistent spacing throughout
- Test on multiple browsers
- Optimize images before adding
- Keep color contrast accessible
- Use semantic HTML
- Test all links before deploying

## 🆘 Need Help?

If you encounter issues:
1. Check browser console for errors
2. Verify all imports are correct
3. Clear cache and rebuild
4. Check the official documentation

Contact: navedhusainshaikh@gmail.com
