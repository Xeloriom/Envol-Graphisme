const FOOTER_BASE = (typeof BASE_PATH !== 'undefined') ? BASE_PATH : '/Envol-Graphisme';

const socialNetworks = [
    { name:'Instagram', url:'https://www.instagram.com/envol.graphisme/',    icon:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg', bg:'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' },
    { name:'LinkedIn',  url:'https://www.linkedin.com/in/envol-graphisme/',  icon:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg',  bg:'#0A66C2' },
    { name:'Behance',   url:'https://www.behance.net/envol-graphisme',        icon:'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/behance.svg',   bg:'#053eff' }
];

function initFooter() {
    const container = document.getElementById('bienvenue');
    if (!container) return;

    /* ── Separator wave ── */
    const sep = document.createElement('div');
    sep.style.cssText = 'width:100%;line-height:0;overflow:hidden;margin-top:2rem;';
    sep.innerHTML = `<svg viewBox="0 0 1440 60" preserveAspectRatio="none" style="width:100%;height:60px;display:block;" aria-hidden="true">
        <path d="M0,40 C360,0 1080,80 1440,30 L1440,60 L0,60 Z" fill="#0c1325"/>
    </svg>`;

    /* ── Footer element ── */
    const footer = document.createElement('footer');
    footer.id = 'site-footer';
    footer.setAttribute('role', 'contentinfo');
    footer.style.cssText = `
        position: relative;
        background: #0c1325;
        overflow: hidden;
        padding: 3rem 1.5rem 2rem;
    `;

    footer.innerHTML = `
    <!-- Étoiles de fond -->
    <div style="position:absolute;inset:0;
                background-image:url('${FOOTER_BASE}/img/Motif%20étoiles%20blanches.svg');
                background-size:500px 500px;opacity:0.04;pointer-events:none;" aria-hidden="true"></div>

    <!-- Chouette décorative droite -->
    <div style="position:absolute;bottom:0;right:-10px;width:min(260px,35vw);
                pointer-events:none;opacity:0.18;z-index:0;" aria-hidden="true">
        <img src="${FOOTER_BASE}/img/Chouetteailesouvertes.svg"
             alt="" style="width:100%;height:auto;display:block;" loading="lazy">
    </div>

    <!-- Ligne décorative top -->
    <div style="position:absolute;top:0;left:0;right:0;height:1px;
                background:linear-gradient(90deg,transparent,rgba(203,141,48,0.4),transparent);"
         aria-hidden="true"></div>

    <!-- Contenu principal -->
    <div style="position:relative;z-index:1;max-width:900px;margin:0 auto;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:start;"
             class="footer-grid">

            <!-- Navigation -->
            <nav style="display:flex;flex-direction:column;gap:0.75rem;" aria-label="Navigation footer">
                <a href="${FOOTER_BASE}/index.html"
                   style="font-family:'Josefin Sans',sans-serif;font-size:0.78rem;letter-spacing:0.15em;
                          text-transform:uppercase;color:rgba(222,227,246,0.6);text-decoration:none;
                          transition:color 0.2s;"
                   onmouseover="this.style.color='#CB8D30'"
                   onmouseout="this.style.color='rgba(222,227,246,0.6)'">Bienvenue</a>
                <a href="${FOOTER_BASE}/View/Projets.html"
                   style="font-family:'Josefin Sans',sans-serif;font-size:0.78rem;letter-spacing:0.15em;
                          text-transform:uppercase;color:rgba(222,227,246,0.6);text-decoration:none;
                          transition:color 0.2s;"
                   onmouseover="this.style.color='#CB8D30'"
                   onmouseout="this.style.color='rgba(222,227,246,0.6)'">Projets</a>
                <a href="${FOOTER_BASE}/View/Offres.html"
                   style="font-family:'Josefin Sans',sans-serif;font-size:0.78rem;letter-spacing:0.15em;
                          text-transform:uppercase;color:rgba(222,227,246,0.6);text-decoration:none;
                          transition:color 0.2s;"
                   onmouseover="this.style.color='#CB8D30'"
                   onmouseout="this.style.color='rgba(222,227,246,0.6)'">Offres</a>
                <a href="${FOOTER_BASE}/View/Contact.html"
                   style="font-family:'Josefin Sans',sans-serif;font-size:0.78rem;letter-spacing:0.15em;
                          text-transform:uppercase;color:rgba(222,227,246,0.6);text-decoration:none;
                          transition:color 0.2s;"
                   onmouseover="this.style.color='#CB8D30'"
                   onmouseout="this.style.color='rgba(222,227,246,0.6)'">Contact</a>
            </nav>

            <!-- Réseaux + logo -->
            <div style="display:flex;flex-direction:column;align-items:flex-start;gap:1.25rem;">
                <p style="font-family:'Josefin Sans',sans-serif;font-weight:700;font-size:0.78rem;
                           letter-spacing:0.15em;text-transform:uppercase;color:#CB8D30;"
                   id="social">Retrouvez-moi</p>
                <div id="social-links" style="display:flex;gap:0.75rem;flex-wrap:wrap;" role="list"></div>
                <a href="https://linktr.ee/envol.graphisme" target="_blank" rel="noopener noreferrer"
                   style="font-family:'Josefin Sans',sans-serif;font-size:0.75rem;
                          color:rgba(222,227,246,0.5);text-decoration:underline;transition:color 0.2s;"
                   onmouseover="this.style.color='#CB8D30'"
                   onmouseout="this.style.color='rgba(222,227,246,0.5)'">Linktree</a>
            </div>
        </div>

        <!-- Copyright -->
        <div style="margin-top:2.5rem;padding-top:1.5rem;
                    border-top:1px solid rgba(203,141,48,0.15);
                    display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
            <p id="copyright-text"
               style="font-family:'Josefin Sans',sans-serif;font-size:0.72rem;
                      color:rgba(222,227,246,0.3);letter-spacing:0.05em;"></p>
            <img src="${FOOTER_BASE}/img/ENVOL%20Graphisme%20Logo%20clair.png"
                 alt="Envol Graphisme" style="height:28px;opacity:0.4;" loading="lazy">
        </div>
    </div>
    `;

    container.appendChild(sep);
    container.appendChild(footer);

    // Réseaux sociaux
    const socialEl = document.getElementById('social-links');
    if (socialEl) {
        socialNetworks.forEach(n => {
            const a = document.createElement('a');
            a.href = n.url; a.target = '_blank'; a.rel = 'noopener noreferrer';
            a.setAttribute('aria-label', n.name);
            a.setAttribute('role', 'listitem');
            a.style.cssText = `width:40px;height:40px;border-radius:50%;background:${n.bg};
                display:flex;align-items:center;justify-content:center;
                transition:transform 0.2s,box-shadow 0.2s;text-decoration:none;`;
            a.onmouseover = () => { a.style.transform='scale(1.12)'; a.style.boxShadow='0 4px 20px rgba(0,0,0,0.4)'; };
            a.onmouseout  = () => { a.style.transform='scale(1)';    a.style.boxShadow='none'; };
            const img = document.createElement('img');
            img.src = n.icon; img.alt = n.name;
            img.style.cssText = 'width:18px;height:18px;filter:invert(1);';
            img.loading = 'lazy';
            a.appendChild(img); socialEl.appendChild(a);
        });
    }

    // Copyright
    const copy = document.getElementById('copyright-text');
    if (copy) copy.textContent = `Envol Graphisme · SIRET 93907780600015 · © ${new Date().getFullYear()} Tous droits réservés`;

    // Responsive grid (mobile = 1 colonne)
    const grid = footer.querySelector('.footer-grid');
    function checkWidth() {
        if (grid) grid.style.gridTemplateColumns = window.innerWidth < 640 ? '1fr' : '1fr 1fr';
    }
    checkWidth();
    window.addEventListener('resize', checkWidth, { passive: true });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooter);
} else {
    initFooter();
}
