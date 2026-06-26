import '../../styles/projectgriditem.css';
import type { ProjectItem } from "../../interfaces/ProjectItem";

interface FunctionProps {
    updaters: {
        setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
        setSelected: React.Dispatch<React.SetStateAction<ProjectItem | null>>;
    }
}

export const ProjectGridItem = ({
    link,
    repoLink,
    imgSrc,
    idx,
    updaters,
}: ProjectItem & { idx: number } & { updaters: FunctionProps }) => {


    return (<div 
        key={idx}
        className="p-grid-item-outer"
        style={{ backgroundImage: `url(${imgSrc})` }}
    >
        <div className="p-grid-item-inner">
            <button 
                className="p-grid-desc-opt space-grotesk-text"
                onClick={() => updaters.set(true)}
                >
                Details
            </button>
            <div className="grid-options-cont" style={{ display: 'flex', gap: '0px'}}>
                <a 
                    className="p-grid-options space-grotesk-text" 
                    href={link}
                    rel="noopener noreferrer"
                    target="_blank"
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