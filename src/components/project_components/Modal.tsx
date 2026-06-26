import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import type { ProjectItem } from "../../interfaces/ProjectItem";
import '../../styles/custommodal.css';

interface CustomModalProps {
    data: ProjectItem | null;
}

export const CustomModal = ({
    data,
    toggleVal,
    onModalToggle,
}: CustomModalProps & { toggleVal: boolean } & { onModalToggle: Function }) => {
    if (!data) return null;

    const [projectData, setProjectData] = useState<ProjectItem | null>(data);

    return (<Dialog open={toggleVal} onClose={() => onModalToggle(false)} className="dialog">
        <div className="dialog-cont">
            <DialogPanel className="dialog-panel">
                <DialogTitle className="dialog-title">{projectData?.title}</DialogTitle>
                <Description className="dialog-desc">
                    hi
                </Description>
                <button className="dialog-exit" onClick={() => onModalToggle(false)}>X</button>
            </DialogPanel>
        </div>
    </Dialog>);
};