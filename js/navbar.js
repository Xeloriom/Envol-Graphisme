// ══════════════════════════════════
// CONFIG – ajustez si le repo change
// ══════════════════════════════════
const BASE_PATH = '/Envol-Graphisme';

// ══════════════════════════════════
// BUILD NAVBAR
// ══════════════════════════════════
function createNavbar() {
    const nav = document.createElement('nav');
    nav.className = 'fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-4 transition-all duration-300';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Navigation principale');

    nav.innerHTML = `
    <div class="max-w-7xl mx-auto flex items-center justify-between
                bg-[#212845]/80 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-white/5">

        <!-- Logo -->
        <a href="${BASE_PATH}/index.html" aria-label="Accueil Envol Graphisme">
            <img src="${BASE_PATH}/img/ENVOL%20Graphisme%20Logo%20clair.png"
                 alt="Logo Envol Graphisme"
                 class="h-10 md:h-12 transition-transform hover:scale-105"
                 loading="eager">
        </a>

        <!-- Menu desktop -->
        <div class="hidden md:flex items-center gap-3 lg:gap-6 font-bold text-sm lg:text-base" role="menubar">
            <a href="${BASE_PATH}/index.html"
               class="nav-link px-4 lg:px-6 py-2.5 rounded-full transition-all duration-300
                      text-[#DBE0F3] bg-[#202940]/80 hover:bg-[#DBE0F3] hover:text-[#212845]
                      hover:scale-105 hover:shadow-[0_0_12px_rgba(255,255,255,0.2)]"
               role="menuitem">
               BIENVENUE
            </a>
            <a href="${BASE_PATH}/View/Projets.html"
               class="nav-link px-4 lg:px-6 py-2.5 rounded-full transition-all duration-300
                      text-[#DBE0F3] bg-[#202940]/80 hover:bg-[#DBE0F3] hover:text-[#212845]
                      hover:scale-105 hover:shadow-[0_0_12px_rgba(255,255,255,0.2)]"
               role="menuitem">
               PROJETS
            </a>
            <a href="${BASE_PATH}/View/Offres.html"
               class="nav-link px-4 lg:px-6 py-2.5 rounded-full transition-all duration-300
                      text-[#DBE0F3] bg-[#202940]/80 hover:bg-[#DBE0F3] hover:text-[#212845]
                      hover:scale-105 hover:shadow-[0_0_12px_rgba(255,255,255,0.2)]"
               role="menuitem">
               OFFRES
            </a>
            <a href="${BASE_PATH}/View/Contact.html"
               class="nav-link px-4 lg:px-6 py-2.5 rounded-full transition-all duration-300
                      text-[#DBE0F3] bg-[#202940]/80 hover:bg-[#DBE0F3] hover:text-[#212845]
                      hover:scale-105 hover:shadow-[0_0_12px_rgba(255,255,255,0.2)]"
               role="menuitem">
               CONTACT
            </a>
        </div>

        <!-- Drapeaux langue (desktop) -->
        <div class="hidden md:flex gap-3 items-center" role="group" aria-label="Changer la langue">
            <button data-lang="fr"
                    class="w-9 h-9 rounded-full overflow-hidden hover:scale-110 transition-transform
                           ring-2 ring-transparent hover:ring-white/40"
                    aria-label="Passer en français">
                <img src="${BASE_PATH}/img/Drapeau%20Français.svg" alt="Français" class="w-full h-full object-cover">
            </button>
            <button data-lang="en"
                    class="w-9 h-9 rounded-full overflow-hidden hover:scale-110 transition-transform
                           ring-2 ring-transparent hover:ring-white/40"
                    aria-label="Switch to English">
                <img src="${BASE_PATH}/img/Drapeau%20Anglais.svg" alt="English" class="w-full h-full object-cover">
            </button>
        </div>

        <!-- Burger mobile -->
        <button id="menu-btn"
                class="md:hidden bg-white flex gap-1.5 px-4 py-3 rounded-full focus:outline-none
                       hover:scale-105 transition-transform"
                aria-label="Ouvrir le menu"
                aria-expanded="false"
                aria-controls="mobile-menu">
            <img src="${BASE_PATH}/img/Etoile%20jaune.svg" class="h-4 w-4" alt="" aria-hidden="true">
            <img src="${BASE_PATH}/img/Etoile%20jaune.svg" class="h-4 w-4" alt="" aria-hidden="true">
            <img src="${BASE_PATH}/img/Etoile%20jaune.svg" class="h-4 w-4" alt="" aria-hidden="true">
        </button>
    </div>

    <!-- Menu mobile fullscreen -->
    <div id="mobile-menu"
         class="fixed inset-0 h-screen bg-[#1a1f35]/97 flex flex-col items-center justify-center
                gap-6 font-bold text-[#DBE0F3] text-2xl
                transform -translate-y-full transition-transform duration-500 ease-in-out md:hidden"
         role="dialog"
         aria-modal="true"
         aria-label="Menu de navigation mobile">

        <button id="close-menu-btn"
                class="absolute top-5 right-5 bg-white flex gap-1.5 px-4 py-3 rounded-full
                       hover:scale-105 transition-transform"
                aria-label="Fermer le menu">
            <img src="${BASE_PATH}/img/Etoile%20jaune.svg" class="h-4 w-4" alt="" aria-hidden="true">
            <img src="${BASE_PATH}/img/Etoile%20jaune.svg" class="h-4 w-4" alt="" aria-hidden="true">
            <img src="${BASE_PATH}/img/Etoile%20jaune.svg" class="h-4 w-4" alt="" aria-hidden="true">
        </button>

        <!-- Logo -->
        <img src="${BASE_PATH}/img/ENVOL%20Graphisme%20Logo%20clair.png"
             alt="" class="h-14 mb-4 opacity-90" aria-hidden="true">

        <a href="${BASE_PATH}/index.html"        class="mobile-nav-link hover:text-[#CB8D30] transition-colors">BIENVENUE</a>
        <a href="${BASE_PATH}/View/Projets.html" class="mobile-nav-link hover:text-[#CB8D30] transition-colors">PROJETS</a>
        <a href="${BASE_PATH}/View/Offres.html"  class="mobile-nav-link hover:text-[#CB8D30] transition-colors">OFFRES</a>
        <a href="${BASE_PATH}/View/Contact.html" class="mobile-nav-link hover:text-[#CB8D30] transition-colors">CONTACT</a>

        <!-- Langues mobile -->
        <div class="flex gap-4 mt-4" role="group" aria-label="Changer la langue">
            <button data-lang="fr" class="flex items-center gap-2 text-base opacity-80 hover:opacity-100 transition-opacity" aria-label="Français">
                <img src="${BASE_PATH}/img/Drapeau%20Français.svg" class="w-7 h-7" alt=""> FR
            </button>
            <button data-lang="en" class="flex items-center gap-2 text-base opacity-80 hover:opacity-100 transition-opacity" aria-label="English">
                <img src="${BASE_PATH}/img/Drapeau%20Anglais.svg" class="w-7 h-7" alt=""> EN
            </button>
        </div>
    </div>
    `;

    return nav;
}

