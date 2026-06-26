import '../../styles/projectgriditem.css';
import type { ProjectItem } from "../../interfaces/ProjectItem";
import type React from 'react';

interface FunctionProps {
    updaters: {
        setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
        setSelected: React.Dispatch<React.SetStateAction<ProjectItem | null>>;
    }
}

export const ProjectGridItem = ({
    title,
    role,
    points,
    link,
    repoLink,
    imgSrc,
    idx,
    updateFn,
}: ProjectItem & { idx: number } & { updateFn: FunctionProps }) => {

    const handleModal = () => {
        updateFn.updaters.setIsOpen(true);

        const selected: ProjectItem = {
            title: title,
            role: role,
            points: points,
            link: link,
            repoLink: repoLink,
            imgSrc: imgSrc,
        };
        updateFn.updaters.setSelected(selected);
    };

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (link === "") {
            event.preventDefault();
        }
    };

    return (<div 
        key={idx}
        className="p-grid-item-outer"
        style={{ backgroundImage: `url(${imgSrc})` }}
    >
        <div className="p-grid-item-inner">
            <button 
                className="p-grid-desc-opt space-grotesk-text"
                onClick={() => handleModal()}
                >
                Details
            </button>
            <div className="grid-options-cont" style={{ display: 'flex', gap: '0px'}}>
                <a 
                    className="p-grid-options space-grotesk-text" 
                    href={(link === '') ? "#" : link}
                    rel="noopener noreferrer"
                    target="_blank"
                    onClick={handleClick}
                    >
                    {(link === "" ? "No Site" : "To Site")}
                </a>
                <a 
                    className="p-grid-options space-grotesk-text"
                    href={repoLink}
                    rel="noopener noreferrer"
                    target="_blank"    
                    >
                    To Repo
                </a>
            </div>
        </div>
    </div>);
};