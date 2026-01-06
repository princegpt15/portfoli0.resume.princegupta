# 🎯 Quick Customization Guide

This guide will help you quickly customize your portfolio with your actual resume information.

## 📋 Step-by-Step Customization

### Step 1: Basic Information

Open `index.html` and find these sections:

#### Navigation Logo (Line 28)
```html
<!-- CURRENT -->
<a href="#home">YourName<span class="accent">.</span></a>

<!-- CHANGE TO -->
<a href="#home">PrinceKumar<span class="accent">.</span></a>
```

#### Hero Section (Lines 49-68)
```html
<!-- Update these lines with your actual information -->
<h1 class="hero-name">Your Full Name</h1>
<!-- Change to your actual name -->

<p class="hero-description">
    AI & ML Undergraduate | Aspiring ML Engineer passionate about...
</p>
<!-- Update with your actual tagline/description -->
```

### Step 2: About Section

Replace placeholder text with information from your resume:

```html
<!-- Lines 120-165 -->
<p>
    I'm a passionate Computer Science student specializing in...
</p>
<!-- Write 3-4 sentences about yourself -->

<!-- Update contact information -->
<span class="info-value">your.email@example.com</span>
<span class="info-value">+91 XXXXX XXXXX</span>
<span class="info-value">City, Country</span>
```

### Step 3: Education Section

Update with your actual education details:

```html
<!-- Lines 191-235 -->
<h3 class="education-degree">Bachelor of Technology in Computer Science Engineering</h3>
<h4 class="education-specialization">Specialization: Artificial Intelligence & Machine Learning</h4>
<p class="education-institution">
    <i class="fas fa-university"></i> Your University Name
</p>
<p class="education-duration">
    <i class="fas fa-calendar-alt"></i> 2021 - 2025
</p>
<div class="education-grade">
    <span class="grade-label">CGPA:</span>
    <span class="grade-value">X.XX / 10.0</span>
</div>
```

### Step 4: Skills Section

Update with your actual skills from resume:

```html
<!-- Programming Languages (Line 256) -->
<span class="skill-tag">Python</span>
<span class="skill-tag">Java</span>
<!-- Add or remove based on your skills -->

<!-- ML/DL Frameworks (Line 265) -->
<span class="skill-tag">TensorFlow</span>
<span class="skill-tag">Keras</span>
<!-- Update with frameworks you've used -->
```

### Step 5: Projects Section (IMPORTANT)

This is the most detailed section. Update both projects:

#### Kolam Pattern Recognition Project (Lines 297-366)

Replace with actual details:
- **Tech Stack**: Update the badges with actual technologies used
- **Dataset size**: Update with your actual dataset information
- **Accuracy**: Update with your actual model accuracy
- **GitHub link**: Add your actual GitHub repository URL

#### AI Chatbot Project (Lines 368-443)

Update similarly with your project details.

### Step 6: Experience Section

```html
<!-- Lines 379-425 -->
<h3 class="experience-role">Machine Learning Intern</h3>
<span class="experience-duration">Duration</span>
<h4 class="experience-company">Company Name</h4>

<!-- Add your actual responsibilities -->
<ul>
    <li>Your actual responsibility 1</li>
    <li>Your actual responsibility 2</li>
</ul>
```

### Step 7: Social Links

Search for these patterns and replace with YOUR usernames:

- GitHub: `yourusername` → Your GitHub username
- LinkedIn: `yourusername` → Your LinkedIn profile path
- Kaggle: `yourusername` → Your Kaggle username
- Email: `your.email@example.com` → Your actual email
- Phone: `+91 XXXXX XXXXX` → Your actual phone number

### Step 8: Images

Your profile image is already in place! If you want to change it:
1. Replace `portfolio/assets/images/profile.jpg` with your new image
2. Keep the filename as `profile.jpg` OR update HTML references

---

## 🔍 Finding Specific Information from Your Resume

Since I couldn't parse your PDF directly, here's what to extract:

### From Your Resume, Get:

1. **Personal Details**
   - Full Name
   - Email
   - Phone Number
   - Location
   - LinkedIn URL
   - GitHub URL

2. **Education**
   - Degree Name
   - Specialization
   - University Name
   - CGPA
   - Years (Start - End)
   - Key Courses

3. **Projects** (For each project)
   - Project Title
   - Brief Description
   - Technologies Used
   - Dataset Information (if applicable)
   - Results/Accuracy
   - What you learned
   - GitHub Link

4. **Experience/Internships**
   - Role/Position
   - Company Name
   - Duration
   - 3-5 Key Responsibilities
   - Technologies Used

5. **Skills**
   - Programming Languages
   - ML/DL Frameworks
   - Tools & Platforms
   - Databases

6. **Certifications**
   - Certificate Name
   - Issuing Organization
   - Skills Covered

7. **Achievements**
   - Hackathon Wins
   - Competitions
   - Awards
   - Academic Recognition

---

## 🚀 Quick Testing Checklist

After customization:

- [ ] All personal information updated
- [ ] No "Your Name" or "YourName" placeholders remain
- [ ] No "yourusername" in social links
- [ ] Email and phone updated
- [ ] Project details filled in
- [ ] Skills match your resume
- [ ] Education details accurate
- [ ] CGPA updated
- [ ] Social media links work
- [ ] Resume PDF is in portfolio folder

---

## 💻 Opening Your Portfolio

### Option 1: Direct Open
1. Navigate to: `c:\Users\princ\Desktop\resume.prince\portfolio\`
2. Double-click `index.html`

### Option 2: VS Code Live Server
1. Open the portfolio folder in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

---

## 🎨 Color Customization (Optional)

Want to change the color scheme? Open `assets/css/style.css` and modify:

```css
:root {
    --primary-color: #2563eb;     /* Main blue color */
    --secondary-color: #1e40af;    /* Darker blue */
    --accent-color: #3b82f6;      /* Light blue accent */
}
```

Try these color schemes:

**Purple Theme:**
```css
--primary-color: #7c3aed;
--secondary-color: #6d28d9;
--accent-color: #8b5cf6;
```

**Green Theme:**
```css
--primary-color: #10b981;
--secondary-color: #059669;
--accent-color: #34d399;
```

**Orange Theme:**
```css
--primary-color: #f59e0b;
--secondary-color: #d97706;
--accent-color: #fbbf24;
```

---

## 📞 Need Help?

If you need help with specific customizations:

1. Check line numbers in this guide
2. Look for HTML comments in the code
3. Use Find (Ctrl+F) to search for placeholder text
4. Review the main README.md for detailed explanations

---

## ✅ Final Steps Before Sharing

1. **Test Everything**
   - Click all links
   - Test on mobile (Chrome DevTools)
   - Fill out contact form
   - Download resume button

2. **Optimize**
   - Compress profile image if > 500KB
   - Check page load speed
   - Test in different browsers

3. **Deploy**
   - Choose GitHub Pages, Netlify, or Vercel
   - Follow deployment instructions in README.md
   - Share your portfolio link!

---

**You're all set! Good luck with your job applications! 🎉**
