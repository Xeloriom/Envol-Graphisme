const BASE_PATH = window.location.hostname.includes('github.io')
    ? '/Envol-Graphisme'
    : '/' + window.location.pathname.split('/').filter(Boolean)[0].replace(/\.html$/, '');

const NAV_LINK = [
    'nav-link',
    'font-sans', 'font-bold', 'text-[0.82rem]', 'tracking-[0.12em]', 'uppercase',
    'text-[rgba(222,227,246,0.82)]', 'no-underline',
    'py-[0.55rem]', 'px-6', 'rounded-full',
    'bg-[#202942]',
    'shadow-[0_4px_18px_rgba(0,0,0,0.45)]',
    'transition-all', 'duration-300',
    'outline-none',
    'hover:bg-[#2d3a5c]', 'hover:border-[rgba(222,227,246,0.45)]',
    'hover:shadow-[0_6px_24px_rgba(0,0,0,0.55)]',
].join(' ');

const MOBILE_LINK = [
    'mobile-nav-link',
    'font-sans', 'font-bold', 'text-2xl', 'tracking-[0.15em]', 'uppercase',
    'text-[rgba(222,227,246,0.8)]', 'no-underline',
    'py-4', 'px-8',
    'transition-colors', 'duration-200',
    'border-b', 'border-[rgba(222,227,246,0.06)]',
    'w-full', 'text-center',
    'bg-transparent', 'shadow-none',
    'hover:text-[#CB8D30]',
].join(' ');

const FLAG_BTN = [
    'nav-flag',
    'rounded-full', 'py-[0.55rem]', 'px-[0.75rem]',
    'flex', 'items-center', 'justify-center',
    'cursor-pointer', 'border-0', 'outline-none', 'focus:outline-none', 'focus:ring-0',
    'transition-all', 'duration-200',
    'bg-[#202942]',
    'shadow-[0_4px_18px_rgba(0,0,0,0.45)]',
    'hover:opacity-100', 'hover:bg-[#2d3a5c]',
    'hover:shadow-[0_6px_24px_rgba(0,0,0,0.55)]',
].join(' ');

const FLAG_BTN_LG = FLAG_BTN + ' w-11 h-11';

function createNavbar() {
    const nav = document.createElement('nav');
    nav.id = 'main-nav';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Navigation principale');
    nav.className = 'fixed top-0 left-0 right-0 z-[1000] bg-transparent transition-all duration-300';
    nav.style.cssText = 'padding-top: env(safe-area-inset-top, 0px);';

    nav.innerHTML = `
    <div class=" max-w-[1280px] mx-auto px-6 h-[68px] flex items-center justify-between gap-6">

        <!-- Logo -->
        <a href="${BASE_PATH}/index.html"
           class="flex items-center flex-shrink-0 group"
           aria-label="Accueil Envol Graphisme">
            <img src="${BASE_PATH}/img/ENVOL%20Graphisme%20Logo%20clair.webp"
                 alt="Envol Graphisme"
                 class="h-10 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(203,141,48,0.5)] group-hover:scale-[1.03]"
                 loading="eager">
        </a>

        <!-- Liens desktop -->
        <div class="hidden md:flex items-center gap-8" role="menubar">
            <a href="${BASE_PATH}/index.html"        class="${NAV_LINK}" role="menuitem" data-i18n="nav_home">Bienvenue</a>
            <a href="${BASE_PATH}/View/Projets.html" class="${NAV_LINK}" role="menuitem" data-i18n="nav_projects">Projets</a>
            <a href="${BASE_PATH}/View/Offres.html"  class="${NAV_LINK}" role="menuitem" data-i18n="nav_offers">Offres</a>
            <a href="${BASE_PATH}/View/Contact.html" class="${NAV_LINK}" role="menuitem" data-i18n="nav_contact">Contact</a>
        </div>

        <!-- Droite : drapeaux + burger -->
        <div class="flex items-center gap-4 flex-shrink-0">
            <div class="hidden md:flex items-center gap-[0.6rem]" role="group" aria-label="Changer la langue">
                <button class="${FLAG_BTN}" data-lang="fr" aria-label="Français">
                    <img src="${BASE_PATH}/img/Drapeau%20Français.svg" alt="Français" class="w-6 h-6 rounded-full object-cover block">
                </button>
                <button class="${FLAG_BTN}" data-lang="en" aria-label="English">
                    <img src="${BASE_PATH}/img/Drapeau%20Anglais.svg" alt="English" class="w-6 h-6 rounded-full object-cover block">
                </button>
            </div>

            <button id="burger-btn"
                    class="md:hidden flex flex-col justify-center gap-[5px] w-11 h-11 bg-[rgba(222,227,246,0.08)] border border-[rgba(222,227,246,0.15)] rounded-xl cursor-pointer px-3 transition-colors duration-200 hover:bg-[rgba(203,141,48,0.15)] hover:border-[rgba(203,141,48,0.4)]"
                    aria-label="Menu" aria-expanded="false" aria-controls="mobile-menu">
                <span class="block h-0.5 rounded-sm bg-[#DEE3F6] transition-all duration-300 origin-center"></span>
                <span class="block h-0.5 rounded-sm bg-[#DEE3F6] transition-all duration-300"></span>
                <span class="block h-0.5 rounded-sm bg-[#DEE3F6] transition-all duration-300 origin-center"></span>
            </button>
        </div>
    </div>

    <!-- Menu mobile -->
    <div id="mobile-menu"
         class="fixed inset-0 z-[999] bg-[rgba(10,16,38,0.98)] backdrop-blur-[20px] flex-col items-center justify-center"
         style="display:none; transform:translateY(-100%); transition:transform 0.45s cubic-bezier(0.4,0,0.2,1);"
         role="dialog" aria-modal="true" aria-label="Menu de navigation">
        <img src="${BASE_PATH}/img/ENVOL%20Graphisme%20Logo%20clair.webp"
             alt="" class="h-12 mb-10 opacity-85" aria-hidden="true">
        <a href="${BASE_PATH}/index.html"        class="${MOBILE_LINK}" data-i18n="nav_home">Bienvenue</a>
        <a href="${BASE_PATH}/View/Projets.html" class="${MOBILE_LINK}" data-i18n="nav_projects">Projets</a>
        <a href="${BASE_PATH}/View/Offres.html"  class="${MOBILE_LINK}" data-i18n="nav_offers">Offres</a>
        <a href="${BASE_PATH}/View/Contact.html" class="${MOBILE_LINK}" data-i18n="nav_contact">Contact</a>
        <div class="flex gap-4 mt-8">
            <button class="${FLAG_BTN_LG}" data-lang="fr" aria-label="Français">
                <img src="${BASE_PATH}/img/Drapeau%20Français.svg" alt="Français" class="w-full h-full object-cover block">
            </button>
            <button class="${FLAG_BTN_LG}" data-lang="en" aria-label="English">
                <img src="${BASE_PATH}/img/Drapeau%20Anglais.svg" alt="English" class="w-full h-full object-cover block">
            </button>
        </div>
    </div>
    `;

    return nav;
}

