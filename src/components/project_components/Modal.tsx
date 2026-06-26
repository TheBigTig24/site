import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
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

    return (<Dialog open={toggleVal} onClose={() => onModalToggle(false)} className="dialog">
        <div className="dialog-cont space-grotesk-text">
            <DialogPanel className="dialog-panel">
                <DialogTitle className="dialog-title">{data.title}</DialogTitle>
                <DialogTitle className="dialog-role">{data.role}</DialogTitle>
                <Description className="dialog-desc">
                    <ul>
                        {data.points.map((el) => (
                            <li key={el}>{el}</li>
                        ))}
                    </ul>
                </Description>
                <button className="dialog-exit" onClick={() => onModalToggle(false)}>X</button>
            </DialogPanel>
        </div>
    </Dialog>);
};