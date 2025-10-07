// --- Mobile Menu Toggle ---
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Check if the elements exist before adding event listeners
if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// --- Sticky Header Background on Scroll ---
const header = document.getElementById('main-header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-primary-container/80', 'shadow-lg', 'backdrop-blur-sm');
        } else {
            header.classList.remove('bg-primary-container/80', 'shadow-lg', 'backdrop-blur-sm');
        }
    });
}
        
// --- Carousel Logic ---
const carouselContainer = document.getElementById('carousel-container');
// Only run carousel code if the carousel exists on the page
if (carouselContainer) {
    const carousel = document.getElementById('carousel');
    
    // ** Defensive fix for layout issue **
    // This dynamically moves the `overflow-hidden` class from the inner 'filmstrip'
    // to the outer 'frame', which is the correct structure for this carousel.
    if (carousel && carousel.classList.contains('overflow-hidden')) {
        carousel.classList.remove('overflow-hidden');
        carouselContainer.classList.add('overflow-hidden');
    }

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    
    function updateCarousel() {
        if (carousel) {
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }
    
    // Only add listeners if there are buttons and more than one item to scroll through.
    if (prevBtn && nextBtn && items.length > 1) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
            updateCarousel();
        });
        
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        });
    } else if (prevBtn && nextBtn) {
        // If there's only one item, hide the navigation buttons.
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }
}

// --- Scroll-triggered Animations ---
const animatedElements = document.querySelectorAll('.animate-on-scroll');
if (animatedElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

//accordion
// Select the elements for the accordion
const accordionButton = document.getElementById('accordion-button');
const accordionContent = document.getElementById('accordion-content');


if (accordionButton && accordionContent) {
    const accordionIcon = accordionButton.querySelector('svg');
    // Add a click event listener to the button
    accordionButton.addEventListener('click', () => {
            // Toggle the 'hidden' class on the content to show/hide it
            accordionContent.classList.toggle('hidden');
                            
            // Toggle the 'rotate-180' class on the SVG icon
            if(accordionIcon) {
                accordionIcon.classList.toggle('rotate-180');
            }
        }
    )
}
