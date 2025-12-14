// ===============================
// CONFIG GITHUB PAGES
// ===============================
const BASE_PATH = '/Envol-Graphisme';

// ===============================
// NAVBAR
// ===============================
function createNavbar() {
    const nav = document.createElement('nav');
    nav.className =
        'fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-gradient-to-b from-[#212845] to-transparent backdrop-blur-md';

    nav.innerHTML = `
    <div class="max-w-7xl mx-auto flex items-center justify-between">

        <!-- Logo -->
        <div class="flex items-center">
            <img src="${BASE_PATH}/img/ENVOL%20Graphisme%20Logo%20clair.png"
                 alt="Envol Graphisme"
                 class="h-12">
        </div>

        <!-- Menu desktop -->
        <div class="hidden md:flex items-center gap-8 font-bold">
            <a href="${BASE_PATH}/index.html"
               class="nav-link drop-shadow-xl bg-[#202940] hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] text-[#DBE0F3] transition px-6 py-3 rounded-full">
               BIENVENUE
            </a>

            <a href="${BASE_PATH}/View/Projets.html"
               class="nav-link drop-shadow-xl bg-[#202940] hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] text-[#DBE0F3] transition px-6 py-3 rounded-full">
               PROJETS
            </a>

            <a href="${BASE_PATH}/View/Offres.html"
               class="nav-link drop-shadow-xl bg-[#202940] hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] text-[#DBE0F3] transition px-6 py-3 rounded-full">
               OFFRES
            </a>

            <a href="${BASE_PATH}/View/Contact.html"
               class="nav-link drop-shadow-xl bg-[#202940] hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] text-[#DBE0F3] transition px-6 py-3 rounded-full">
               CONTACT
            </a>
        </div>

        <!-- Drapeaux desktop -->
        <div class="hidden md:flex gap-4 items-center">
            <img src="${BASE_PATH}/img/Drapeau%20Français.svg" class="w-7 h-7 cursor-pointer">
            <img src="${BASE_PATH}/img/Drapeau%20Anglais.svg" class="w-7 h-7 cursor-pointer">
        </div>

        <!-- Burger mobile -->
        <button id="menu-btn"
                class="md:hidden bg-white flex gap-2 px-5 py-4 rounded-full focus:outline-none">
            <img src="${BASE_PATH}/img/Etoile%20jaune.svg" class="h-5 w-5">
            <img src="${BASE_PATH}/img/Etoile%20jaune.svg" class="h-5 w-5">
            <img src="${BASE_PATH}/img/Etoile%20jaune.svg" class="h-5 w-5">
        </button>
    </div>

    <!-- Menu mobile -->
    <div id="mobile-menu"
         class="fixed inset-0 h-screen bg-[#1a1f35]/95 flex flex-col items-center justify-center gap-8 font-bold text-[#DBE0F3] text-2xl transform -translate-y-full transition-transform duration-500 ease-in-out md:hidden">

        <button id="close-menu-btn"
                class="absolute top-5 right-5 bg-white flex gap-2 px-5 py-4 rounded-full">
            <img src="${BASE_PATH}/img/Etoile%20jaune.svg" class="h-5 w-5">
            <img src="${BASE_PATH}/img/Etoile%20jaune.svg" class="h-5 w-5">
            <img src="${BASE_PATH}/img/Etoile%20jaune.svg" class="h-5 w-5">
        </button>

        <a href="${BASE_PATH}/index.html" class="mobile-nav-link">BIENVENUE</a>
        <a href="${BASE_PATH}/View/Projets.html" class="mobile-nav-link">PROJETS</a>
        <a href="${BASE_PATH}/View/Offres.html" class="mobile-nav-link">OFFRES</a>
        <a href="${BASE_PATH}/View/Contact.html" class="mobile-nav-link">CONTACT</a>
    </div>
    `;

    return nav;
}

// ===============================
// INIT NAVBAR
// ===============================
function initNavbar() {
    const navbar = createNavbar();
    document.body.insertBefore(navbar, document.body.firstChild);

    const menuBtn = document.getElementById('menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.style.transform = 'translateY(0)';
    });

    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.style.transform = 'translateY(-100%)';
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.style.transform = 'translateY(-100%)';
        });
    });

    // Ombre au scroll
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('shadow-lg', window.scrollY > 100);
    });

    highlightCurrentPage();
}

// ===============================
// PAGE ACTIVE
// ===============================
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop().toLowerCase();

    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop().toLowerCase();

        if (linkPage === currentPage) {
            link.classList.remove('bg-[#202940]', 'text-[#DBE0F3]');
            link.classList.add('bg-[#DBE0F3]', 'text-[#212845]');
        }
    });
}

// ===============================
// DOM READY
// ===============================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
} else {
    initNavbar();
}