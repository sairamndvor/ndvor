document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Header scroll effect
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', function () {
        navMenu.classList.add('show');
        navToggle.style.display = 'none';
        document.body.style.overflow = 'hidden';
    });

    navClose.addEventListener('click', function () {
        navMenu.classList.remove('show');
        navToggle.style.display = 'block';
        document.body.style.overflow = '';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('show');
            document.body.style.overflow = '';
        });
    });

    // Active navigation link on scroll
    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector('.nav-link[href*=' + sectionId + ']');
            const navToggle = document.getElementById('nav-toggle');
            
            if (window.innerWidth <= 1024) {
                navToggle.style.display = 'block';
            }

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', scrollActive);

    // Smooth scroll for navigation links
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // ONLY prevent default if the link is an anchor (starts with #)
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
            // If it links to "solutions.html", the code above is skipped, 
            // and the browser loads the new page normally.
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => data[key] = value);

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Thank you for your message!  We will get back to you soon.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Professional Scroll Animations using Intersection Observer API
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Trigger number counting animation if element has data-target
                const statNumber = entry.target.querySelector('.stat-number[data-target]');
                if (statNumber && !statNumber.classList.contains('counted')) {
                    animateCounter(statNumber);
                    statNumber.classList.add('counted');
                }
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .stat-item, .testimonial-stat');
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Number counting animation function
    function animateCounter(element) {
        const target = parseFloat(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                // Check if it's a decimal number
                if (target % 1 !== 0) {
                    element.textContent = current.toFixed(1);
                } else {
                    element.textContent = Math.floor(current);
                }
                requestAnimationFrame(updateCounter);
            } else {
                // Ensure final value is correct
                if (target % 1 !== 0) {
                    element.textContent = target.toFixed(1);
                } else {
                    element.textContent = Math.floor(target);
                }
            }
        };

        updateCounter();
    }

    // Trigger hero stats animation on page load if they're in view
    setTimeout(() => {
        const heroStats = document.querySelectorAll('.hero-stats .stat-item');
        heroStats.forEach(stat => {
            const rect = stat.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const statNumber = stat.querySelector('.stat-number[data-target]');
                if (statNumber && !statNumber.classList.contains('counted')) {
                    stat.classList.add('animated');
                    animateCounter(statNumber);
                    statNumber.classList.add('counted');
                }
            }
        });
    }, 500);

    // Add stagger animation to service cards and solution cards
    const serviceCards = document.querySelectorAll('.service-card');
    const solutionCards = document.querySelectorAll('.solution-card');
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    [serviceCards, solutionCards, testimonialCards].forEach(cardSet => {
        cardSet.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
        });
    });

    // Enhanced hover effects for cards
    const cards = document.querySelectorAll('.service-card, .solution-card, .testimonial-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Removed parallax effect to prevent overlap issues

    // Add fade-in animation to section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    const headerObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, { threshold: 0.2 });

    sectionHeaders.forEach(header => {
        header.style.opacity = '0';
        headerObserver.observe(header);
    });
});