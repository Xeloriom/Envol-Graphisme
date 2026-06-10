const OFFRES_BASE = (typeof BASE_PATH !== 'undefined') ? BASE_PATH : '/Envol-Graphisme';

// 1. CHARGEMENT DES DONNÉES
document.addEventListener('DOMContentLoaded', () => {
    fetch(`${OFFRES_BASE}/Data/offers.json`)
        .then(res => res.json())
        .then(data => {
            const mainPacks    = document.getElementById('main-packs-container');
            const mainServices = document.getElementById('main-services-container');
            const popPacks     = document.getElementById('packs-content');
            const popServices  = document.getElementById('services-content');

            data.packs.forEach((pack, i) => {
                mainPacks.innerHTML += `
                <article class="bg-[#202940] rounded-[40px] p-8 lg:p-10 shadow-xl border border-white/5"
                         data-aos="fade-up" data-aos-delay="${i * 100}">
                    <h2 class="text-[clamp(1.2rem,3vw,2rem)] font-bold text-white mb-4">
                        <span class="text-[#CB8D30]">✦</span> ${pack.name}
                    </h2>
                    <p class="text-white/70 text-lg mb-6">${pack.description}</p>
                    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/80 text-base mb-8">
                        ${pack.features.map(f => `<li class="flex items-start gap-2"><span class="text-[#5A7ABC] flex-shrink-0 mt-0.5">✦</span><span>${f}</span></li>`).join('')}
                    </ul>
                    <p class="text-xl text-white text-center font-light">
                        À partir de <span class="font-bold text-[#CB8D30]">${pack.price}€</span>
                    </p>
                </article>`;
                popPacks.appendChild(createPopupItem(pack));
            });

            data.services.forEach((service, i) => {
                mainServices.innerHTML += `
                <div class="flex flex-wrap justify-between items-center text-white
                            border-b border-[#5C78BB]/30 py-4 px-2 gap-2">
                    <span class="text-base font-medium">
                        <span class="text-[#CB8D30]">✦</span> ${service.name}
                    </span>
                    <span class="text-base">
                        À partir de <span class="font-bold">${service.price}€</span>
                    </span>
                </div>`;
                popServices.appendChild(createPopupItem(service));
            });
        })
        .catch(err => console.error('Erreur chargement offers.json :', err));
});

// 2. LOGIQUE SIMULATEUR
function createPopupItem(item) {
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
            <input type="checkbox" value="${item.price}" data-name="${item.name}" class="hidden"
                   aria-label="${item.name} - ${item.price}€">
            <span class="text-[#1D2743] text-sm lg:text-base font-medium">${item.name}</span>
        </div>
        <div class="text-[#1D2743] text-sm lg:text-base">
            <span class="opacity-60 text-xs">À partir de</span>
            <span class="font-bold"> ${item.price}€</span>
        </div>`;
    return div;
}

function updateTotal() {
    const selectedContainer = document.getElementById('selectedItems');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
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
        selectedContainer.innerHTML = '<p class="text-white/40 text-center py-4 text-sm italic">Aucun service sélectionné</p>';
    }
    document.getElementById('totalPrice').textContent = total + '€';
}

// 3. UI ACTIONS
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
    if (total === '0€') {
        alert('Veuillez choisir au moins une option.');
        return;
    }
    window.location.href = `${OFFRES_BASE}/View/Contact.html`;
}
