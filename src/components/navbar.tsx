import { useEffect, useState } from 'react';
import '../styles/navbar.css';

interface NavbarProps {
    onScroll: (ref: React.RefObject<HTMLDivElement | null>) => void;
    refs: {
        aboutMeSectionRef: React.RefObject<HTMLDivElement | null>;
        experienceSectionRef: React.RefObject<HTMLDivElement | null>;
        projectSectionRef: React.RefObject<HTMLDivElement | null>;
        travelSectionRef: React.RefObject<HTMLDivElement | null>;
    }
}

const Navbar: React.FC<NavbarProps> = ({ onScroll,  refs }) => {

    const [isScrolled, setIsScrolled] = useState<Boolean>(false);

    useEffect(() => {
        const handleIsScrolled = () => {
            const yThreshold = window.innerHeight * .08;
            if (window.scrollY > yThreshold) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleIsScrolled);
        
        return () => {
            window.removeEventListener('scroll', handleIsScrolled);
        };
    });

    return (<>
        <div className={`navbar ${(isScrolled ? 'scrolled' : '')}`}>
            <p>Caleb Chung</p>
            <div id="tab-list">
                <ul id="unordered_tab_list">
                    <li><button onClick={() => onScroll(refs.aboutMeSectionRef)} className='nav-btn'>ABOUT ME</button></li>
                    <li><button onClick={() => onScroll(refs.experienceSectionRef)} className='nav-btn'>EXPERIENCE</button></li>
                    <li><button onClick={() => onScroll(refs.projectSectionRef)} className='nav-btn'>PROJECTS</button></li>
                    <li><button onClick={() => onScroll(refs.travelSectionRef)} className='nav-btn'>TRAVEL</button></li>
                </ul>
            </div>
        </div>
    </>)
}

export default Navbar;