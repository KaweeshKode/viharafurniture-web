# Vihara Furniture Homepage - Customization Checklist

## ✅ Completed
- ✓ Header with navigation and social links
- ✓ Hero section with main tagline
- ✓ Location card overlay
- ✓ "Meet Your Dream Furniture's" section
- ✓ "You Imagine, We Designing" section
- ✓ Customer testimonials section
- ✓ Footer with links and contact info
- ✓ Responsive design
- ✓ Color scheme matching the design

## 📝 Required: Add Your Images

### 1. Logo (REQUIRED)
   - **Path:** `public/logo.png` or `public/logo.svg`
   - **Current:** Placeholder SVG logo
   - **Action:** Replace with your actual Vihara Furniture logo

### 2. Hero Background Image (REQUIRED)
   - **Path:** `public/hero-bg.jpg`
   - **Current:** None (will show error in browser)
   - **Action:** Add a high-quality image of your furniture showroom (1920x1080px recommended)
   - **Alternative:** You can use the furniture image from your screenshot

## 🎨 Recommended Customizations

### 1. Update Contact Information
   - **Files:** `src/components/Header.jsx`, `src/components/Footer.jsx`
   - Verify phone numbers: +0728326219 / +0748563926
   - Verify email: viharafurniture@gmail.com
   - Verify address in Hero and Footer components

### 2. Add Real Social Media Links
   - **Files:** `src/components/Header.jsx`, `src/components/Footer.jsx`
   - Replace placeholder URLs with actual Facebook, Instagram, TikTok links

### 3. Update Testimonials
   - **File:** `src/components/Testimonials.jsx`
   - Replace with real customer testimonials
   - Add more testimonials if needed

### 4. Add Navigation Functionality
   - Link "Store", "Packages", "About Us", "Contact" pages
   - Add routing with React Router if you have multiple pages

### 5. Make Cards Interactive
   - **Files:** 
     - `src/components/DreamFurniture.jsx` - "Go to Store" and "Explore Packages"
     - `src/components/Designing.jsx` - "Meet Our Expert"
   - Add onClick handlers or links to actual pages

### 6. Book a Session Button
   - **File:** `src/components/Header.jsx`
   - Add functionality to open booking form or link to booking page

## 🚀 How to Run

1. **Development Mode:**
   ```bash
   npm run dev
   ```
   Opens at http://localhost:5173

2. **Build for Production:**
   ```bash
   npm run build
   ```

3. **Preview Production Build:**
   ```bash
   npm run preview
   ```

## 📱 Responsive Breakpoints

- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: Below 768px

All components are responsive and will adapt to different screen sizes.

## 🎨 Color Palette Used

- **Primary Brown:** `#8B7355` (navbar, footer, headings)
- **Light Beige:** `#F5F0E8` (background)
- **Tan:** `#C4B5A0` (top bar)
- **Sage Green:** `#9FA582` (Book a Session button)
- **Olive Green:** `#A39B7E`, `#9C9475` (cards)
- **Light Tan:** `#E8DCC8` (testimonial cards)

## 🔧 Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool
- **React Icons** - Icon library
- **CSS3** - Styling

## 📂 Component Structure

```
src/
├── components/
│   ├── Header.jsx & Header.css
│   ├── Hero.jsx & Hero.css
│   ├── DreamFurniture.jsx & DreamFurniture.css
│   ├── Designing.jsx & Designing.css
│   ├── Testimonials.jsx & Testimonials.css
│   └── Footer.jsx & Footer.css
├── App.jsx
├── App.css
└── index.css
```

## 💡 Tips

1. Keep the color scheme consistent across all components
2. Use the same fonts throughout (currently using Segoe UI)
3. Maintain spacing and padding for visual consistency
4. Test on mobile devices for responsiveness
5. Optimize images before adding them (compress for web)
6. Consider adding animations for better UX

## 🐛 Known Issues to Fix

1. Add actual hero background image (currently missing)
2. Replace SVG placeholder logo with actual logo
3. Update all social media links with real URLs
4. Add proper routing for navigation links

---

**Need Help?** Check the component files - they are well-commented and easy to customize!
