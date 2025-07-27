// Navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

function handleHeroParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
}

// Combine both in one scroll event
window.addEventListener('scroll', () => {
    handleNavbarScroll();
    handleHeroParallax();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Form submission (replace with your own form handler)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = this;
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent!');
            form.reset();
        } else {
            alert('Something went wrong. Please try again.');
        }
    })
    .catch(() => {
        alert('Something went wrong. Please try again.');
    });
});

document.getElementById('resumeBtn').onclick = function() {
    document.getElementById('resumeOverlay').classList.add('active');
};
document.getElementById('closeResume').onclick = function() {
    document.getElementById('resumeOverlay').classList.remove('active');
};
document.getElementById('fullscreenResume').onclick = function() {
    var iframe = document.getElementById('resumeFrame');
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) { // Safari
        iframe.webkitRequestFullscreen();
    } 
};

document.getElementById('resumeListLink').onclick = function(e) {
    e.preventDefault();
    var resumeBtn = document.getElementById('resumeBtn');
    setTimeout(function() {
        resumeBtn.click();
    }, 600); // Wait for scroll animation before opening
};

// Add some interactive hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) rotateX(5deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0deg)';
    });
});

// Add typing effect to hero subtitle
const subtitle = document.querySelector('.hero-subtitle');
const text = subtitle.textContent;
subtitle.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
    setTimeout(typeWriter, 1500);
    // const portfolioImages = [
    //     "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    //     "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    //     "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80"
    // ];

    // let currentImage = 0;
    // const heroSection = document.querySelector('.hero');

    // function changeBackground() {
    //     heroSection.style.backgroundImage = `url(${portfolioImages[currentImage]})`;
    //     currentImage = (currentImage + 1) % portfolioImages.length;
    // }

    // // initialize
    // changeBackground();
    // setInterval(changeBackground, 3000);