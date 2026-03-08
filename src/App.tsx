import './App.css';
import './styles/main_content.css';
import Navbar from './components/navbar';
import { useRef } from 'react';
import Experience from './components/experience';
import Project from './components/project';
import Travel from './components/travel';

function App() {

  const mainContentSectionRef = useRef<HTMLDivElement>(null);
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const projectSectionRef = useRef<HTMLDivElement>(null);
  const travelSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  const handleNavbarScroll = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <Navbar 
        onScroll={handleNavbarScroll} 
        refs={{ experienceSectionRef, projectSectionRef, travelSectionRef, contactSectionRef }}/>
      <div ref={mainContentSectionRef} id='main-content'>
        <div id='container'>
          <p className='italianno-regular'>Welcome to Caleb's website!</p>
          <button id='see-more' onClick={() => handleNavbarScroll(experienceSectionRef)}>Click to see more!</button>
        </div>
      </div>
      <Experience ref={experienceSectionRef}/>
      <Project ref={projectSectionRef}/>
      <Travel ref={travelSectionRef}/>
    </>
  )
}

export default App
