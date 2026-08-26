const PROJETS_BASE = (typeof BASE_PATH !== 'undefined') ? BASE_PATH : '/Envol-Graphisme';

let allProjects = [];
let currentProjectIndex = 0;

async function loadProjectsFromJSON() {
    try {
        const response = await fetch(`${PROJETS_BASE}/Data/projects.json`);
        const data = await response.json();
        allProjects = data.projects;
        displayProjects(allProjects);
    } catch (error) {
        console.error('Erreur chargement projects.json :', error);
    }
}

function displayProjects(projects) {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';

    projects.forEach((project, index) => {
        const card = document.createElement('article');
        card.className = 'project-card group cursor-pointer';
        card.setAttribute('role', 'listitem');
        card.setAttribute('aria-label', `Projet : ${project.title}`);
        card.setAttribute('tabindex', '0');

        card.innerHTML = `
            <div class="relative bg-gradient-to-br ${project.bgGradient}
                        rounded-[60px] lg:rounded-[70px] transition-all duration-500
                        hover:scale-105 hover:border-[#CB8D30] border-[10px] ${project.borderColor} shadow-2xl">

                <img src="${PROJETS_BASE}/img/Etoile%20filante%20blanche%20trainée%20jaune.svg"
                     class="absolute ${index % 2 === 0 ? '-top-6 -left-6 rotate-[12.1rad]' : '-top-6 -right-6 rotate-[0.7rad]'} w-20 lg:w-24 z-20 pointer-events-none"
                     aria-hidden="true" loading="lazy">
                <img src="${PROJETS_BASE}/img/Etoile%20filante%20blanche%20trainée%20pointillée%20jaune.svg"
                     class="absolute ${index % 2 === 0 ? '-bottom-7 -right-7 -rotate-[10rad]' : '-bottom-7 -left-7 -rotate-[14.9rad]'} w-20 lg:w-24 z-20 pointer-events-none"
                     aria-hidden="true" loading="lazy">

                <div class="relative w-full h-[30vh] sm:h-[35vh] lg:h-[40vh]
                            flex items-center justify-center overflow-hidden
                            rounded-[50px] lg:rounded-[60px]">
                    <img src="${project.thumbnail}"
                         class="w-full h-full object-cover"
                         alt="${project.title}"
                         loading="lazy">
                    <div class="absolute inset-0 bg-[#5A4531]/70 flex items-center justify-center
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 class="text-2xl lg:text-4xl font-bold text-white uppercase text-center px-4">
                            ${project.title}
                        </h3>
                    </div>
                </div>
            </div>`;

        card.onclick = () => { currentProjectIndex = index; openModal(allProjects[index]); };
        card.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); } };

        grid.appendChild(card);

        // Intersection Observer pour l'animation d'entrée
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        observer.observe(card);
    });
}

function openImageViewer(src, alt) {
    const viewer = document.createElement('div');
    viewer.className = 'fixed inset-0 z-[1500] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out';
    viewer.setAttribute('role', 'dialog');
    viewer.setAttribute('aria-label', 'Agrandissement image');
    viewer.setAttribute('tabindex', '-1');
    viewer.innerHTML = `
        <img src="${src}" alt="${alt || 'Image projet'}"
             class="max-w-full max-h-full rounded-xl shadow-2xl pointer-events-none">
        <button class="absolute top-4 right-4 text-white/60 hover:text-white text-4xl"
                aria-label="Fermer">×</button>`;
    viewer.onclick = (e) => { if (e.target === viewer || e.target.tagName === 'BUTTON') viewer.remove(); };
    viewer.onkeydown = (e) => { if (e.key === 'Escape') viewer.remove(); };
    document.body.appendChild(viewer);
    viewer.focus();
}

function renderModalContent(project) {
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').innerHTML =
        project.description.map(p => `<p class="mb-4">${p}</p>`).join('');

    const imgContainer = document.getElementById('modal-images');
    imgContainer.innerHTML = project.images.map(img => `
        <img src="${img}"
             class="w-full rounded-[30px] lg:rounded-[45px] shadow-xl hover:brightness-105
                    transition-all cursor-zoom-in"
             alt="Image du projet ${project.title}"
             loading="lazy">`
    ).join('');
    imgContainer.querySelectorAll('img').forEach(imgEl => {
        imgEl.addEventListener('click', (e) => {
            e.stopPropagation();
            openImageViewer(imgEl.src, imgEl.alt);
        });
    });
    imgContainer.scrollTop = 0;
}

function openModal(project) {
    const modal = document.getElementById('project-modal');
    const isAlreadyOpen = modal.classList.contains('flex');

    if (isAlreadyOpen) {
        const frame = modal.querySelector('.modal-inner-frame');
        frame.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        frame.style.opacity = '0';
        frame.style.transform = 'scale(0.97)';
        setTimeout(() => {
            renderModalContent(project);
            setupArrows();
            frame.style.opacity = '1';
            frame.style.transform = 'scale(1)';
        }, 200);
    } else {
        renderModalContent(project);
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.classList.add('modal-open');
        document.getElementById('close-modal').focus();
        setupArrows();
    }
}

function closeModal() {
    document.getElementById('project-modal').classList.add('hidden');
    document.getElementById('project-modal').classList.remove('flex');
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
    document.getElementById('project-modal').onclick = (e) => {
        if (!e.target.closest('.modal-inner-frame') &&
            !e.target.closest('#back-arrow') &&
            !e.target.closest('#next-arrow')) {
            closeModal();
        }
    };
});
