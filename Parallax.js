window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    document.querySelectorAll('.parallax-layer').forEach(layer => {
        const speed = parseFloat(layer.dataset.speed) || 0.5;
        let xPos = 0;
        let yPos = 0; // On fixe la hauteur de base

        const img = layer.querySelector('img');
        if (!img) return;

        const src = img.src;

        // 🌙 Lune → descend légèrement au scroll
        if (src.includes('Lune')) {
            yPos = scrolled * speed;
        }

        // 🌲 Arbres gauche → bougent vers la gauche (pas de mouvement vertical)
        else if (
            src.includes('Arbres%20de%20gauche') ||
            src.includes('Arbres_de_gauche') ||
            src.includes('ArbresGauche')
        ) {
            xPos = -(scrolled * 0.5);
            yPos = 0; // empêche tout déplacement vertical
        }

        // 🌲 Arbres droite → bougent vers la droite (pas de mouvement vertical)
        else if (
            src.includes('Arbres%20de%20droite') ||
            src.includes('Arbres_de_droite') ||
            src.includes('ArbresDroite')
        ) {
            xPos = scrolled * 0.5;
            yPos = 0; // empêche tout déplacement vertical
        }

        // 🏔️ Autres éléments → effet parallax vertical classique
        else {
            yPos = -(scrolled * speed);
        }

        // 🧭 Appliquer la transformation
        layer.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
});
