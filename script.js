// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate skill bars
window.addEventListener('load', () => {
    const progressBars = document.querySelectorAll('.skill-progress');
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav-footer');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(44, 62, 80, 0.95)';
        nav.style.backdropFilter = 'blur(20px)';
    } else {
        nav.style.background = '#2c3e50';
        nav.style.backdropFilter = 'none';
    }
});
window.addEventListener("load", () => {
  document.querySelectorAll(".progress").forEach(bar => {
    bar.style.width = bar.dataset.width;
  });
});