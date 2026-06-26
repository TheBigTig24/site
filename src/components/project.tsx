import { forwardRef, useState } from "react";
import '../styles/projects.css';
import { ProjectGridItem } from "./project_components/ProjectGridItem";
import { ProjectList } from "../assets/data/ProjectData";
import { CustomModal } from "./project_components/Modal";
import type { ProjectItem } from "../interfaces/ProjectItem";

const Project = forwardRef<HTMLDivElement>((props, ref) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<ProjectItem | null>(null);

    return(<>
        <div ref={ref} id="projects">
            <p id="title-text" className="space-grotesk-text">PROJECTS</p>
            <div id="project-content">
                <div id="project-items">
                    {ProjectList.map((proj, index) => (
                        <ProjectGridItem 
                            key={index}
                            idx={index}
                            title={proj.title}
                            role={proj.role}
                            points={proj.points}
                            link={proj.link}
                            repoLink={proj.repoLink}
                            imgSrc={proj.imgSrc}
                            updateFn={{ updaters: {setIsOpen, setSelected } }}
                        />
                    ))}
                </div>
            </div>
        </div>
        <CustomModal 
            data={selected}
            toggleVal={isOpen}
            onModalToggle={setIsOpen}
        />
    </>);
});

export default Project;