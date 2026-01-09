// footer.js - Composant de footer réutilisable

function createFooter() {
    const container = document.getElementById('bienvenue');

    const footerDiv = document.createElement('div');
    footerDiv.className = 'relative w-full overflow-visible bg-transparent z-0';

    footerDiv.innerHTML = `
    <!-- Fond SVG -->
    <div id="footer-bg" class="absolute inset-0 w-[115%] lg:w-[105%] h-[110%] lg:h-[200%] pointer-events-none"
         style="background-image: url('./img/Footer.svg');
                background-repeat: no-repeat; 
                background-size: cover;
                background-position: right bottom;">
    </div>

    <!-- Contenu du footer -->
    <div class="relative z-10 w-full max-w-4xl px-6 sm:px-10 py-10 flex flex-col lg:flex-row gap-16 lg:gap-32 items-start text-white">

      <!-- Menu -->
      <div class="flex flex-col gap-3 w-full lg:w-1/3 text-left">
        <a href="#bienvenue" class="footer-link text-lg md:text-xl uppercase tracking-wider hover:text-white/80 transition">BIENVENUE</a>
        <a href="#projets" class="footer-link text-lg md:text-xl uppercase tracking-wider hover:text-white/80 transition">PROJETS</a>
        <a href="#offres" class="footer-link text-lg md:text-xl uppercase tracking-wider hover:text-white/80 transition">OFFRES</a>
        <a href="#contact" class="footer-link text-lg md:text-xl uppercase tracking-wider hover:text-white/80 transition">CONTACT</a>
      </div>

      <!-- Réseaux sociaux -->
      <div class="flex flex-col items-center text-center w-full lg:w-2/3">
        <p class="text-2xl md:text-4xl font-bold mb-6">Suis-moi sur les réseaux !</p>

        <div id="social-links" class="flex gap-6 justify-center flex-wrap"></div>

        <div class="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-6">
          <a href="#" class="footer-extra-link underline hover:text-white/80 text-base md:text-xl">Linktree</a>
          <a href="#" class="footer-extra-link underline hover:text-white/80 text-base md:text-xl">Mentions légales</a>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="relative z-10 text-sm md:text-lg text-white/60 px-6 sm:px-20 py-6 border-t border-white/10 text-center lg:text-left font-light">
      <p id="copyright-text"></p>
    </div>
    `;

    container.appendChild(footerDiv);
    return footerDiv;
}

// Configuration des réseaux sociaux
const socialNetworks = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com',
        icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg',
        bgClass: 'bg-blue-600 hover:bg-blue-700'
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com',
        icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg',
        bgClass: 'bg-gradient-to-tr from-pink-500 to-yellow-400'
    },
    {
        name: 'Behance',
        url: 'https://www.behance.net',
        icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/behance.svg',
        bgClass: 'bg-blue-500 hover:bg-blue-600'
    }
];

// Génération des liens de réseaux sociaux
function generateSocialLinks() {
    const socialLinksContainer = document.getElementById('social-links');

    socialNetworks.forEach(network => {
        const link = document.createElement('a');
        link.href = network.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = `w-12 h-12 ${network.bgClass} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg`;
        link.setAttribute('aria-label', network.name);

        const img = document.createElement('img');
        img.src = network.icon;
        img.alt = network.name;
        img.className = 'w-6 h-6 invert';

        link.appendChild(img);
        socialLinksContainer.appendChild(link);
    });
}

// Génération du copyright
function generateCopyrightText() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.getElementById('copyright-text');
    copyrightElement.textContent =
        `Envol Graphisme | Micro-entreprise | SIRET n°93907780600015 | ${currentYear} Envol Graphisme - Tous droits réservés`;
}

// Changer l'image de fond selon la largeur de l'écran
function setFooterBackground() {
    const bgDiv = document.getElementById('footer-bg');
    if (!bgDiv) return;

    if (window.innerWidth <= 1024) {
        // Mobile
        bgDiv.style.backgroundImage = "url('./img/Footer-mobile.svg')";
        bgDiv.style.backgroundSize = "cover";
        bgDiv.style.backgroundPosition = "right bottom";
    } else {
        // Desktop
        bgDiv.style.backgroundImage = "url('./img/Footer.svg')";
        bgDiv.style.backgroundSize = "cover";
        bgDiv.style.backgroundPosition = "right bottom";
    }
}

// Initialisation du footer
function initFooter() {
    createFooter();
    generateSocialLinks();
    generateCopyrightText();
    setFooterBackground();

    // Scroll smooth pour les liens du footer
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Changer l'image au redimensionnement
    window.addEventListener('resize', setFooterBackground);
}

// Lancer l'initialisation au chargement
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooter);
} else {
    initFooter();
}