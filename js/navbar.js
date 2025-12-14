// navbar.js - Composant de navigation réutilisable

function createNavbar() {
    const nav = document.createElement('nav');
    nav.className = 'fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-gradient-to-b from-[#212845] to-transparent backdrop-blur-md';

    nav.innerHTML = `
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center">
        <img src="../Envol-Graphisme/img/ENVOL%20Graphisme%20Logo%20clair.png" alt="Envol Graphisme" class="h-12">
      </div>

      <!-- Menu desktop -->
      <div class="hidden md:flex items-center gap-8 font-bold">
        <a href="../Envol-Graphisme/index.html" class="nav-link drop-shadow-xl bg-[#202940] hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] text-[#DBE0F3] transition-colors px-6 py-3 backdrop-blur-sm rounded-full">BIENVENUE</a>
        <a href="../Envol-Graphisme/View/Projets.html" class="nav-link drop-shadow-xl bg-[#202940] hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] text-[#DBE0F3] transition-colors px-6 py-3 backdrop-blur-sm rounded-full">PROJETS</a>
        <a href="../Envol-Graphisme/View/Offres.html" class="nav-link drop-shadow-xl bg-[#202940] hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] text-[#DBE0F3] transition-colors px-6 py-3 backdrop-blur-sm rounded-full">OFFRES</a>
        <a href="../Envol-Graphisme/View/Contact.html" class="nav-link drop-shadow-xl bg-[#202940] hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] text-[#DBE0F3] transition-colors px-6 py-3 backdrop-blur-sm rounded-full">CONTACT</a>
      </div>

      <!-- Drapeaux desktop -->
      <div class="hidden md:flex gap-3 ml-4">
        <div class="flex gap-4 items-center">
          <div class="lang-btn w-12 h-12 bg-[#202940] rounded-full flex items-center justify-center cursor-pointer hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300 backdrop-blur-sm" data-lang="fr">
            <img data-lang="fr" src="../Envol-Graphisme/img/Drapeau%20Français.svg" alt="Français" class="w-7 h-7">
          </div>
          <div class="lang-btn w-12 h-12 bg-[#202940] rounded-full flex items-center justify-center cursor-pointer hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300 backdrop-blur-sm" data-lang="en">
            <img data-lang="en" src="../Envol-Graphisme/img/Drapeau%20Anglais.svg" alt="English" class="w-7 h-7">
          </div>
        </div>
      </div>

      <!-- Bouton burger mobile -->
      <button id="menu-btn" class="md:hidden bg-white gap-2 flex justify-center h-full px-5 py-4 rounded-full focus:outline-none group">
        <img src="../Envol-Graphisme/img/Etoile%20jaune.svg" class="h-5 w-5">
        <img src="../Envol-Graphisme/img/Etoile%20jaune.svg" class="h-5 w-5">
        <img src="../Envol-Graphisme/img/Etoile%20jaune.svg" class="h-5 w-5">
      </button>
    </div>

    <!-- Menu mobile -->
    <div id="mobile-menu" class="fixed inset-0 h-screen bg-[#1a1f35]/95 flex flex-col items-center justify-center gap-8 font-bold text-[#DBE0F3] text-2xl transform translate-y-[-100%] transition-transform duration-500 ease-in-out md:hidden">
      <button id="close-menu-btn" class="absolute bg-white top-5 right-5 gap-2 flex justify-center px-5 py-4 rounded-full focus:outline-none group">
        <img src="../Envol-Graphisme/img/Etoile%20jaune.svg" class="h-5 w-5">
        <img src="../Envol-Graphisme/img/Etoile%20jaune.svg" class="h-5 w-5">
        <img src="../Envol-Graphisme/img/Etoile%20jaune.svg" class="h-5 w-5">
      </button>
      <a href="../Envol-Graphisme/index.html" class="mobile-nav-link hover:text-white transition-all">BIENVENUE</a>
      <a href="../Envol-Graphisme/View/Projets.html" class="mobile-nav-link hover:text-white transition-all">PROJETS</a>
      <a href="../Envol-Graphisme/View/Offres.html" class="mobile-nav-link hover:text-white transition-all">OFFRES</a>
      <a href="../Envol-Graphisme/View/Contact.html" class="mobile-nav-link hover:text-white transition-all">CONTACT</a>
    </div>
  `;

    return nav;
}

// Initialisation de la navbar
function initNavbar() {
    const navbar = createNavbar();
    document.body.insertBefore(navbar, document.body.firstChild);

    // Menu mobile
    const menuBtn = document.getElementById('menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    function openMenu() {
        mobileMenu.style.transform = 'translateY(0)';
    }

    function closeMenu() {
        mobileMenu.style.transform = 'translateY(-100%)';
    }

    menuBtn.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Ombre au scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
    });

    highlightCurrentPage();
}

// 🔥 LOGIQUE PAGE ACTIVE (DESIGN INCHANGÉ)
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop().toLowerCase();

    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        const linkPage = link.getAttribute('href')
            .split('/')
            .pop()
            .toLowerCase();

        if (linkPage === currentPage) {
            link.classList.remove('bg-[#202940]', 'text-[#DBE0F3]');
            link.classList.add('bg-[#DBE0F3]', 'text-[#212845]');
        }
    });
}

// DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
} else {
    initNavbar();
}