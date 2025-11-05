const owl = document.getElementById('owl');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    // Ajuste la vitesse et le mouvement horizontal ou vertical
    const speedY = 0.5; // vitesse verticale
    const speedX = 0.3; // vitesse horizontale
    const translateY = scrollY * speedY;
    const translateX = scrollY * speedX;

    // Applique le mouvement parallax + disparition progressive
    owl.style.transform = `translate(${translateX}px, ${translateY}px)`;
    owl.style.opacity = Math.max(0, 1 - scrollY / 800); // disparaît progressivement après 800px
});