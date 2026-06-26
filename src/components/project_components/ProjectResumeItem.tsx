import { type ProjectItem } from "../../interfaces/ProjectItem";

export const ProjectResumeItem = ({ title, role, points, link, repoLink, idx }: ProjectItem & { idx: number }) => {

    return(<div key={idx} className="proj-item">
        <p className="proj-title space-grotesk-text"><strong>{title}</strong></p>
        <p className="proj-role space-grotesk-text">
            <i>{role}</i> | Link to Site 
            <a href={link} target="_blank" rel="noopener noreferrer">
                <i className="proj-role-i fas fa-external-link"></i>
            </a> | Link to Repo
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
                <i className="proj-role-i fas fa-external-link"></i>
            </a>
        </p>
        <ul className="points">
            {points.map((pt, index) => (
                <li key={index} className="pts space-grotesk-text">{pt}</li>
            ))}
        </ul>
    </div>);
};