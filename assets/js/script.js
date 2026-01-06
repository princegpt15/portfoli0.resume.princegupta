// ===================================
// Navigation & Scroll Effects
// ===================================

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Active nav link based on scroll position
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollPosition = window.pageYOffset + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===================================
// Smooth Scroll for Stat Items
// ===================================

// Smooth scroll with animation effects for stat items
document.querySelectorAll('.stat-item').forEach(statItem => {
    statItem.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('data-scroll-target');
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            // Add pulse animation to stat item
            this.style.animation = 'statPulse 0.4s ease';
            
            // Remove animation after it completes
            setTimeout(() => {
                this.style.animation = '';
            }, 400);
            
            // Smooth scroll to target section
            const targetPosition = targetSection.offsetTop - 80; // Account for navbar height
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1200; // Scroll duration in ms
            let start = null;
            
            function scrollAnimation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const progress = Math.min(timeElapsed / duration, 1);
                
                // Easing function for smooth animation
                const ease = easeInOutCubic(progress);
                
                window.scrollTo(0, startPosition + distance * ease);
                
                if (timeElapsed < duration) {
                    requestAnimationFrame(scrollAnimation);
                } else {
                    // Add highlight effect to target section after scroll
                    targetSection.style.animation = 'sectionHighlight 1.5s ease';
                    setTimeout(() => {
                        targetSection.style.animation = '';
                    }, 1500);
                }
            }
            
            // Easing function for smooth deceleration
            function easeInOutCubic(t) {
                return t < 0.5 
                    ? 4 * t * t * t 
                    : 1 - Math.pow(-2 * t + 2, 3) / 2;
            }
            
            requestAnimationFrame(scrollAnimation);
        }
    });
});

// Add CSS animations dynamically if not already present
const style = document.createElement('style');
style.textContent = `
    @keyframes statPulse {
        0% { transform: scale(1); }
        50% { transform: scale(0.95); box-shadow: 0 0 30px rgba(37, 99, 235, 0.6); }
        100% { transform: scale(1); }
    }
    
    @keyframes sectionHighlight {
        0%, 100% { opacity: 1; }
        50% { opacity: 1; box-shadow: inset 0 0 50px rgba(37, 99, 235, 0.2); }
    }
`;
document.head.appendChild(style);

// ===================================
// Typing Animation
// ===================================

const typingText = document.querySelector('.typing-text');
const phrases = [
    'AI & ML Enthusiast',
    'Deep Learning Developer',
    'Data Science Explorer',
    'Problem Solver',
    'Aspiring ML Engineer'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500; // Pause before starting new phrase
    }
    
    setTimeout(typeEffect, typingSpeed);
}

// Start typing animation
typeEffect();

// ===================================
// Smooth Scroll
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Scroll Animations
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
const animatedElements = document.querySelectorAll(`
    .about-content,
    .education-card,
    .skill-category,
    .project-card,
    .experience-card,
    .certification-card,
    .achievement-card,
    .profile-card
`);

animatedElements.forEach(el => observer.observe(el));

// ===================================
// Contact Form Validation & Handling
// ===================================

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
    });
    
    // Get form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    // Validate name
    if (name.length < 2) {
        showError('name', 'Please enter a valid name (at least 2 characters)');
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate subject
    if (subject.length < 3) {
        showError('subject', 'Please enter a subject (at least 3 characters)');
        isValid = false;
    }
    
    // Validate message
    if (message.length < 10) {
        showError('message', 'Please enter a message (at least 10 characters)');
        isValid = false;
    }
    
    if (isValid) {
        // Show loading state
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual backend call)
        await simulateFormSubmission({ name, email, subject, message });
        
        // Show success message
        contactForm.style.display = 'none';
        formSuccess.classList.add('show');
        
        // Reset form after 5 seconds
        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'block';
            formSuccess.classList.remove('show');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 5000);
    }
});

function showError(fieldId, message) {
    const formGroup = document.getElementById(fieldId).closest('.form-group');
    formGroup.classList.add('error');
    const errorMessage = formGroup.querySelector('.error-message');
    errorMessage.textContent = message;
}

// Simulate form submission (replace with actual API call)
async function simulateFormSubmission(data) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Form submitted:', data);
            // In production, replace with:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // })
            resolve();
        }, 2000);
    });
}

