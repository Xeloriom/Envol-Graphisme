
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Toggle menu au clic
    menuBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('translate-y-0');
        if (isOpen) {
            mobileMenu.classList.replace('translate-y-0', 'translate-y-[-100%]');
        } else {
            mobileMenu.classList.replace('translate-y-[-100%]', 'translate-y-0');
        }
    });

    // Fermer le menu au clic sur un lien
    function closeMenu() {
        mobileMenu.classList.replace('translate-y-0', 'translate-y-[-100%]');
    }
