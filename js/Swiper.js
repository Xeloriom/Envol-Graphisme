const SWIPER_BASE = (typeof BASE_PATH !== 'undefined') ? BASE_PATH : '/Envol-Graphisme';

// Étoiles en SVG inline — DA dorée Disney
function starSVG() {
    return `<svg class="testi-star" viewBox="0 0 18 17" fill="#CB8D30" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.10326 1.317C8.47008 0.574 9.52992 0.574 9.89674 1.317L11.7063 4.983C11.8519 5.279 12.1335 5.483 12.4592 5.531L16.5054 6.118C17.3256 6.238 17.653 7.246 17.0596 7.824L14.1318 10.678C13.8961 10.908 13.7885 11.239 13.8442 11.563L14.5353 15.593C14.6754 16.41 13.818 17.033 13.0844 16.647L9.46534 14.745C9.17402 14.591 8.82598 14.591 8.53466 14.745L4.91562 16.647C4.182 17.033 3.32456 16.41 3.46467 15.593L4.15585 11.563C4.21148 11.239 4.10393 10.908 3.86825 10.678L0.940384 7.824C0.346867 7.246 0.674378 6.238 1.4946 6.118L5.54081 5.531C5.86652 5.483 6.14808 5.279 6.29374 4.983L8.10326 1.317Z"/>
    </svg>`;
}

function buildTestiCard(t) {
    const stars = Array.from({ length: t.rating }, starSVG).join('');
    return `
    <div class="testi-card swiper-slide" role="listitem">
        <img src="${SWIPER_BASE}/img/Guillemets%20Haut.svg"
             alt="" class="testi-quote-open" loading="lazy" aria-hidden="true">
        <div class="testi-stars" aria-label="${t.rating} étoiles sur 5">${stars}</div>
        <p class="testi-text">${t.text}</p>
        <div class="testi-divider"></div>
        <div class="flex items-center gap-3">
            <img class="testi-author-img" src="${t.avatar}"
                 alt="Photo de ${t.name}" loading="lazy">
            <div>
                <p class="testi-author-name">${t.name}</p>
                <p class="testi-author-role">${t.role}</p>
            </div>
        </div>
    </div>`;
}

fetch(`${SWIPER_BASE}/Data/testimonials.json`)
    .then(r => r.json())
    .then(data => {
        const wrapper = document.getElementById('testimonial-wrapper');
        if (!wrapper) return;

        data.forEach(t => {
            wrapper.insertAdjacentHTML('beforeend', buildTestiCard(t));
        });

        new Swiper('.mySwiper', {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            speed: 700,
            autoplay: { delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true },
            navigation: {
                nextEl: '#slider-button-right',
                prevEl: '#slider-button-left',
            },
            observer: true,
            observeParents: true,
            grabCursor: true,
            breakpoints: {
                640:  { slidesPerView: 1, spaceBetween: 20 },
                768:  { slidesPerView: 2, spaceBetween: 24 },
                1280: { slidesPerView: 3, spaceBetween: 28 },
            },
        });
    })
    .catch(err => console.error('testimonials.json :', err));
