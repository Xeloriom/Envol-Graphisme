window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    document.querySelectorAll('.parallax-layer').forEach(layer => {
        const speed = parseFloat(layer.dataset.speed) || 0.5;
        let yPos = -(scrolled * speed);
        let xPos = 0;

        const img = layer.querySelector('img');
        if (!img) return;

        const src = img.src;

        // 🌙 Lune → descend au scroll
        if (src.includes('Lune')) {
            yPos = scrolled * speed; // on inverse le sens pour qu’elle descende
        }

        // 🌲 Arbres gauche → va vers la gauche
        else if (src.includes('Arbres%20de%20gauche') || src.includes('Arbres_de_gauche') || src.includes('ArbresGauche')) {
            xPos = -(scrolled * 0.5);
        }

        // 🌲 Arbres droite → va vers la droite
        else if (src.includes('Arbres%20de%20droite') || src.includes('Arbres_de_droite') || src.includes('ArbresDroite')) {
            xPos = (scrolled * 0.5);
        }

        // 🏔️ Appliquer la transformation
        layer.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
});
