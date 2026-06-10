// Page loader — Disney magic stars effect
(function () {
    const BASE = (typeof BASE_PATH !== 'undefined') ? BASE_PATH : '/Envol-Graphisme';

    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.innerHTML = `
    <div class="loader-stars" aria-hidden="true"></div>
    <div class="loader-content">
        <img src="${BASE}/img/ENVOL%20Graphisme%20Logo%20clair.png" alt="Envol Graphisme" class="loader-logo">
        <div class="loader-sparkles" aria-hidden="true">
            <span></span><span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span>
        </div>
        <div class="loader-bar-wrap">
            <div class="loader-bar"></div>
        </div>
    </div>`;
    document.documentElement.style.overflow = 'hidden';
    document.body.appendChild(loader);

    // Generate twinkling star dots in background
    const starsEl = loader.querySelector('.loader-stars');
    for (let i = 0; i < 60; i++) {
        const s = document.createElement('span');
        s.style.cssText = `
            position:absolute;
            left:${Math.random() * 100}%;
            top:${Math.random() * 100}%;
            width:${Math.random() * 3 + 1}px;
            height:${Math.random() * 3 + 1}px;
            border-radius:50%;
            background:#fff;
            opacity:${Math.random() * 0.7 + 0.3};
            animation: loader-twinkle ${Math.random() * 2 + 1}s ease-in-out infinite;
            animation-delay:${Math.random() * 2}s;
        `;
        starsEl.appendChild(s);
    }

    function hideLoader() {
        loader.classList.add('loader-hidden');
        setTimeout(() => {
            loader.remove();
            document.documentElement.style.overflow = '';
        }, 600);
    }

    if (document.readyState === 'complete') {
        setTimeout(hideLoader, 400);
    } else {
        window.addEventListener('load', () => setTimeout(hideLoader, 400));
        // Safety fallback: always hide after 3s max
        setTimeout(hideLoader, 3000);
    }
})();
