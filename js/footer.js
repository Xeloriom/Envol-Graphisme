const FOOTER_BASE = (typeof BASE_PATH !== 'undefined') ? BASE_PATH : '/Envol-Graphisme';

const socialNetworks = [
    { name:'Instagram', url:'https://www.instagram.com/envol.graphisme/',    icon:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg', bg:'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' },
    { name:'LinkedIn',  url:'https://www.linkedin.com/in/envol-graphisme/',  icon:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg',  bg:'#0A66C2' },
    { name:'Behance',   url:'https://www.behance.net/envol-graphisme',        icon:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/behance.svg',   bg:'#053eff' }
];

function setFooterBg() {
    var bg = document.getElementById('footer-bg');
    if (!bg) return;
    var isMobile = window.innerWidth <= 1024;
    bg.style.backgroundImage = "url('" + FOOTER_BASE + '/img/' + (isMobile ? 'Footer-mobile' : 'Footer') + ".svg')";
}

function initFooter() {
    var container = document.getElementById('bienvenue');
    if (!container) return;

    var footer = document.createElement('footer');
    footer.setAttribute('role', 'contentinfo');
    footer.style.cssText = 'position:relative;width:100%;overflow:visible;background:transparent;';

    footer.innerHTML =
        /* ── Image de fond originale (Footer.svg / Footer-mobile.svg) ── */
        '<div id="footer-bg" aria-hidden="true"' +
        '     style="position:absolute;inset:0;width:115%;height:110%;' +
        '            background-repeat:no-repeat;background-size:cover;background-position:right bottom;' +
        '            pointer-events:none;"></div>' +

        /* ── Contenu ── */
        '<div style="position:relative;z-index:1;width:100%;max-width:900px;' +
        '            padding:3rem 1.5rem 1.5rem;display:flex;flex-wrap:wrap;gap:2.5rem;">' +

            /* Navigation */
            '<nav style="display:flex;flex-direction:column;gap:0.7rem;min-width:120px;" aria-label="Navigation footer">' +
                ['Bienvenue:' + FOOTER_BASE + '/index.html',
                 'Projets:'   + FOOTER_BASE + '/View/Projets.html',
                 'Offres:'    + FOOTER_BASE + '/View/Offres.html',
                 'Contact:'   + FOOTER_BASE + '/View/Contact.html']
                .map(function(s){
                    var p = s.split(':'); var label = p[0]; var href = p.slice(1).join(':');
                    return '<a href="' + href + '"' +
                           ' style="font-family:\'Josefin Sans\',sans-serif;font-size:0.78rem;' +
                           'letter-spacing:0.14em;text-transform:uppercase;color:rgba(222,227,246,0.65);' +
                           'text-decoration:none;transition:color 0.2s;"' +
                           ' onmouseover="this.style.color=\'#CB8D30\'"' +
                           ' onmouseout="this.style.color=\'rgba(222,227,246,0.65)\'">' + label + '</a>';
                }).join('') +
            '</nav>' +

            /* Réseaux */
            '<div style="display:flex;flex-direction:column;gap:1rem;">' +
                '<p id="social" style="font-family:\'Josefin Sans\',sans-serif;font-weight:700;' +
                '   font-size:0.78rem;letter-spacing:0.14em;text-transform:uppercase;color:#CB8D30;">'+
                'Retrouvez-moi</p>' +
                '<div id="social-links" style="display:flex;gap:0.7rem;flex-wrap:wrap;" role="list"></div>' +
                '<a href="https://linktr.ee/envol.graphisme" target="_blank" rel="noopener noreferrer"' +
                '   style="font-size:0.75rem;color:rgba(222,227,246,0.45);text-decoration:underline;' +
                '          font-family:\'Josefin Sans\',sans-serif;transition:color 0.2s;"' +
                '   onmouseover="this.style.color=\'#CB8D30\'"' +
                '   onmouseout="this.style.color=\'rgba(222,227,246,0.45)\'">Linktree</a>' +
            '</div>' +
        '</div>' +

        /* Copyright */
        '<div style="position:relative;z-index:1;padding:1rem 1.5rem 1.5rem;' +
        '            border-top:1px solid rgba(255,255,255,0.08);">' +
            '<p id="copyright-text"' +
            '   style="font-family:\'Josefin Sans\',sans-serif;font-size:0.7rem;' +
            '          color:rgba(222,227,246,0.28);letter-spacing:0.05em;"></p>' +
        '</div>';

    container.appendChild(footer);

    /* Réseaux sociaux */
    var sl = document.getElementById('social-links');
    if (sl) {
        socialNetworks.forEach(function(n) {
            var a = document.createElement('a');
            a.href = n.url; a.target = '_blank'; a.rel = 'noopener noreferrer';
            a.setAttribute('aria-label', n.name);
            a.setAttribute('role', 'listitem');
            a.style.cssText = 'width:38px;height:38px;border-radius:50%;background:' + n.bg +
                ';display:flex;align-items:center;justify-content:center;transition:transform 0.2s;text-decoration:none;';
            a.onmouseover = function(){ this.style.transform='scale(1.12)'; };
            a.onmouseout  = function(){ this.style.transform='scale(1)'; };
            var img = document.createElement('img');
            img.src = n.icon; img.alt = n.name;
            img.style.cssText = 'width:17px;height:17px;filter:invert(1);';
            img.loading = 'lazy';
            a.appendChild(img); sl.appendChild(a);
        });
    }

    /* Copyright */
    var cp = document.getElementById('copyright-text');
    if (cp) cp.textContent = 'Envol Graphisme · SIRET 93907780600015 · © ' + new Date().getFullYear() + ' Tous droits réservés';

    /* Image de fond */
    setFooterBg();
    window.addEventListener('resize', setFooterBg, { passive: true });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooter);
} else {
    initFooter();
}
