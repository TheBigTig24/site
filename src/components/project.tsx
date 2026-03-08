import { forwardRef, useState } from "react";
import '../styles/projects.css';

interface ProjectItem {
    title: string;
    role: string;
    points: string[];
}

const Project = forwardRef<HTMLDivElement>((props, ref) => {

    const [projectList, setProjectList] = useState<ProjectItem[]>([
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
    ]);

    return(<>
        <div ref={ref} id="projects">
            <p id="title-text" className="space-grotesk-text">PROJECTS</p>
            <div id="project-content">
                <div id="project-items">
                    {projectList.map((proj, index) => (
                        <div key={index} className="proj-item">
                            <p className="proj-title space-grotesk-text"><strong>{proj.title}</strong></p>
                            <p className="proj-role space-grotesk-text"><i>{proj.role}</i></p>
                            <ul className="points">
                                {proj.points.map((pt, index) => (
                                    <li key={index} className="pts space-grotesk-text">{pt}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>);
});

export default Project;