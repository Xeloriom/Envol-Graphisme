// Résolution de chemin pour GitHub Pages
const SWIPER_BASE = (typeof BASE_PATH !== 'undefined') ? BASE_PATH : '/Envol-Graphisme';

function createStars(rating) {
    return Array.from({ length: rating }, () => `
        <svg class="w-5 h-5 text-amber-500" viewBox="0 0 18 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"/>
        </svg>`).join('');
}

fetch(`${SWIPER_BASE}/Data/testimonials.json`)
    .then(r => r.json())
    .then(data => {
        const wrapper = document.getElementById('testimonial-wrapper');
        if (!wrapper) return;

        data.forEach(testimonial => {
            const slide = document.createElement('div');
            slide.className = 'cursor-grab swiper-slide group bg-white border border-gray-300 hover:scale-[1.04] shadow-2xl rounded-2xl p-6 transition-all duration-500 hover:z-50';
            slide.setAttribute('role', 'listitem');
            slide.innerHTML = `
                <div class="flex items-center mb-4 gap-1" aria-label="Note : ${testimonial.rating} étoiles sur 5">
                    ${createStars(testimonial.rating)}
                </div>
                <p class="text-lg text-gray-600 leading-8 mb-6">"${testimonial.text}"</p>
                <div class="flex items-center gap-4">
                    <img class="rounded-full w-12 h-12 object-cover" src="${testimonial.avatar}"
                         alt="Photo de ${testimonial.name}" loading="lazy">
                    <div>
                        <h5 class="text-gray-900 font-semibold">${testimonial.name}</h5>
                        <span class="text-sm text-gray-500">${testimonial.role}</span>
                    </div>
                </div>`;
            wrapper.appendChild(slide);
        });

        new Swiper('.mySwiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: { delay: 5000, disableOnInteraction: false },
            navigation: {
                nextEl: '#slider-button-right',
                prevEl: '#slider-button-left',
            },
            observer: true,
            observeParents: true,
            breakpoints: {
                640:  { slidesPerView: 1 },
                768:  { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        });
    })
    .catch(err => console.error('Erreur chargement testimonials.json :', err));
