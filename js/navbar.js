// navbar.js - Composant de navigation réutilisable

function createNavbar() {
    const nav = document.createElement('nav');
    nav.className = 'fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-gradient-to-b from-[#212845] to-transparent backdrop-blur-md';

    nav.innerHTML = `
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center">
        <img src="./img/ENVOL%20Graphisme%20Logo%20clair.png" alt="Envol Graphisme" class="h-12">
      </div>

      <!-- Menu desktop -->
      <div class="hidden md:flex items-center gap-8 font-bold">
        <a href="#bienvenue" class="nav-link drop-shadow-xl px-6 py-3 bg-[#DBE0F3] hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] text-[#212845] backdrop-blur-sm rounded-full transition-all">BIENVENUE</a>
        <a href="#projets" class="nav-link drop-shadow-xl bg-[#202940] hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] text-[#DBE0F3] transition-colors px-6 py-3 backdrop-blur-sm rounded-full">PROJETS</a>
        <a href="#offres" class="nav-link drop-shadow-xl bg-[#202940] hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] text-[#DBE0F3] transition-colors px-6 py-3 backdrop-blur-sm rounded-full">OFFRES</a>
        <a href="#contact" class="nav-link drop-shadow-xl bg-[#202940] hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] text-[#DBE0F3] transition-colors px-6 py-3 backdrop-blur-sm rounded-full">CONTACT</a>
      </div>

      <!-- Drapeaux desktop -->
      <div class="hidden md:flex gap-3 ml-4">
        <div class="flex gap-4 items-center">
          <div class="lang-btn w-12 h-12 bg-[#202940] rounded-full flex items-center justify-center cursor-pointer hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300 backdrop-blur-sm" data-lang="fr">
            <img data-lang="fr" src="./img/Drapeau%20Français.svg" alt="Français" class="w-7 h-7">
          </div>
          <div  class="lang-btn w-12 h-12 bg-[#202940] rounded-full flex items-center justify-center cursor-pointer hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300 backdrop-blur-sm" data-lang="en">
            <img data-lang="en" src="./img/Drapeau%20Anglais.svg" alt="English" class="w-7 h-7">
          </div>
        </div>
      </div>

      <!-- Bouton burger mobile -->
      <button id="menu-btn" class="md:hidden bg-white gap-2 flex justify-center h-full px-5 py-4 rounded-full focus:outline-none group">
        <img src="./img/Etoile%20jaune.svg" class="h-5 w-5">
        <img src="./img/Etoile%20jaune.svg" class="h-5 w-5">
        <img src="./img/Etoile%20jaune.svg" class="h-5 w-5">
      </button>
    </div>

    <!-- Menu mobile -->
    <div id="mobile-menu" class="fixed inset-0 h-screen bg-[#1a1f35]/95 flex flex-col items-center justify-center gap-8 font-bold text-[#DBE0F3] text-2xl transform translate-y-[-100%] transition-transform duration-500 ease-in-out md:hidden">
      <button id="close-menu-btn" class="absolute bg-white top-5 right-5 gap-2 flex justify-center px-5 py-4 rounded-full focus:outline-none group">
        <img src="./img/Etoile%20jaune.svg" class="h-5 w-5">
        <img src="./img/Etoile%20jaune.svg" class="h-5 w-5">
        <img src="./img/Etoile%20jaune.svg" class="h-5 w-5">
      </button>
      <a href="#bienvenue" class="mobile-nav-link hover:text-white transition-all">BIENVENUE</a>
      <a href="#projets" class="mobile-nav-link hover:text-white transition-all">PROJETS</a>
      <a href="#offres" class="mobile-nav-link hover:text-white transition-all">OFFRES</a>
      <a href="#contact" class="mobile-nav-link hover:text-white transition-all">CONTACT</a>

      <div class="flex gap-6 mt-8">
        <div class="language-btn-mobile w-14 h-14 bg-[#202940] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300" data-lang="fr">
          <img src="./img/Drapeau%20Français.svg" alt="Français" class="w-8 h-8">
        </div>
        <div class="language-btn-mobile w-14 h-14 bg-[#202940] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300" data-lang="en">
          <img src="./img/Drapeau%20Anglais.svg" alt="English" class="w-8 h-8">
        </div>
      </div>
    </div>
  `;

    return nav;
}

// Initialisation de la navbar
function initNavbar() {
    const navbar = createNavbar();
    document.body.insertBefore(navbar, document.body.firstChild);

    // Gestion du menu mobile
    const menuBtn = document.getElementById('menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    function openMenu() {
        mobileMenu.style.transform = 'translateY(0)';
    }

    function closeMenu() {
        mobileMenu.style.transform = 'translateY(-100%)';
    }

    menuBtn.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);

    // Fermer le menu lors du clic sur un lien
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Gestion du changement de langue
    const languageBtns = document.querySelectorAll('.language-btn, .language-btn-mobile');

    languageBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    // Effet de scroll sur la navbar
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }

        lastScroll = currentScroll;
    });
}

// Fonction de changement de langue (à personnaliser selon vos besoins)
function changeLanguage(lang) {
    console.log(`Langue changée vers: ${lang}`);
    // Implémentez ici votre logique de changement de langue
    // Par exemple: localStorage.setItem('preferredLanguage', lang);
}

// Initialiser au chargement du DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
} else {
    initNavbar();
}