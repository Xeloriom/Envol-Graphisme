
    const slides = document.querySelectorAll(".testimonial-slide");
    const dots = document.querySelectorAll("#carousel-dots button");
    let currentIndex = 0;

    function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("hidden", i !== index);
    });

    dots.forEach((dot, i) => {
    if (i === index) {
    dot.classList.add("bg-[#BF8F43]");
    dot.classList.remove("border");
} else {
    dot.classList.remove("bg-[#BF8F43]");
    dot.classList.add("border");
    dot.classList.add("border-[#BF8F43]");
}
});

    currentIndex = index;
}

    dots.forEach(dot => {
    dot.addEventListener("click", () => {
        const index = parseInt(dot.dataset.index);
        showSlide(index);
    });
});

    // Optional: auto slide every 5s
    setInterval(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
}, 5000);

    // Initialize first slide
    showSlide(0);