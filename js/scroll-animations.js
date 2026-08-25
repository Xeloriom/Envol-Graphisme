(function () {
    'use strict';

    // Respecte prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var SELECTORS = [
        'h1:not([data-aos]):not([id="hero-title"])',
        'h2:not([data-aos]):not(.reveal-heading)',
        'h3:not([data-aos])',
        'h4:not([data-aos])',
        'p:not([data-aos]):not(.para-reveal):not(.ftr-legal):not(.ftr-social-title):not(.ftr-link)',
        'article:not([data-aos])',
        'section > div > ul:not([data-aos])',
        '.card:not([data-aos])',
        'figure:not([data-aos])',
        'blockquote:not([data-aos])',
        '.btn-primary:not([data-aos])',
        '.btn-secondary:not([data-aos])',
        '.deco-line',
    ].join(',');

    // Éléments à exclure
    var EXCLUDE = ['FOOTER', 'NAV', 'SCRIPT', 'STYLE', 'HEAD'];
    function isExcluded(el) {
        var node = el;
        while (node && node !== document.body) {
            if (EXCLUDE.indexOf(node.tagName) !== -1) return true;
            if (node.id === 'main-nav' || node.id === 'mobile-menu' || node.id === 'page-loader') return true;
            node = node.parentNode;
        }
        return false;
    }

    function addSR(el, delay, dir) {
        if (el.classList.contains('sr') || isExcluded(el)) return;
        el.classList.add('sr');
        if (dir === 'left')  el.classList.add('sr--left');
        if (dir === 'right') el.classList.add('sr--right');
        if (dir === 'scale') el.classList.add('sr--scale');
        if (delay) el.style.transitionDelay = delay + 'ms';
    }

    function observe(targets) {
        if (!targets.length) return;
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('sr--visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        targets.forEach(function (el) { io.observe(el); });
    }

    function init() {
        var els = document.querySelectorAll(SELECTORS);
        var toObserve = [];

        // Stagger automatique pour les siblings dans un même parent
        var groups = {};
        els.forEach(function (el) {
            if (isExcluded(el)) return;
            var key = (el.parentNode && el.parentNode.dataset && el.parentNode.dataset.stagger) ? el.parentNode : null;
            if (key) {
                var k = el.parentNode;
                if (!groups[k]) groups[k] = [];
                groups[k].push(el);
            }
        });

        els.forEach(function (el, i) {
            if (isExcluded(el)) return;

            // Délai de stagger si siblings proches
            var siblings = el.parentNode ? el.parentNode.querySelectorAll(el.tagName) : [];
            var sibIdx = Array.prototype.indexOf.call(siblings, el);
            var delay = sibIdx > 0 && siblings.length > 1 && siblings.length <= 6
                ? sibIdx * 80
                : 0;

            addSR(el, delay);
            toObserve.push(el);
        });

        // Images dans les sections (pas les éléments décoratifs)
        document.querySelectorAll('section img:not(.parallax-element):not([aria-hidden="true"])').forEach(function(img) {
            if (isExcluded(img)) return;
            addSR(img, 0, 'scale');
            toObserve.push(img);
        });

        observe(toObserve);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        // Légère pause pour laisser les autres scripts s'initialiser
        setTimeout(init, 50);
    }
})();
