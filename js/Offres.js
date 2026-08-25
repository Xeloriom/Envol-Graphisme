const OFFRES_BASE = (typeof BASE_PATH !== 'undefined') ? BASE_PATH : '/Envol-Graphisme';

function getCurrentLang() {
    return (typeof localStorage !== 'undefined' && localStorage.getItem('envol-lang')) || 'fr';
}

let offresData = null;

function renderOffres(data, lang) {
    const mainPacks    = document.getElementById('main-packs-container');
    const mainServices = document.getElementById('main-services-container');
    const popPacks     = document.getElementById('packs-content');
    const popServices  = document.getElementById('services-content');
    const isEn = lang === 'en';
    const fromLabel = isEn ? 'Starting from' : 'À partir de';

    if (mainPacks) mainPacks.innerHTML = '';
    if (mainServices) mainServices.innerHTML = '';
    if (popPacks) popPacks.innerHTML = '';
    if (popServices) popServices.innerHTML = '';

    data.packs.forEach((pack, i) => {
        const name     = (isEn && pack.name_en)        ? pack.name_en        : pack.name;
        const desc     = (isEn && pack.description_en) ? pack.description_en : pack.description;
        const features = (isEn && pack.features_en)    ? pack.features_en    : pack.features;

        if (mainPacks) {
            mainPacks.innerHTML += `
            <article class="bg-[#202940] rounded-[40px] p-8 lg:p-12 shadow-xl border border-white/5"
                     data-aos="fade-up" data-aos-delay="${i * 100}">
                <h2 class="text-[clamp(1.4rem,3.5vw,2.2rem)] font-bold text-white mb-5">
                    <span class="text-[#CB8D30]">✦</span> ${name}
                </h2>
                <p class="text-white/70 text-xl mb-7">${desc}</p>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/85 text-lg mb-9">
                    ${features.map(f => `<li class="flex items-start gap-2"><span class="text-[#5A7ABC] flex-shrink-0 mt-0.5">✦</span><span>${f}</span></li>`).join('')}
                </ul>
                <p class="text-2xl text-white text-center font-light">
                    ${fromLabel} <span class="font-bold text-[#CB8D30]">${pack.price}€</span>
                </p>
            </article>`;
        }
        if (popPacks) popPacks.appendChild(createPopupItem(pack, lang));
    });

    data.services.forEach((service) => {
        const name = (isEn && service.name_en) ? service.name_en : service.name;

        if (mainServices) {
            mainServices.innerHTML += `
            <div class="flex flex-wrap justify-between items-center text-white
                        border-b border-[#5C78BB]/20 py-3 px-2 gap-2">
                <span class="text-base sm:text-lg font-medium flex items-center gap-2">
                    <span class="text-[#CB8D30] text-lg leading-none">✦</span>
                    ${name}
                </span>
                <span class="text-base sm:text-lg">
                    ${fromLabel} <span class="font-bold">${service.price}€</span>
                </span>
            </div>`;
        }
        if (popServices) popServices.appendChild(createPopupItem(service, lang));
    });
}

function createPopupItem(item, lang) {
    const isEn = lang === 'en';
    const name = (isEn && item.name_en) ? item.name_en : item.name;
    const fromLabel = isEn ? 'From' : 'À partir de';

    const div = document.createElement('div');
    div.className = 'service-item group flex justify-between items-center p-2 lg:p-3 rounded-xl transition-all hover:bg-[#B5C0DD]/50';
    div.setAttribute('role', 'button');
    div.setAttribute('tabindex', '0');
    div.setAttribute('aria-pressed', 'false');

    div.onclick = function () {
        const cb = this.querySelector('input');
        cb.checked = !cb.checked;
        this.setAttribute('aria-pressed', cb.checked);
        this.classList.toggle('bg-[#B5C0DD]', cb.checked);
        updateTotal();
    };
    div.onkeydown = function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.click(); }
    };

    div.innerHTML = `
        <div class="flex items-center gap-3">
            <input type="checkbox" value="${item.price}" data-name="${name}" class="hidden"
                   aria-label="${name} - ${item.price}€">
            <span class="text-[#1D2743] text-sm lg:text-base font-medium">${name}</span>
        </div>
        <div class="text-[#1D2743] text-sm lg:text-base">
            <span class="opacity-60 text-xs">${fromLabel}</span>
            <span class="font-bold"> ${item.price}€</span>
        </div>`;
    return div;
}

function updateTotal() {
    const selectedContainer = document.getElementById('selectedItems');
    if (!selectedContainer) return;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const lang = getCurrentLang();
    const emptyLabel = lang === 'en' ? 'No service selected' : 'Aucun service sélectionné';
    let total = 0;

    selectedContainer.innerHTML = '';
    checkboxes.forEach(cb => {
        total += parseInt(cb.value);
        selectedContainer.innerHTML += `
            <div class="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                <div class="flex items-center gap-2">
                    <span class="text-[#CB8D30]">✦</span>
                    <span class="font-light">${cb.dataset.name}</span>
                </div>
                <span class="font-bold">${cb.value}€</span>
            </div>`;
    });

    if (!checkboxes.length) {
        selectedContainer.innerHTML = `<p class="text-white/40 text-center py-4 text-sm italic">${emptyLabel}</p>`;
    }
    document.getElementById('totalPrice').textContent = total + '€';
}

function openPopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden');
    popup.classList.add('flex');
    document.body.style.overflow = 'hidden';
    popup.querySelector('button').focus();
}

function closePopup() {
    document.getElementById('popup').classList.add('hidden');
    document.getElementById('popup').classList.remove('flex');
    document.body.style.overflow = '';
}

function toggleSection(id) {
    const content = document.getElementById(id + '-content');
    const arrow   = document.getElementById(id + '-arrow');
    content.classList.toggle('hidden');
    arrow.textContent = content.classList.contains('hidden') ? '▶' : '▼';
}

function sendContact() {
    const total = document.getElementById('totalPrice').textContent;
    const lang = getCurrentLang();
    if (total === '0€') {
        alert(lang === 'en' ? 'Please choose at least one option.' : 'Veuillez choisir au moins une option.');
        return;
    }
    window.location.href = `${OFFRES_BASE}/View/Contact.html`;
}

// Chargement initial
document.addEventListener('DOMContentLoaded', () => {
    fetch(`${OFFRES_BASE}/Data/offers.json`)
        .then(res => res.json())
        .then(data => {
            offresData = data;
            renderOffres(data, getCurrentLang());
        })
        .catch(err => console.error('Erreur chargement offers.json :', err));
});

// Re-render quand la langue change — préserve les cases cochées
document.addEventListener('langchange', function(e) {
    if (!offresData) return;
    // Mémorise les prix cochés avant de re-rendre
    const checked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(cb => cb.value);
    renderOffres(offresData, e.detail.lang);
    // Restaure les cases cochées
    if (checked.length) {
        document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            if (checked.includes(cb.value)) {
                cb.checked = true;
                cb.closest('.service-item')?.setAttribute('aria-pressed', 'true');
                cb.closest('.service-item')?.classList.add('bg-[#B5C0DD]');
            }
        });
        updateTotal();
    }
});
