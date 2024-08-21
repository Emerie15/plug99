document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const items = document.querySelectorAll('.items .item');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => tab.classList.remove('active'));
            tab.classList.add('active');

            const tabContentId = tab.dataset.tab;
            items.forEach(item => item.style.display = 'none');
            document.getElementById(tabContentId).style.display = 'grid';

            // Remove existing show class from all images
            const images = document.querySelectorAll('.items img');
            images.forEach(img => img.classList.remove('show'));

            // Add show class to images in the selected tab
            const selectedImages = document.getElementById(tabContentId).querySelectorAll('img');
            selectedImages.forEach((img, index) => {
                setTimeout(() => {
                    img.classList.add('show');
                }, index * 100);
            });
        });
    });

    // Show images for the default active tab on load
    const activeTabContentId = document.querySelector('.tab.active').dataset.tab;
    const activeItems = document.getElementById(activeTabContentId);
    const images = activeItems.querySelectorAll('img');
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('show');
        }, index * 100);
    });

    // Initialize GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Example: Parallax Effect for Hero Background
    gsap.to(".hero", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
        },
        backgroundPosition: "center -50px",
        ease: "none"
    });

    // Example: Fade and Slide Animation for Hero Heading
    gsap.from(".hero-content h1", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top 80%",
            end: "bottom top",
            scrub: true,
        },
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out"
    });

    // Example: Fade and Slide Animation for Hero Subheading
    gsap.from(".hero-content h2", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top 60%",
            end: "bottom top",
            scrub: true,
        },
        opacity: 0,
        y: 30,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.5
    });

    // Example: Scale and Fade for Service Cards
    gsap.from(".service-card", {
        scrollTrigger: {
            trigger: ".services",
            start: "top 75%",
            end: "bottom top",
            scrub: true,
            stagger: 0.3,
        },
        opacity: 0,
        scale: 0.9,
        y: 50,
        duration: 1.5,
        ease: "back.out(1.7)"
    });

    // Example: Fade and Slide for Arrival Items
    gsap.from(".items img", {
        scrollTrigger: {
            trigger: ".arrivals",
            start: "top 70%",
            end: "bottom top",
            scrub: true,
            stagger: 0.2
        },
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 1.5,
        ease: "power3.out"
    });

    // Example: Bounce Effect for Reasons Section
    gsap.from(".reason", {
        scrollTrigger: {
            trigger: ".whychoose",
            start: "top 70%",
            end: "bottom top",
            scrub: true,
            stagger: 0.2
        },
        opacity: 0,
        y: 30,
        duration: 1.5,
        ease: "bounce.out"
    });
});
