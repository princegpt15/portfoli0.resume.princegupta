# 🚀 Personal Portfolio Website - AI/ML Student

A modern, responsive, and feature-rich personal portfolio website designed specifically for AI/ML students and aspiring machine learning engineers. Built with clean HTML, CSS, and JavaScript - no frameworks required!

## ✨ Features

### 🎨 Design & UI
- **Modern Dark Theme**: Professional dark blue/charcoal color scheme with accent highlights
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Subtle fade-in, slide, and hover effects throughout
- **Typing Effect**: Dynamic hero section with rotating text animation
- **Gradient Accents**: Beautiful gradient overlays and accent colors

### 📱 Sections

1. **Hero Section**
   - Professional introduction with profile image
   - Typing animation with multiple taglines
   - Call-to-action buttons (View Projects, Download Resume, Contact)
   - Social media links (GitHub, LinkedIn, Kaggle, Papers With Code)

2. **About Me**
   - Professional summary
   - Profile image with statistics cards
   - Contact information display

3. **Education**
   - Degree and specialization details
   - Institution information
   - CGPA highlighted
   - Key coursework list

4. **Technical Skills**
   - Categorized skill sections:
     - Programming Languages
     - Machine Learning & Deep Learning
     - Data & Databases
     - Tools & Platforms
   - Interactive skill tags with hover effects

5. **Projects** (Detailed)
   - Comprehensive project cards with:
     - Problem statement
     - Tech stack with badges
     - Dataset information
     - Model approach
     - Accuracy/Results
     - Key learnings
     - GitHub and demo links

6. **Experience/Internship**
   - Timeline-based layout
   - Detailed responsibilities
   - Technology badges

7. **Certifications**
   - Certificate cards with issuer information
   - Skills covered
   - External certificate links

8. **Achievements**
   - Featured achievements (hackathon wins, awards)
   - Visual badges and icons
   - Achievement details

9. **Professional Profiles**
   - Direct links to:
     - GitHub
     - LinkedIn
     - Kaggle
     - Papers With Code

10. **Contact Section**
    - Contact information display
    - Working contact form with validation
    - Social media links
    - Success message on form submission

### 🎯 Interactive Features
- Smooth scroll navigation
- Active navbar highlighting based on scroll position
- Mobile-responsive hamburger menu
- Form validation with error messages
- Typing animation effect
- Scroll-triggered animations
- Hover effects on cards and buttons
- Statistics counter animation
- Project card tilt effect (optional)

## 📁 Project Structure

```
portfolio/
│
├── index.html                 # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css         # Comprehensive styling
│   ├── js/
│   │   └── script.js         # Interactive functionality
│   └── images/
│       └── profile.jpg       # Your profile image
│
├── README.md                  # Documentation (this file)
└── resume.pdf                # Your resume (to be added)
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A code editor (VS Code recommended)
- Basic knowledge of HTML/CSS/JS (for customization)

### Installation

1. **Navigate to the portfolio folder**
   ```bash
   cd portfolio
   ```

2. **Open in browser**
   - Simply double-click `index.html`, or
   - Right-click `index.html` → Open With → Your Browser

3. **For development with live reload**, use VS Code with Live Server:
   ```bash
   # Install Live Server extension in VS Code
   # Right-click index.html → "Open with Live Server"
   ```

## ✏️ Customization Guide

### 1. **Personal Information**

Open `index.html` and replace placeholder text:

- **Line 8-9**: Update page title and meta description
- **Line 28**: Replace "YourName" with your name
- **Line 49-51**: Update your name and title
- **Lines 120-165**: Update About section with your information
- **Lines 191-235**: Update Education details (degree, university, CGPA)
- **All email/phone placeholders**: Replace with your actual contact information

### 2. **Profile Image**

Your profile image is already in place at:
```
portfolio/assets/images/profile.jpg
```

### 3. **Resume PDF**

Add your resume PDF:
1. Copy your resume file to the `portfolio` folder
2. Rename it to `resume.pdf`, or
3. Update the download link in `index.html` (line 57)

### 4. **Projects**

Update the project cards (starting at line 284):
- Replace Kolam Pattern Recognition details with your project
- Update AI Chatbot details with your project
- Add more projects by duplicating the project card structure

### 5. **Skills**

Update skill tags (lines 253-282):
- Add or remove programming languages
- Update ML/DL frameworks based on your experience
- Modify tools and platforms

### 6. **Experience**

Update experience section (lines 379-425):
- Replace company name and role
- Update duration
- Modify responsibilities
- Change technology badges

### 7. **Certifications**

Update certification cards (lines 434-506):
- Replace course names
- Update issuer information
- Add certificate links
- Modify skill badges

### 8. **Achievements**

Update achievements (lines 518-561):
- Replace hackathon details
- Add academic achievements
- Include competition wins

### 9. **Social Links**

Update all social media URLs throughout the file:
- GitHub: Replace `yourusername` with your GitHub username
- LinkedIn: Update with your LinkedIn profile URL
- Kaggle: Add your Kaggle username
- Papers With Code: Add your profile URL

### 10. **Colors & Theme**

Modify in `assets/css/style.css` (lines 6-25):
```css
:root {
    --primary-color: #2563eb;     /* Change primary color */
    --secondary-color: #1e40af;    /* Change secondary color */
    --dark-bg: #0f172a;           /* Change background color */
    /* ... more color variables */
}
```

## 📱 Responsive Breakpoints

The portfolio is optimized for:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended - Free)

1. Create a new GitHub repository
2. Push your portfolio folder to the repository
3. Go to Settings → Pages
4. Select main branch → Save
5. Your site will be live at `https://yourusername.github.io/repository-name/`

