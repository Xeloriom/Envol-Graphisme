const FOOTER_BASE = (typeof BASE_PATH !== 'undefined') ? BASE_PATH : '/Envol-Graphisme';

const socialNetworks = [
    {
        name:    'Instagram',
        url:     'https://www.instagram.com/envol.graphisme/',
        icon:    'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg',
        bgClass: 'bg-gradient-to-tr from-pink-500 via-rose-500 to-yellow-400 hover:opacity-90'
    },
    {
        name:    'LinkedIn',
        url:     'https://www.linkedin.com/in/envol-graphisme/',
        icon:    'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg',
        bgClass: 'bg-[#0A66C2] hover:bg-[#0957a7]'
    },
    {
        name:    'Behance',
        url:     'https://www.behance.net/envol-graphisme',
        icon:    'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/behance.svg',
        bgClass: 'bg-[#053eff] hover:bg-[#0435d9]'
    }
];

function createFooter() {
    const container = document.getElementById('bienvenue');
    if (!container) return;

    const footerEl = document.createElement('footer');
    footerEl.className = 'relative w-full overflow-visible bg-transparent z-0';
    footerEl.setAttribute('role', 'contentinfo');

    footerEl.innerHTML = `
    <!-- SVG background -->
    <div id="footer-bg"
         class="absolute inset-0 w-[115%] lg:w-[105%] h-[110%] lg:h-[200%] pointer-events-none"
         aria-hidden="true"
         style="background-repeat:no-repeat; background-size:cover; background-position:right bottom;">
    </div>

    <!-- Footer content -->
    <div class="relative z-10 w-full max-w-5xl px-6 sm:px-10 py-12 flex flex-col lg:flex-row gap-16 lg:gap-32 items-start text-white">

        <!-- Navigation -->
        <nav class="flex flex-col gap-3 w-full lg:w-1/3 text-left" aria-label="Navigation footer">
            <a href="${FOOTER_BASE}/index.html"        class="footer-link text-base md:text-lg uppercase tracking-wider hover:text-[#CB8D30] transition-colors duration-200">BIENVENUE</a>
            <a href="${FOOTER_BASE}/View/Projets.html" class="footer-link text-base md:text-lg uppercase tracking-wider hover:text-[#CB8D30] transition-colors duration-200">PROJETS</a>
            <a href="${FOOTER_BASE}/View/Offres.html"  class="footer-link text-base md:text-lg uppercase tracking-wider hover:text-[#CB8D30] transition-colors duration-200">OFFRES</a>
            <a href="${FOOTER_BASE}/View/Contact.html" class="footer-link text-base md:text-lg uppercase tracking-wider hover:text-[#CB8D30] transition-colors duration-200">CONTACT</a>
        </nav>

        <!-- Réseaux sociaux -->
        <div class="flex flex-col items-center text-center w-full lg:w-2/3">
            <p class="text-2xl md:text-3xl font-bold mb-6" id="social" tabindex="-1">Suis-moi sur les réseaux !</p>
            <div id="social-links" class="flex gap-5 justify-center flex-wrap" role="list"></div>
            <div class="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-6">
                <a href="https://linktr.ee/envol.graphisme"
                   target="_blank" rel="noopener noreferrer"
                   class="underline hover:text-[#CB8D30] transition-colors text-base md:text-lg">Linktree</a>
                <a href="${FOOTER_BASE}/mentions-legales.html"
                   class="underline hover:text-[#CB8D30] transition-colors text-base md:text-lg">Mentions légales</a>
            </div>
        </div>
    </div>

    <!-- Copyright -->
    <div class="relative z-10 text-sm md:text-base text-white/60
                px-6 sm:px-10 py-5 border-t border-white/10 text-center lg:text-left font-light">
        <p id="copyright-text"></p>
    </div>
    `;

    container.appendChild(footerEl);
    return footerEl;
}

function generateSocialLinks() {
    const container = document.getElementById('social-links');
    if (!container) return;

    socialNetworks.forEach(network => {
        const link = document.createElement('a');
        link.href             = network.url;
        link.target           = '_blank';
        link.rel              = 'noopener noreferrer';
        link.className        = `w-12 h-12 ${network.bgClass} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg`;
        link.setAttribute('aria-label', network.name);
        link.setAttribute('role', 'listitem');

        const img = document.createElement('img');
        img.src       = network.icon;
        img.alt       = network.name;
        img.className = 'w-6 h-6 invert';
        img.loading   = 'lazy';

        link.appendChild(img);
        container.appendChild(link);
    });
}

function generateCopyright() {
    const el = document.getElementById('copyright-text');
    if (!el) return;
    const year = new Date().getFullYear();
    el.textContent = `Envol Graphisme | Micro-entreprise | SIRET n°93907780600015 | © ${year} Envol Graphisme – Tous droits réservés`;
}

function setFooterBackground() {
    const bg = document.getElementById('footer-bg');
    if (!bg) return;
    const isMobile = window.innerWidth <= 1024;
    bg.style.backgroundImage = `url('${FOOTER_BASE}/img/${isMobile ? 'Footer-mobile' : 'Footer'}.svg')`;
}

function initFooter() {
    createFooter();
    generateSocialLinks();
    generateCopyright();
    setFooterBackground();

    window.addEventListener('resize', setFooterBackground, { passive: true });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooter);
} else {
    initFooter();
}