// ══════════════════════════════════
// INIT
// ══════════════════════════════════
function initNavbar() {
    const navbar   = createNavbar();
    document.body.insertBefore(navbar, document.body.firstChild);

    const menuBtn      = document.getElementById('menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu   = document.getElementById('mobile-menu');

    function openMenu() {
        mobileMenu.style.transform = 'translateY(0)';
        menuBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
        mobileMenu.style.transform = 'translateY(-100%)';
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });

    // Ombre au scroll
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('shadow-2xl', window.scrollY > 50);
    }, { passive: true });

    highlightCurrentPage();
}

// ══════════════════════════════════
// PAGE ACTIVE
// ══════════════════════════════════
function highlightCurrentPage() {
    const path = window.location.pathname;

    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        const href = link.getAttribute('href');
        const isActive = path.endsWith(href) ||
            (href.endsWith('index.html') && (path === '/' || path.endsWith('/Envol-Graphisme/') || path.endsWith('/index.html')));

        if (isActive) {
            link.classList.add('bg-[#DBE0F3]', 'text-[#212845]');
            link.classList.remove('bg-[#202940]/80', 'text-[#DBE0F3]');
            if (link.classList.contains('mobile-nav-link')) {
                link.style.color = '#CB8D30';
            }
        }
    });
}

// ══════════════════════════════════
// DOM READY
// ══════════════════════════════════
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
} else {
    initNavbar();
}
