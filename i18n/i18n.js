// Résolution du chemin absolu
const BASE = (typeof BASE_PATH !== 'undefined') ? BASE_PATH : '/Envol-Graphisme';

let translations = {};

fetch(`${BASE}/i18n/lang.json`)
    .then(r => r.json())
    .then(data => {
        translations = data;
        // Appliquer la langue sauvegardée (ou 'fr' par défaut)
        const saved = (typeof localStorage !== 'undefined' && localStorage.getItem('envol-lang')) || 'fr';
        applyLanguage(saved);
    })
    .catch(err => console.error('Erreur lang.json :', err));

function applyLanguage(lang) {
    if (!translations[lang]) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });
    document.documentElement.setAttribute('lang', lang);
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('envol-lang', lang);
    }
    // Indicateur visuel sur les drapeaux
    document.querySelectorAll('[data-lang]').forEach(btn => {
        const isActive = btn.getAttribute('data-lang') === lang;
        btn.style.opacity = isActive ? '1' : '0.45';
        btn.style.outline  = isActive ? '2px solid #CB8D30' : '';
        btn.style.outlineOffset = '2px';
    });
}

// Délégation d'événement sur document — fonctionne même si la navbar est injectée tard
document.addEventListener('click', function(e) {
    var btn = e.target.closest('[data-lang]');
    if (btn) {
        applyLanguage(btn.getAttribute('data-lang'));
    }
});
