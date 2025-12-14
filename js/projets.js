let allProjects = [];      // Liste des projets chargés
let currentProjectIndex = 0; // Index du projet affiché dans le modal

// Fonction pour charger les projets depuis le fichier JSON
async function loadProjectsFromJSON() {
    try {
        const response = await fetch('../Data/projects.json');
        if (!response.ok) {
            throw new Error('Erreur lors du chargement des projets');
        }
        const data = await response.json();
        allProjects = data.projects; // On stocke partout les projets
        displayProjects(allProjects);
    } catch (error) {
        console.error('Erreur:', error);
        document.getElementById('projects-grid').innerHTML = `
            <div class="col-span-full text-center text-red-400">
                <p>Erreur lors du chargement des projets. Veuillez réessayer plus tard.</p>
            </div>
        `;
    }
}

// Fonction pour afficher les projets
function displayProjects(projects) {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';

    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card group cursor-pointer';
        projectCard.dataset.projectId = project.id;
        projectCard.style.animationDelay = `${(index + 1) * 0.1}s`;

        projectCard.innerHTML = `
            <div class="relative bg-gradient-to-br ${project.bgGradient} rounded-[70px] shadow-2xl transition-all duration-500 hover:scale-105 hover:border-[#C38D3C] hover:border-[10px] border-4 ${project.borderColor}">
                <img src="../img/Etoile%20filante%20blanche%20trainée%20jaune.svg" 
                     class="absolute ${index % 2 === 0 ? '-top-7 -left-7 rotate-[11.9rad]' : '-top-7 -right-7 rotate-[0.9rad]'} w-20 h-20 z-20" alt="">
                <img src="../img/Etoile%20filante%20blanche%20trainée%20pointillée%20jaune.svg" 
                     class="absolute ${index % 2 === 0 ? '-bottom-10 -right-7 -rotate-[10rad]' : '-bottom-10 -left-7 -rotate-[14.9rad]'} w-20 h-20 z-20" alt="">

                <div class="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
                    <img 
                        src="${project.thumbnail}" 
                        alt="${project.title}" 
                        class="w-full h-full object-cover rounded-[70px] ${project.hasOverlay ? 'opacity-70' : ''}">
                
                    ${project.hasOverlay ? `
                    <div class="absolute rounded-[60px] inset-0 w-full h-full bg-[#5A4531]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 class="text-4xl font-bold text-white">${project.title}</h3>
                    </div>` : ''}
                </div>
            </div>
        `;

        projectCard.addEventListener('click', () => {
            currentProjectIndex = index;
            openModal(projects[index]);
        });

        grid.appendChild(projectCard);
    });
}

// Fonction pour ouvrir le modal
function openModal(project) {

    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImages = document.getElementById('modal-images');

    modalTitle.textContent = project.title;

    modalDescription.innerHTML = project.description
        .map(paragraph => `<p>${paragraph}</p>`)
        .join('');

    modalImages.innerHTML = project.images
        .map(image => `<img src="${image}" alt="${project.title}" class="w-full rounded-2xl shadow-xl hover:scale-105 cursor-pointer">`)
        .join('');

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    setupArrows();
}

// Fonction de navigation entre projets
function setupArrows() {
    const backArrow = document.getElementById('back-arrow');
    const nextArrow = document.getElementById('next-arrow');

    backArrow.onclick = () => {
        currentProjectIndex =
            (currentProjectIndex - 1 + allProjects.length) % allProjects.length;
        openModal(allProjects[currentProjectIndex]);
    };

    nextArrow.onclick = () => {
        currentProjectIndex =
            (currentProjectIndex + 1) % allProjects.length;
        openModal(allProjects[currentProjectIndex]);
    };
}

// Fonction pour fermer le modal
function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

// Événements pour fermer le modal
document.addEventListener('DOMContentLoaded', function() {
    loadProjectsFromJSON();

    const closeButton = document.getElementById('close-modal');
    if (closeButton) closeButton.addEventListener('click', closeModal);

    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) closeModal();
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });
});