### Option 2: Netlify (Easy Deployment)

1. Go to [netlify.com](https://www.netlify.com/)
2. Drag and drop your `portfolio` folder
3. Your site is live instantly with a custom URL

### Option 3: Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Navigate to portfolio folder
3. Run: `vercel`
4. Follow prompts for deployment

### Option 4: Traditional Web Hosting

Upload the entire `portfolio` folder to your web hosting via FTP:
- cPanel File Manager
- FileZilla or similar FTP client

## 🔧 Advanced Customizations

### Adding Google Analytics

Uncomment and update in `assets/js/script.js` (around line 450):
```javascript
gtag('config', 'YOUR-GA-ID');
```

### Adding Contact Form Backend

Replace the simulated form submission (line 170-180 in script.js) with:
```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
```

### Dark/Light Mode Toggle

Uncomment the theme toggle code in `script.js` (around line 420)

### Adding Blog Section

1. Create a new section in `index.html`
2. Add navigation link
3. Style in `style.css`
4. Consider using a headless CMS for content management

## 🎓 Learning Resources

To understand and modify this portfolio:

- **HTML/CSS**: [MDN Web Docs](https://developer.mozilla.org/)
- **JavaScript**: [JavaScript.info](https://javascript.info/)
- **Responsive Design**: [CSS-Tricks](https://css-tricks.com/)
- **Animations**: [Animate.css](https://animate.style/)

## 🐛 Troubleshooting

### Images not loading
- Check file paths are correct
- Ensure images are in `assets/images/` folder
- Check image file extensions match HTML references

### Styling looks broken
- Clear browser cache (Ctrl + Shift + R)
- Check CSS file is linked correctly in HTML
- Verify no syntax errors in style.css

### JavaScript not working
- Open browser console (F12) to check for errors
- Ensure script.js is linked at the end of body tag
- Check for typos in element IDs

### Mobile menu not working
- Verify hamburger and navMenu IDs in HTML match JavaScript
- Check for JavaScript console errors
- Test in different browsers

## 📈 Future Enhancements

Consider adding:

- [ ] Blog section with posts
- [ ] Project demo videos/GIFs
- [ ] Testimonials section
- [ ] Interactive skill level indicators
- [ ] GitHub activity feed integration
- [ ] Kaggle competition badges
- [ ] Resume builder integration
- [ ] Multi-language support
- [ ] PDF export of portfolio
- [ ] Analytics dashboard

## 🤝 Contributing

This is a personal portfolio template. Feel free to:
- Fork and customize for your own use
- Submit issues for bugs
- Suggest improvements via pull requests

## 📄 License

This project is open source and available for personal and commercial use.

## 💡 Tips for Students

1. **Keep it Updated**: Regularly update projects and achievements
2. **Show Process**: Document your learning journey in projects
3. **Quality over Quantity**: 3 detailed projects > 10 shallow ones
4. **Be Authentic**: Use your own voice and style
5. **Add Context**: Explain why you did things, not just what
6. **Include Failures**: Showcase what you learned from challenges
7. **Optimize for ATS**: Use relevant keywords from job descriptions
8. **Get Feedback**: Ask peers and mentors to review
9. **Track Metrics**: Add Google Analytics to understand visitors
10. **Network**: Share on LinkedIn, Twitter, and relevant communities

## 📞 Support

Need help customizing your portfolio?
- Check the code comments for guidance
- Review the console for error messages
- Search for similar issues online
- Ask in web development communities

## 🎉 Acknowledgments

- Font Awesome for icons
- Google Fonts for Inter font family
- Inspiration from modern portfolio designs
- AI/ML community for feedback and suggestions

---

**Built with ❤️ for AI/ML Students and Aspiring Engineers**

Good luck with your job search and career journey! 🚀

---

## 📝 Checklist Before Deployment

- [ ] Update all personal information
- [ ] Replace placeholder text with actual content
- [ ] Add your resume PDF
- [ ] Update all social media links
- [ ] Test all links (internal and external)
- [ ] Verify contact form works
- [ ] Test on mobile devices
- [ ] Check loading speed
- [ ] Optimize images (compress if large)
- [ ] Add Google Analytics (optional)
- [ ] Test in different browsers
- [ ] Spell check all content
- [ ] Get feedback from peers
- [ ] Set up custom domain (optional)
- [ ] Add to LinkedIn profile

---

**Version**: 1.0.0  
**Last Updated**: December 27, 2025  
**Compatibility**: All modern browsers (Chrome, Firefox, Safari, Edge)
