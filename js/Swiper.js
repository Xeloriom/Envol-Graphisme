const SWIPER_BASE = (typeof BASE_PATH !== 'undefined') ? BASE_PATH : '/Envol-Graphisme';

function starSVG() {
    return `<svg class="testi-star" viewBox="0 0 18 17" fill="#CB8D30" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.10326 1.317C8.47008 0.574 9.52992 0.574 9.89674 1.317L11.7063 4.983C11.8519 5.279 12.1335 5.483 12.4592 5.531L16.5054 6.118C17.3256 6.238 17.653 7.246 17.0596 7.824L14.1318 10.678C13.8961 10.908 13.7885 11.239 13.8442 11.563L14.5353 15.593C14.6754 16.41 13.818 17.033 13.0844 16.647L9.46534 14.745C9.17402 14.591 8.82598 14.591 8.53466 14.745L4.91562 16.647C4.182 17.033 3.32456 16.41 3.46467 15.593L4.15585 11.563C4.21148 11.239 4.10393 10.908 3.86825 10.678L0.940384 7.824C0.346867 7.246 0.674378 6.238 1.4946 6.118L5.54081 5.531C5.86652 5.483 6.14808 5.279 6.29374 4.983L8.10326 1.317Z"/>
    </svg>`;
}

fetch(`${SWIPER_BASE}/Data/testimonials.json`)
    .then(r => r.json())
    .then(data => {
        const wrapper = document.getElementById('testimonial-wrapper');
        if (!wrapper) return;

        let current = 0;
        let autoTimer = null;
        let currentLang = (typeof localStorage !== 'undefined' && localStorage.getItem('envol-lang')) || 'fr';

        wrapper.innerHTML = `
        <div class="testi-card">
            <img class="testi-author-img" id="testi-img" src="" alt="" loading="lazy">
            <div class="testi-content">
                <span class="testi-q-open">&#10077;</span>
                <p class="testi-text" id="testi-text"></p>
                <span class="testi-q-close">&#10078;</span>
            </div>
            <div class="testi-dots" id="testi-dots"></div>
        </div>`;

        const img  = document.getElementById('testi-img');
        const text = document.getElementById('testi-text');
        const dots = document.getElementById('testi-dots');

        data.forEach((_, i) => {
            const d = document.createElement('button');
            d.className = 'testi-dot' + (i === 0 ? ' testi-dot--active' : '');
            d.setAttribute('aria-label', (currentLang === 'fr' ? 'Avis ' : 'Review ') + (i + 1));
            d.addEventListener('click', () => { goTo(i); resetAuto(); });
            dots.appendChild(d);
        });

        function getText(t) {
            if (currentLang === 'en' && t.text_en) return t.text_en;
            return t.text_fr || t.text || '';
        }

        function goTo(index) {
            current = index;
            img.style.opacity  = '0';
            text.style.opacity = '0';

            setTimeout(() => {
                const t = data[index];
                img.src = t.avatar;
                img.alt = (currentLang === 'fr' ? 'Photo de ' : 'Photo of ') + t.name;
                text.innerHTML = getText(t) + ' <em class="testi-author-name">— ' + t.name + '</em>';
                img.style.opacity  = '1';
                text.style.opacity = '1';
                dots.querySelectorAll('.testi-dot').forEach((d, i) => {
                    d.classList.toggle('testi-dot--active', i === index);
                });
            }, 280);
        }

        function next() { goTo((current + 1) % data.length); }

        function resetAuto() {
            clearInterval(autoTimer);
            autoTimer = setInterval(next, 5000);
        }

        goTo(0);
        resetAuto();

        // Mise à jour à chaque changement de langue
        document.addEventListener('langchange', function(e) {
            currentLang = e.detail.lang;
            const t = data[current];
            img.alt = (currentLang === 'fr' ? 'Photo de ' : 'Photo of ') + t.name;
            text.innerHTML = getText(t) + ' <em class="testi-author-name">— ' + t.name + '</em>';
        });
    })
    .catch(err => console.error('testimonials.json :', err));