// Real-time validation
['name', 'email', 'subject', 'message'].forEach(fieldId => {
    const field = document.getElementById(fieldId);
    field.addEventListener('blur', () => {
        const formGroup = field.closest('.form-group');
        formGroup.classList.remove('error');
    });
});

// ===================================
// Statistics Counter Animation
// ===================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

// Trigger counter animation when stats are visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const value = parseInt(stat.textContent);
                animateCounter(stat, value, 2000);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// ===================================
// Skill Tags Hover Effect
// ===================================

// Skill Category Accordion/Toggle Effect
document.querySelectorAll('.category-title').forEach(title => {
    title.addEventListener('click', function() {
        const skillCategory = this.closest('.skill-category');
        skillCategory.classList.toggle('active');
    });
});

document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================================
// Project Links External Indicator
// ===================================

document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', (e) => {
        // Add animation or tracking here if needed
        console.log('External link clicked:', link.href);
    });
});

// ===================================
// Back to Top Button
// ===================================

const backToTop = document.querySelector('.footer-links a[href="#home"]');

if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTop.style.opacity = '1';
            backToTop.style.pointerEvents = 'auto';
        } else {
            backToTop.style.opacity = '0.5';
            backToTop.style.pointerEvents = 'none';
        }
    });
}

// ===================================
// Lazy Loading Images
// ===================================

if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for older browsers
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===================================
// Performance Optimization
// ===================================

// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(highlightNavigation, 10));

// ===================================
// Accessibility Improvements
// ===================================

// Add keyboard navigation for mobile menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Focus trap for mobile menu
const focusableElements = navMenu.querySelectorAll('a, button');
const firstFocusable = focusableElements[0];
const lastFocusable = focusableElements[focusableElements.length - 1];

navMenu.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
        } else if (!e.shiftKey && document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
        }
    }
});

// ===================================
// Copy Email to Clipboard
// ===================================

document.querySelectorAll('a[href^="mailto:"]').forEach(emailLink => {
    emailLink.addEventListener('click', (e) => {
        const email = emailLink.textContent;
        
        // Show tooltip or notification
        const originalText = emailLink.textContent;
        emailLink.textContent = 'Email copied!';
        
        setTimeout(() => {
            emailLink.textContent = originalText;
        }, 2000);
    });
});

// ===================================
// Project Card Tilt Effect (Optional)
// ===================================

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

// ===================================
// Print Styles Handler
// ===================================

window.addEventListener('beforeprint', () => {
    // Expand all collapsed sections for printing
    console.log('Preparing page for print...');
});

// ===================================
// Dark Mode Toggle (Optional Enhancement)
// ===================================

// Uncomment if you want to add a dark/light mode toggle
/*
const themeToggle = document.createElement('button');
themeToggle.className = 'theme-toggle';
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
themeToggle.setAttribute('aria-label', 'Toggle theme');
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const icon = themeToggle.querySelector('i');
    icon.className = document.body.classList.contains('light-mode') 
        ? 'fas fa-sun' 
        : 'fas fa-moon';
    
    // Save preference
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
});

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.querySelector('i').className = 'fas fa-sun';
}
*/

// ===================================
// Console Message
// ===================================

console.log(
    '%c👋 Welcome to my portfolio!',
    'color: #2563eb; font-size: 20px; font-weight: bold;'
);
console.log(
    '%cInterested in the code? Check out the source on GitHub!',
    'color: #cbd5e1; font-size: 14px;'
);

// ===================================
// Analytics (Optional - Add your tracking)
// ===================================

// Google Analytics or other tracking
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'YOUR-GA-ID');
*/

// Track button clicks
document.querySelectorAll('.btn, .project-link, .cert-link').forEach(button => {
    button.addEventListener('click', () => {
        console.log('Button clicked:', button.textContent.trim());
        // Add analytics tracking here
    });
});

// ===================================
// Page Load Complete
// ===================================

window.addEventListener('load', () => {
    console.log('Portfolio loaded successfully!');
    document.body.classList.add('loaded');
});

// ===================================
// Service Worker Registration (Optional)
// ===================================

// Uncomment to enable offline functionality
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered:', registration))
            .catch(error => console.log('SW registration failed:', error));
    });
}
*/
