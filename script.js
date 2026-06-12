 
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const mobileMenu   = document.getElementById('mobileMenu');
        const menuClose    = document.getElementById('menuClose');

        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.add('open');
            document.body.style.overflow = 'hidden';
        });

        menuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        });

        document.querySelectorAll('.mobile-nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
        // Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 100);
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(
    '.how-card, .adv-card, .gs-card, .f-card'
).forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});
   