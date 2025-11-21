// Charger le JSON de langues
let translations = {};
fetch('i18n/lang.json')
    .then(response => response.json())
    .then(data => {
        translations = data;
        // Appliquer la langue par défaut (fr)
        applyLanguage('fr');
    })
    .catch(err => console.error("Erreur chargement JSON:", err));

// Fonction pour appliquer une langue
function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

// Gestion des boutons pour changer la langue
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-lang]').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            applyLanguage(lang);
        });
    });
});