const BASE = (typeof BASE_PATH !== 'undefined') ? BASE_PATH : '/Envol-Graphisme';

window.i18nCallbacks = window.i18nCallbacks || [];
let translations = {};

fetch(`${BASE}/i18n/lang.json`)
    .then(r => r.json())
    .then(data => {
        translations = data;
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
    document.querySelectorAll('[data-lang]').forEach(btn => {
        btn.style.opacity = btn.getAttribute('data-lang') === lang ? '1' : '0.45';
    });
    // Notifie les composants dynamiques (Swiper, Offres)
    window.i18nCallbacks.forEach(fn => fn(lang));
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

document.addEventListener('click', function(e) {
    var btn = e.target.closest('[data-lang]');
    if (btn) applyLanguage(btn.getAttribute('data-lang'));
});
