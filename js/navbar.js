const BASE_PATH = '/Envol-Graphisme';

function createNavbar() {
    const nav = document.createElement('nav');
    nav.id = 'main-nav';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Navigation principale');
    nav.style.cssText = `
        position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
        transition: background 0.4s ease, box-shadow 0.4s ease;
        padding: 0;
    `;

    nav.innerHTML = `
    <style>
        #main-nav { background: linear-gradient(to bottom, rgba(18,25,50,0.98) 0%, rgba(18,25,50,0.85) 100%); }
        #main-nav.scrolled { background: rgba(15,20,42,0.97); box-shadow: 0 2px 40px rgba(0,0,0,0.5); }

        .nav-inner {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 1.5rem;
            height: 68px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1.5rem;
        }

        /* Séparateur doré en bas */
        #main-nav::after {
            content: '';
            display: block;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(203,141,48,0.35), transparent);
        }

        /* Liens desktop */
        .nav-link {
            position: relative;
            font-family: 'Josefin Sans', sans-serif;
            font-weight: 700;
            font-size: 0.82rem;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: rgba(222,227,246,0.75);
            text-decoration: none;
            padding: 0.4rem 0;
            transition: color 0.25s ease;
        }
        .nav-link::after {
            content: '';
            position: absolute;
            bottom: -2px; left: 0; right: 0;
            height: 2px;
            background: #CB8D30;
            border-radius: 1px;
            transform: scaleX(0);
            transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
            transform-origin: center;
        }
        .nav-link:hover { color: #DEE3F6; }
        .nav-link:hover::after { transform: scaleX(1); }
        .nav-link.active { color: #CB8D30; }
        .nav-link.active::after { transform: scaleX(1); }

        /* Logo */
        .nav-logo { display: flex; align-items: center; flex-shrink: 0; }
        .nav-logo img { height: 40px; transition: filter 0.3s ease, transform 0.3s ease; }
        .nav-logo:hover img { filter: drop-shadow(0 0 12px rgba(203,141,48,0.5)); transform: scale(1.03); }

        /* Links container */
        .nav-links { display: flex; align-items: center; gap: 2.5rem; }

        /* Flags */
        .nav-flags { display: flex; align-items: center; gap: 0.6rem; }
        .nav-flag {
            width: 28px; height: 28px;
            border-radius: 50%; overflow: hidden;
            cursor: pointer; border: 2px solid transparent;
            transition: border-color 0.2s, transform 0.2s, opacity 0.2s;
            opacity: 0.5;
        }
        .nav-flag:hover { opacity: 1; transform: scale(1.1); }
        .nav-flag.active { border-color: #CB8D30; opacity: 1; }
        .nav-flag img { width: 100%; height: 100%; object-fit: cover; display: block; }

        /* Burger */
        .nav-burger {
            display: none;
            flex-direction: column; justify-content: center; gap: 5px;
            width: 44px; height: 44px;
            background: rgba(222,227,246,0.08);
            border: 1px solid rgba(222,227,246,0.15);
            border-radius: 12px;
            cursor: pointer; padding: 0 12px;
            transition: background 0.2s ease;
        }
        .nav-burger:hover { background: rgba(203,141,48,0.15); border-color: rgba(203,141,48,0.4); }
        .nav-burger span {
            display: block; height: 2px; border-radius: 2px;
            background: #DEE3F6; transition: all 0.3s ease;
        }
        .nav-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nav-burger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nav-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Menu mobile */
        #mobile-menu {
            display: none;
            position: fixed; inset: 0; z-index: 999;
            background: rgba(10,16,38,0.98);
            backdrop-filter: blur(20px);
            flex-direction: column; align-items: center; justify-content: center;
            gap: 0;
            transform: translateY(-100%);
            transition: transform 0.45s cubic-bezier(0.4,0,0.2,1);
        }
        #mobile-menu.open { transform: translateY(0); display: flex; }
        .mobile-nav-link {
            font-family: 'Josefin Sans', sans-serif;
            font-weight: 700; font-size: 1.5rem;
            letter-spacing: 0.15em; text-transform: uppercase;
            color: rgba(222,227,246,0.8); text-decoration: none;
            padding: 1rem 2rem;
            transition: color 0.2s ease;
            border-bottom: 1px solid rgba(222,227,246,0.06);
            width: 100%; text-align: center;
        }
        .mobile-nav-link:hover, .mobile-nav-link.active { color: #CB8D30; }
        .mobile-flags { display: flex; gap: 1rem; margin-top: 2rem; }

        @media (max-width: 767px) {
            .nav-links, .nav-flags { display: none !important; }
            .nav-burger { display: flex; }
        }
        @media (min-width: 768px) {
            .nav-burger { display: none; }
            #mobile-menu { display: none !important; }
        }
    </style>

    <div class="nav-inner">
        <a href="${BASE_PATH}/index.html" class="nav-logo" aria-label="Accueil Envol Graphisme">
            <img src="${BASE_PATH}/img/ENVOL%20Graphisme%20Logo%20clair.png" alt="Envol Graphisme" loading="eager">
        </a>

        <div class="nav-links" role="menubar">
            <a href="${BASE_PATH}/index.html"        class="nav-link" role="menuitem">Bienvenue</a>
            <a href="${BASE_PATH}/View/Projets.html" class="nav-link" role="menuitem">Projets</a>
            <a href="${BASE_PATH}/View/Offres.html"  class="nav-link" role="menuitem">Offres</a>
            <a href="${BASE_PATH}/View/Contact.html" class="nav-link" role="menuitem">Contact</a>
        </div>

        <div style="display:flex;align-items:center;gap:1rem;flex-shrink:0">
            <div class="nav-flags" role="group" aria-label="Changer la langue">
                <button class="nav-flag" data-lang="fr" aria-label="Français">
                    <img src="${BASE_PATH}/img/Drapeau%20Français.svg" alt="Français">
                </button>
                <button class="nav-flag" data-lang="en" aria-label="English">
                    <img src="${BASE_PATH}/img/Drapeau%20Anglais.svg" alt="English">
                </button>
            </div>
            <button class="nav-burger" id="burger-btn" aria-label="Menu" aria-expanded="false" aria-controls="mobile-menu">
                <span></span><span></span><span></span>
            </button>
        </div>
    </div>

    <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu de navigation">
        <img src="${BASE_PATH}/img/ENVOL%20Graphisme%20Logo%20clair.png"
             alt="" style="height:48px;margin-bottom:2.5rem;opacity:0.85" aria-hidden="true">
        <a href="${BASE_PATH}/index.html"        class="mobile-nav-link">Bienvenue</a>
        <a href="${BASE_PATH}/View/Projets.html" class="mobile-nav-link">Projets</a>
        <a href="${BASE_PATH}/View/Offres.html"  class="mobile-nav-link">Offres</a>
        <a href="${BASE_PATH}/View/Contact.html" class="mobile-nav-link">Contact</a>
        <div class="mobile-flags">
            <button class="nav-flag" data-lang="fr" aria-label="Français" style="width:36px;height:36px">
                <img src="${BASE_PATH}/img/Drapeau%20Français.svg" alt="Français">
            </button>
            <button class="nav-flag" data-lang="en" aria-label="English" style="width:36px;height:36px">
                <img src="${BASE_PATH}/img/Drapeau%20Anglais.svg" alt="English">
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

    function openMenu() {
        mobileMenu.style.display = 'flex';
        requestAnimationFrame(() => mobileMenu.classList.add('open'));
        burger.classList.add('open');
        burger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
        mobileMenu.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        setTimeout(() => { if (!mobileMenu.classList.contains('open')) mobileMenu.style.display = 'none'; }, 450);
    }

    burger.addEventListener('click', () => mobileMenu.classList.contains('open') ? closeMenu() : openMenu());

    document.querySelectorAll('.mobile-nav-link').forEach(l => l.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

    // Scroll shadow
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });

    highlightCurrentPage();
}

function highlightCurrentPage() {
    const path = window.location.pathname;
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        const href = link.getAttribute('href') || '';
        const isHome = href.endsWith('index.html') &&
            (path === '/' || path.endsWith('/Envol-Graphisme/') || path.endsWith('/index.html'));
        const isMatch = path.endsWith(href.split('/').pop()) && href.length > 1;
        if (isHome || isMatch) link.classList.add('active');
    });

    // Indicateur visuel langue
    const saved = (typeof localStorage !== 'undefined' && localStorage.getItem('envol-lang')) || 'fr';
    document.querySelectorAll('.nav-flag').forEach(f => {
        f.classList.toggle('active', f.getAttribute('data-lang') === saved);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
} else {
    initNavbar();
}
