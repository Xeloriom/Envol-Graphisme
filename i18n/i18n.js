// Résolution du chemin absolu vers lang.json quelque soit la page courante
const BASE = (typeof BASE_PATH !== 'undefined') ? BASE_PATH : '/Envol-Graphisme';

let translations = {};
fetch(`${BASE}/i18n/lang.json`)
    .then(r => r.json())
    .then(data => {
        translations = data;
        const saved = localStorage.getItem('envol-lang') || 'fr';
        applyLanguage(saved);
    })
    .catch(err => console.error('Erreur chargement lang.json :', err));

function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang]?.[key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'fr');
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-lang]').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            localStorage.setItem('envol-lang', lang);
            applyLanguage(lang);
        });
    });
});
