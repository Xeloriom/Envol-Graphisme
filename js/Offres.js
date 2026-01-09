// 1. CHARGEMENT DES DONNÉES
document.addEventListener('DOMContentLoaded', () => {
    fetch('../Data/offers.json')
        .then(res => res.json())
        .then(data => {
            const mainPacks = document.getElementById('main-packs-container');
            const mainServices = document.getElementById('main-services-container');
            const popPacks = document.getElementById('packs-content');
            const popServices = document.getElementById('services-content');

            // Génération des Packs
            data.packs.forEach(pack => {
                // Côté Page
                mainPacks.innerHTML += `
                        <div class="bg-[#202940] rounded-[40px] p-10 shadow-xl border border-white/5">
                            <h2 class="text-3xl font-bold text-white mb-4"><span class="text-[#CB8D30]">✦</span> ${pack.name}</h2>
                            <p class="text-white/70 text-xl mb-6">${pack.description}</p>
                            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80 text-lg mb-8">
                                ${pack.features.map(f => `<li><span class="text-[#5A7ABC]">✦</span> ${f}</li>`).join('')}
                            </ul>
                            <p class="text-2xl text-white text-center font-light">À partir de <span class="font-bold">${pack.price}€</span></p>
                        </div>`;

                // Côté Popup
                popPacks.appendChild(createPopupItem(pack));
            });

            // Génération des Services
            data.services.forEach(service => {
                // Côté Page
                mainServices.innerHTML += `
                        <div class="flex justify-between items-center text-white border-b border-[#5C78BB]/30 py-4 px-2">
                            <span class="text-xl font-medium"><span class="text-[#CB8D30]">✦</span> ${service.name}</span>
                            <span class="text-lg">À partir de <span class="font-bold">${service.price}€</span></span>
                        </div>`;

                // Côté Popup
                popServices.appendChild(createPopupItem(service));
            });
        });
});

// 2. LOGIQUE DU SIMULATEUR
function createPopupItem(item) {
    const div = document.createElement('div');
    // Style de la ligne : flex, espacement propre, et hover
    div.className = 'service-item group flex justify-between items-center p-2 lg:p-3 rounded-xl transition-all hover:bg-[#B5C0DD]/50';

    div.onclick = function() {
        const cb = this.querySelector('input');
        cb.checked = !cb.checked;
        // Effet visuel quand sélectionné
        if(cb.checked) {
            this.classList.add('bg-[#B5C0DD]');
        } else {
            this.classList.remove('bg-[#B5C0DD]');
        }
        updateTotal();
    };

    div.innerHTML = `
        <div class="flex items-center gap-3">
            <input type="checkbox" value="${item.price}" data-name="${item.name}" class="hidden">
            <span class="text-[#1D2743] text-sm lg:text-base font-medium">${item.name}</span>
        </div>
        <div class="text-[#1D2743] text-sm lg:text-base">
            <span class="opacity-60 text-xs">À partir de</span> 
            <span class="font-bold">${item.price}€</span>
        </div>
    `;
    return div;
}

// Pour l'affichage dans le bloc noir (updateTotal)
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

    if(checkboxes.length === 0) {
        selectedContainer.innerHTML = '<p class="text-white/40 text-center py-4 text-sm italic">Aucun service sélectionné</p>';
    }

    document.getElementById('totalPrice').textContent = total + '€';
}

// 3. ACTIONS UI
function openPopup() {
    document.getElementById('popup').classList.remove('hidden');
    document.getElementById('popup').classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    document.getElementById('popup').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function toggleSection(id) {
    const content = document.getElementById(id + '-content');
    const arrow = document.getElementById(id + '-arrow');
    content.classList.toggle('hidden');
    arrow.textContent = content.classList.contains('hidden') ? '▶' : '▼';
}

function sendContact() {
    const total = document.getElementById('totalPrice').textContent;
    if(total === '0€') return alert('Veuillez choisir au moins une option.');
    alert('Simulation terminée (Total: ' + total + '). Redirection vers le contact...');
}