function initNavbar() {
    const nav = createNavbar();
    document.body.insertBefore(nav, document.body.firstChild);

    const burger     = document.getElementById('burger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const [s1, s2, s3] = burger.querySelectorAll('span');

    function openMenu() {
        mobileMenu.style.display = 'flex';
        requestAnimationFrame(() => { mobileMenu.style.transform = 'translateY(0)'; });
        burger.setAttribute('aria-expanded', 'true');
        s1.style.transform = 'translateY(7px) rotate(45deg)';
        s2.style.opacity   = '0';
        s3.style.transform = 'translateY(-7px) rotate(-45deg)';
        document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
        mobileMenu.style.transform = 'translateY(-100%)';
        burger.setAttribute('aria-expanded', 'false');
        s1.style.transform = '';
        s2.style.opacity   = '';
        s3.style.transform = '';
        document.body.style.overflow = '';
        setTimeout(() => { if (mobileMenu.style.transform !== 'translateY(0px)') mobileMenu.style.display = 'none'; }, 450);
    }

    burger.addEventListener('click', () =>
        mobileMenu.style.transform === 'translateY(0px)' ? closeMenu() : openMenu()
    );
    document.querySelectorAll('.mobile-nav-link').forEach(l => l.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

    // Fond navbar au scroll
    function updateNavBg() {
        if (window.scrollY > 20) {
            nav.style.background = 'rgba(16, 22, 45, 0.92)';
            nav.style.backdropFilter = 'blur(14px)';
            nav.style.webkitBackdropFilter = 'blur(14px)';
            nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.4)';
        } else {
            nav.style.background = 'transparent';
            nav.style.backdropFilter = 'none';
            nav.style.webkitBackdropFilter = 'none';
            nav.style.boxShadow = 'none';
        }
    }
    window.addEventListener('scroll', updateNavBg, { passive: true });
    updateNavBg();

    highlightCurrentPage();
}

function highlightCurrentPage() {
    const path = window.location.pathname;

    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        const href   = link.getAttribute('href') || '';
        const isHome = href.endsWith('index.html') &&
            (path === '/' || path.endsWith('/index.html') || /\/[^/]+\/?$/.test(path) && !path.includes('.html'));
        const isMatch = !href.endsWith('index.html') && path.endsWith(href.split('/').pop()) && href.length > 1;

        if (isHome || isMatch) {
            link.style.cssText = 'background:rgba(222,227,246,0.88)!important;border-color:rgba(222,227,246,0.95)!important;color:#1a2332!important;';
        }
    });

    const saved = (typeof localStorage !== 'undefined' && localStorage.getItem('envol-lang')) || 'fr';
    document.querySelectorAll('.nav-flag').forEach(f => {
        if (f.getAttribute('data-lang') === saved) {
            f.style.opacity = '1';
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
} else {
    initNavbar();
}
