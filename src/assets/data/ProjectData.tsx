import { type ProjectItem } from "../../interfaces/ProjectItem";
import BHacksPortal from '../project_pics/BHacksPortal.jpg';
import BHacksSite from '../project_pics/BHacksSite.jpg';

export const ProjectList: ProjectItem[] = [
    {
            title: 'BroncoHacks Portal 2025',
            role: 'Full Stack Developer',
            points: [
                "Developed a team-matching and registration platform used by 250+ participants at Cal Poly Pomona's BroncoHacks 2025.",
                "Utilized React TypeScript, Tailwind CSS to create a responsive UI.",
                "Implemented RESTful API using Flask to manage secure user authentication and CRUD operations, optimizing data persistence with SQLite."
            ],
            link: 'https://www.broncohacksportal.org',
            repoLink: 'https://github.com/BroncoHacks-Website/BroncoHacks-Portal',
            imgSrc: BHacksPortal,
        },
        {
            title: 'BroncoHacks Website 2026',
            role: 'Technical Lead',
            points: [
                "Developed a frontend static website viewed by 250+ participants for Cal Poly Pomona's BroncoHacks 2026.",
                "Led 6-person frontend development team, allowing for a two-week deployment of the MVP.",
                "Conducted code reviews, maintaining high standards of code quality and ensuring detailed design."
            ],
            link: 'https://broncohacks.org/',
            repoLink: 'https://github.com/BroncoHacks-Website/BroncoHacks-Website',
            imgSrc: BHacksSite,
        }
]