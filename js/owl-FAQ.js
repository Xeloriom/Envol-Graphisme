// owl-animation.js - version robuste
document.addEventListener('DOMContentLoaded', () => {
    const owl = document.getElementById('owl');
    if (!owl) return console.warn('Element #owl non trouvé');

    const owlWrapper = document.getElementById('owl-wrapper');

    // Variables d'interpolation
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const smoothness = 0.08;        // 0.05 - 0.15
    const horizontalSpeed = 1;      // multiplicateur
    const verticalSpeed = 0.12;     // légère descente

    // Calculer maxMovement dynamiquement (assure sortie complète)
    function calcMaxMovement() {
        // +300 pour s'assurer sortie hors écran (ajuste si besoin)
        return window.innerWidth + 300;
    }
    let maxMovement = calcMaxMovement();

    // Scroll -> définit la cible
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0;

        // On veut que la chouette aille vers la droite en proportion du scroll
        targetX = Math.min(progress * maxMovement * horizontalSpeed, maxMovement);
        // légère montée/descente relative au scroll
        targetY = scrollY * verticalSpeed;
    }, { passive: true });

    // Animation frame
    function animateOwl() {
        // lerp pour douceur
        currentX += (targetX - currentX) * smoothness;
        currentY += (targetY - currentY) * smoothness;

        // rotation optionnelle basée sur la vitesse horizontale
        const velocityX = targetX - currentX;
        const rotation = velocityX * 0.02; // ajuster facteur pour moins de rotation

        // Appliquer via variables CSS pour éviter conflit avec animation
        owl.style.setProperty('--tx', `${currentX}px`);
        owl.style.setProperty('--ty', `${currentY}px`);

        // Si tu veux appliquer aussi une rotation (compose transform)
        // on place rotation sur le wrapper pour ne pas écraser la translate gérée par var()
        if (owlWrapper) {
            owlWrapper.style.transform = `rotate(${rotation}deg)`;
            owlWrapper.style.transformOrigin = 'center';
        }

        requestAnimationFrame(animateOwl);
    }

    // démarrage
    animateOwl();

    // click → page FAQ / Contact
    owl.style.cursor = 'pointer';
    owl.addEventListener('click', () => {
        const base = window.location.hostname.includes('github.io') ? '/Envol-Graphisme' : '';
        window.location.href = base + '/View/FAQ.html';
    });

    window.addEventListener('resize', () => {
        maxMovement = calcMaxMovement();
        if (targetX > maxMovement) targetX = maxMovement;
    });
});