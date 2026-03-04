const experienceList = [
    {
        company: "CSU Chancellor's Office",
        title: 'Full-Stack Developer',
        duration: 'June 2025 - Present',
        points: [
            'Delivered critical bug fixes and new features on schedule leveraging Laravel, Blade, jQuery, and MySQL.',
            'Managed database migrations and schema versionings, ensuring data integrity across production deployments.',
            'Accelerated page load times by 30% across key user-facing dashboards by implementing asset minification/concatenation and optimizing complex Laravel Eloquent queries.'
        ],
        specialProject: {
            title: 'Gamification Module',
            points: [
                'Architected full-stack gamification module, featuring interactive user quiz with the goal of improving user data literacy on the dashboard pages.',
                'Collaborated directly with stakeholders and design team to translate technical specifications to develop features on time.',
                'Designed database schemas to track user progress, completion rates, and user high scores, optimizing for fast retrieval and scalability.'
            ]
        }
    }
];

const projectList = [
    {
        title: 'BroncoHacks Portal 2025',
        role: 'Full Stack Developer',
        points: [
            "Developed a team-matching and registration platform used by 700+ participants at Cal Poly Pomona's BroncoHacks 2025.",
            "Utilized React TypeScript, Tailwind CSS to create a responsive UI.",
            "Implemented RESTful API using Flask to manage secure user authentication and CRUD operations, optimizing data persistence with SQLite."
        ]
    },
    {
        title: 'BroncoHacks Website 2026',
        role: 'Technical Lead',
        points: [
            "Developed a frontend static website viewed by 1000+ participants for Cal Poly Pomona's BroncoHacks 2026.",
            "Led 6-person frontend development team, allowing for a two-week deployment of the MVP.",
            "Conducted code reviews, maintaining high standards of code quality and ensuring detailed design."
        ]
    }
];

const socialsList = [
    {
        name: 'Github',
        logo: '',
    },
    {
        name: 'LinkedIn',
        logo: '',
    },
    {
        name: 'Instagram',
        logo: '',
    }
]

document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function() {
        const nav = document.querySelector('#navbar');

        if (window.scrollY > 80) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    initExperiences();
    initProjects();
});

function initExperiences() {
    const targetDiv = document.querySelector("#experience-items");

    const htmlContent = experienceList.map(exp => `
        <div class="exp-item">
            <div class="exp-item-inner">
                <p class="company space-grotesk-text">${exp.company}</p>
                <p class="title space-grotesk-text"><i>${exp.title} / ${exp.duration}</i></p>
                <ul class="points">
                    ${exp.points.map(pt => `
                        <li class="pts space-grotesk-text">${pt}</li>    
                    `).join("")}
                </ul>
                ${exp.specialProject != null ? `
                    <p class="title space-grotesk-text">Key Project: <strong>${exp.specialProject.title}</strong></p>
                    <ul class="points">
                        ${exp.specialProject.points.map(pt => `
                            <li class="pts space-grotesk-text">${pt}</li>
                        `).join("")}
                    </ul>
                ` : ``}
            </div>
        </div>
    `).join('');

    targetDiv.innerHTML = htmlContent;
}

function initProjects() {
    const targetDiv = document.querySelector("#project-items");

    const htmlContent = projectList.map(prj => `
        <div class="proj-item">
            <p class="proj-title space-grotesk-text"><strong>${prj.title}</strong></p>
            <p class="proj-role space-grotesk-text"><i>${prj.role}</i></p>
            <ul class="points">
                ${prj.points.map(pt => `
                    <li class="pts space-grotesk-text">${pt}</li>
                `).join('')}
            </ul>
        </div>
    `).join('');

    targetDiv.innerHTML = htmlContent;
}

function seeMoreScroll() {
    const targetDiv = document.getElementById('experience');

    targetDiv.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}