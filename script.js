// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navItems.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Set active navigation link
    updateActiveNavLink();
    window.addEventListener('hashchange', updateActiveNavLink);
});

/**
 * Update the active navigation link based on current page
 */
function updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

/**
 * Handle contact form submission
 */
function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formMessage = document.getElementById('formMessage');
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation
    if (!name || !email || !subject || !message) {
        showFormMessage('Please fill in all fields.', 'error', formMessage);
        return;
    }

    if (!validateEmail(email)) {
        showFormMessage('Please enter a valid email address.', 'error', formMessage);
        return;
    }

    // Simulate form submission (in a real application, this would send data to a server)
    showFormMessage('Sending...', 'info', formMessage);

    setTimeout(() => {
        showFormMessage('Message sent successfully! I will get back to you soon.', 'success', formMessage);
        form.reset();

        // Clear message after 5 seconds
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = 'form-message';
        }, 5000);
    }, 1500);
}

/**
 * Show form message
 */
function showFormMessage(message, type, element) {
    element.textContent = message;
    element.className = `form-message ${type}`;
}

/**
 * Validate email format
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Smooth scroll to a section
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Add scroll effect to navbar
 */
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }
});

/**
 * Add animation on scroll for project cards
 */
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    const cards = document.querySelectorAll('.project-card, .feature, .skill, .timeline-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Run observer when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeElements);
} else {
    observeElements();
}

/**
 * Keyboard accessibility - close mobile menu with Escape key
 */
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        if (hamburger && hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    }
});
