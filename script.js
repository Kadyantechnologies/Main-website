document.addEventListener("DOMContentLoaded", () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-background/80', 'backdrop-blur-md', 'border-b', 'border-white/10', 'py-4');
            navbar.classList.remove('bg-transparent', 'py-6');
        } else {
            navbar.classList.add('bg-transparent', 'py-6');
            navbar.classList.remove('bg-background/80', 'backdrop-blur-md', 'border-b', 'border-white/10', 'py-4');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIconContainer = document.getElementById('menuIconContainer');
    let menuOpen = false;

    mobileMenuBtn.addEventListener('click', () => {
        menuOpen = !menuOpen;
        if (menuOpen) {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-5');
            mobileMenu.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
            menuIconContainer.innerHTML = '<i data-lucide="x" class="w-7 h-7"></i>';
        } else {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none', '-translate-y-5');
            mobileMenu.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
            menuIconContainer.innerHTML = '<i data-lucide="menu" class="w-7 h-7"></i>';
        }
        lucide.createIcons();
    });

    // Mobile Menu Links
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            menuOpen = false;
            mobileMenu.classList.add('opacity-0', 'pointer-events-none', '-translate-y-5');
            mobileMenu.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
            menuIconContainer.innerHTML = '<i data-lucide="menu" class="w-7 h-7"></i>';
            lucide.createIcons();
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '-50px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .fade-in-scale').forEach(el => {
        observer.observe(el);
    });

    // Handle Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = 'Sending... <i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i>';
            submitBtn.disabled = true;
            lucide.createIcons();

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            try {
                // Using FormSubmit for static HTML form submission directly to email
                const response = await fetch("https://formsubmit.co/ajax/saurabhdev@kadyantechnologies.com", {
                    method: "POST",
                    headers: { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        _subject: `New Project Request from ${data.name}`,
                        Name: data.name,
                        Email: data.email,
                        Project_Details: data.projectDetails,
                        Budget: data.budget || "Not specified",
                        Timeline: data.timeline || "Not specified"
                    })
                });

                if (response.ok) {
                    alert("Thank you! Your request has been sent directly to our team.");
                    contactForm.reset();
                } else {
                    alert("Oops! Something went wrong. Please try again or email us directly at saurabhdev@kadyantechnologies.com");
                }
            } catch (error) {
                 alert("Oops! Something went wrong. Please try again or email us directly at saurabhdev@kadyantechnologies.com");
            } finally {
                // Restore button state
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                lucide.createIcons();
            }
        });
    }
});
