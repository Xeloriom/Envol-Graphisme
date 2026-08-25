const FOOTER_BASE = (typeof BASE_PATH !== 'undefined') ? BASE_PATH : '/Envol-Graphisme';

const socialNetworks = [
    { name:'LinkedIn',  url:'https://www.linkedin.com/in/envol-graphisme/', icon:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg',  bg:'#0A66C2' },
    { name:'Instagram', url:'https://www.instagram.com/envol.graphisme/',   icon:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg', bg:'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' },
    { name:'Behance',   url:'https://www.behance.net/envol-graphisme',       icon:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/behance.svg',   bg:'#053eff' }
];

function initFooter() {
    var footer = document.createElement('footer');
    footer.setAttribute('role', 'contentinfo');
    footer.innerHTML =
        '<style>' +
        'footer{' +
            'position:relative;width:100%;overflow:visible;' +
            'background:transparent;border-top:none;' +
            'margin-top:-80px;padding:0;min-height:240px;' +
            'z-index:10;' +
        '}' +

        /* ─── DESKTOP layout (absolute positioning sur l'image) ─── */
        '.ftr-inner{position:absolute;inset:0;z-index:2;}' +

        '.ftr-nav{' +
            'position:absolute;left:3rem;top:50%;transform:translateY(-50%);' +
            'display:flex;flex-direction:column;gap:0.5rem;' +
        '}' +
        '.ftr-link{' +
            'font-family:\'Josefin Sans\',sans-serif;letter-spacing:0.14em;' +
            'text-transform:uppercase;color:rgba(222,227,246,0.55);' +
            'text-decoration:none;transition:color 0.2s;font-size:1.1rem;' +
        '}' +
        '.ftr-link:hover{color:#CB8D30;}' +

        '.ftr-social{' +
            'position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);' +
            'display:flex;flex-direction:column;gap:0.65rem;align-items:center;' +
        '}' +
        '.ftr-social-title{' +
            'font-family:\'Josefin Sans\',sans-serif;font-weight:700;' +
            'letter-spacing:0.12em;text-transform:uppercase;' +
            'color:rgba(222,227,246,0.9);margin:0;font-size:1.25rem;' +
        '}' +
        '.ftr-social-icons{display:flex;gap:2.5rem;}' +
        '.ftr-social-links{display:flex;gap:1.2rem;}' +

        '.ftr-legal{' +
            'position:absolute;bottom:1.2rem;left:5rem;right:2rem;z-index:2;' +
            'font-family:\'Josefin Sans\',sans-serif;' +
            'font-size:clamp(0.7rem,1.1vw,1.05rem);letter-spacing:0.06em;' +
            'color:rgba(222,227,246,0.75);white-space:nowrap;' +
        '}' +

        '.ftr-bg{' +
            'position:absolute;left:0;right:0;top:0;bottom:0;' +
            'width:100%;height:100%;' +
            'object-fit:cover;object-position:right bottom;' +
            'pointer-events:none;z-index:0;' +
        '}' +
        '.ftr-bg-mobile{display:none;}' +
        '.ftr-divider{display:none;}' +

        /* ── Tablet ≤ 1024px */
        '@media(max-width:1024px){' +
            '.ftr-nav{left:2rem;}' +
            '.ftr-social{left:45%;}' +
            '.ftr-legal{font-size:0.85rem;left:2rem;}' +
        '}' +

        /* ── Mobile ≤ 767px : layout flex vertical centré */
        '@media(max-width:767px){' +
            'footer{margin-top:0;min-height:480px;}' +
            '.ftr-bg{display:none;}' +
            '.ftr-bg-mobile{' +
                'display:block;position:absolute;left:0;right:0;top:0;bottom:0;' +
                'width:100%;height:100%;object-fit:cover;object-position:center top;' +
                'pointer-events:none;z-index:0;' +
            '}' +
            /* Passe l'inner en flex colonne centré */
            '.ftr-inner{' +
                'position:absolute;inset:0;z-index:2;' +
                'display:flex;flex-direction:column;align-items:center;justify-content:center;' +
                'padding:1.5rem 1rem 2.5rem;gap:1rem;' +
            '}' +
            /* Nav en grille 2 colonnes */
            '.ftr-nav{' +
                'position:static;transform:none;' +
                'display:grid;grid-template-columns:1fr 1fr;gap:0.4rem 1.8rem;' +
                'text-align:center;' +
            '}' +
            '.ftr-link{font-size:0.82rem;letter-spacing:0.1em;}' +
            /* Séparateur visuel */
            '.ftr-divider{' +
                'display:block;width:40px;height:2px;' +
                'background:linear-gradient(90deg,transparent,rgba(203,141,48,0.7),transparent);' +
                'border:none;margin:0;' +
            '}' +
            /* Social */
            '.ftr-social{' +
                'position:static;transform:none;' +
                'gap:0.6rem;' +
            '}' +
            '.ftr-social-title{font-size:0.9rem;letter-spacing:0.14em;}' +
            '.ftr-social-icons{gap:1.4rem;}' +
            '.ftr-social-links{gap:1.5rem;margin-top:0.2rem;}' +
            /* Legal en bas absolu */
            '.ftr-legal{' +
                'position:absolute;bottom:0.55rem;left:0;right:0;' +
                'text-align:center;font-size:0.48rem;white-space:nowrap;' +
                'letter-spacing:0.04em;' +
            '}' +
        '}' +

        /* ── Mobile S ≤ 480px */
        '@media(max-width:480px){' +
            'footer{min-height:420px;}' +
            '.ftr-inner{padding:1.2rem 0.8rem 2.2rem;gap:0.75rem;}' +
            '.ftr-nav{gap:0.3rem 1.4rem;}' +
            '.ftr-link{font-size:0.75rem;}' +
            '.ftr-social-title{font-size:0.82rem;}' +
            '.ftr-social-icons{gap:1.1rem;}' +
            '.ftr-legal{font-size:0.42rem;}' +
        '}' +

        /* ── Large ≥ 1536px */
        '@media(min-width:1536px){' +
            'footer{min-height:320px;margin-top:-100px;}' +
            '.ftr-nav{left:5rem;}' +
            '.ftr-social{left:48%;}' +
            '.ftr-legal{font-size:1.1rem;left:5rem;}' +
        '}' +
        '</style>' +

        '<div class="ftr-inner">' +
            '<nav class="ftr-nav" aria-label="Navigation footer">' +
                '<a href="' + FOOTER_BASE + '/index.html"        class="ftr-link" data-i18n="nav_home">Bienvenue</a>' +
                '<a href="' + FOOTER_BASE + '/View/Projets.html" class="ftr-link" data-i18n="nav_projects">Projets</a>' +
                '<a href="' + FOOTER_BASE + '/View/Offres.html"  class="ftr-link" data-i18n="nav_offers">Offres</a>' +
                '<a href="' + FOOTER_BASE + '/View/Contact.html" class="ftr-link" data-i18n="nav_contact">Contact</a>' +
            '</nav>' +
            '<hr class="ftr-divider">' +
            '<div id="social" class="ftr-social">' +
                '<p class="ftr-social-title" data-i18n="footer_social">Suis moi sur les réseaux&nbsp;!</p>' +
                '<div class="ftr-social-icons" id="ftr-icons" role="list"></div>' +
                '<div class="ftr-social-links">' +
                    '<a href="https://linktr.ee/envol.graphisme" target="_blank" rel="noopener noreferrer" class="ftr-link">Linktree</a>' +
                    '<a href="' + FOOTER_BASE + '/mentions-legales.html" class="ftr-link" data-i18n="footer_legal_link">Mentions légales</a>' +
                '</div>' +
            '</div>' +
        '</div>' +

        '<p class="ftr-legal">Envol Graphisme&nbsp;| Micro-entreprise&nbsp;| SIRET n°93907780600015&nbsp;| © 2025 Envol Graphisme – Tous droits réservés</p>' +

        '<img src="' + FOOTER_BASE + '/img/Footer.webp" alt="" class="ftr-bg" aria-hidden="true" loading="lazy">' +
        '<img src="' + FOOTER_BASE + '/img/Footermobile.webp" alt="" class="ftr-bg-mobile" aria-hidden="true" loading="lazy">';

    document.body.appendChild(footer);

    var isMobile = window.innerWidth <= 480;
    var iconSize = isMobile ? '40px' : '52px';
    var imgSize  = isMobile ? '18px' : '24px';

    var icons = document.getElementById('ftr-icons');
    if (icons) {
        socialNetworks.forEach(function(n) {
            var a = document.createElement('a');
            a.href = n.url; a.target = '_blank'; a.rel = 'noopener noreferrer';
            a.setAttribute('aria-label', n.name);
            a.setAttribute('role', 'listitem');
            a.style.cssText =
                'width:'+iconSize+';height:'+iconSize+';border-radius:50%;background:' + n.bg +
                ';display:flex;align-items:center;justify-content:center;' +
                'transition:transform 0.2s,box-shadow 0.2s;text-decoration:none;flex-shrink:0;';
            a.onmouseover = function(){ this.style.transform='scale(1.14)'; this.style.boxShadow='0 4px 18px rgba(0,0,0,0.35)'; };
            a.onmouseout  = function(){ this.style.transform='scale(1)';    this.style.boxShadow='none'; };
            var img = document.createElement('img');
            img.src = n.icon; img.alt = n.name;
            img.style.cssText = 'width:'+imgSize+';height:'+imgSize+';filter:invert(1);';
            img.loading = 'lazy';
            a.appendChild(img); icons.appendChild(a);
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooter);
} else {
    initFooter();
}
