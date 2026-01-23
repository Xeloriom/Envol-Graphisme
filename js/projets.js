let allProjects = [];
let currentProjectIndex = 0;

async function loadProjectsFromJSON() {
    try {
        const response = await fetch('../Data/projects.json');
        const data = await response.json();
        allProjects = data.projects;
        displayProjects(allProjects);
    } catch (error) { console.error(error); }
}

function displayProjects(projects) {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card group cursor-pointer';
        // RETOUR DES ÉTOILES FILANTES ET DU HOVER ORIGINAL
        card.innerHTML = `
            <div class="relative bg-gradient-to-br ${project.bgGradient} rounded-[60px] lg:rounded-[70px] transition-all duration-500 hover:scale-105 hover:border-[#C38D3C] hover:border-[10px] border-4 ${project.borderColor} shadow-2xl">
                <img src="../img/Etoile%20filante%20blanche%20trainée%20jaune.svg" class="absolute ${index % 2 === 0 ? '-top-6 -left-6 rotate-[12.1rad]' : '-top-6 -right-6 rotate-[0.7rad]'} w-20 lg:w-24 z-20">
                <img src="../img/Etoile%20filante%20blanche%20trainée%20pointillée%20jaune.svg" class="absolute ${index % 2 === 0 ? '-bottom-7 -right-7 -rotate-[10rad]' : '-bottom-7 -left-7 -rotate-[14.9rad]'} w-20 lg:w-24 z-20">
                
                <div class="relative w-full h-[35vh] lg:h-[45vh] flex items-center justify-center overflow-hidden rounded-[50px] lg:rounded-[60px]">
                    <img src="${project.thumbnail}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-[#5A4531]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 class="text-3xl lg:text-4xl font-bold text-white uppercase text-center px-4">${project.title}</h3>
                    </div>
                </div>
            </div>`;
        card.onclick = () => { currentProjectIndex = index; openModal(allProjects[index]); };
        grid.appendChild(card);
    });
}

// FONCTION POUR VOIR EN GRAND (AJOUTÉE)
function openImageViewer(src) {
    const viewer = document.createElement('div');
    viewer.className = 'fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out';
    viewer.innerHTML = `<img src="${src}" class="max-w-full max-h-full rounded-xl shadow-2xl transition-all scale-95 animate-in zoom-in duration-300">`;
    viewer.onclick = () => viewer.remove();
    document.body.appendChild(viewer);
}

function openModal(project) {
    const modal = document.getElementById('project-modal');
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').innerHTML = project.description.map(p => `<p class="mb-4">${p}</p>`).join('');

    const imgContainer = document.getElementById('modal-images');
    // AJOUT DU ONCLICK SUR CHAQUE IMAGE
    imgContainer.innerHTML = project.images.map(img => `
        <img src="${img}" class="w-full rounded-[30px] lg:rounded-[45px] shadow-xl hover:brightness-105 transition-all cursor-zoom-in" onclick="openImageViewer('${img}')">
    `).join('');

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('modal-open');
    imgContainer.scrollTop = 0;
    setupArrows();
}

function closeModal() {
    document.getElementById('project-modal').classList.add('hidden');
    document.body.classList.remove('modal-open');
}

function setupArrows() {
    document.getElementById('back-arrow').onclick = (e) => {
        e.stopPropagation();
        currentProjectIndex = (currentProjectIndex - 1 + allProjects.length) % allProjects.length;
        openModal(allProjects[currentProjectIndex]);
    };
    document.getElementById('next-arrow').onclick = (e) => {
        e.stopPropagation();
        currentProjectIndex = (currentProjectIndex + 1) % allProjects.length;
        openModal(allProjects[currentProjectIndex]);
    };
}

document.addEventListener('DOMContentLoaded', () => {
    loadProjectsFromJSON();
    document.getElementById('close-modal').onclick = closeModal;
    document.getElementById('project-modal').onclick = (e) => { if(e.target.id === 'project-modal') closeModal(); };
});