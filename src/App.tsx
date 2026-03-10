import './App.css';
import './styles/main_content.css';
import Navbar from './components/navbar';
import { useRef } from 'react';
import Experience from './components/experience';
import Project from './components/project';
import Travel from './components/travel';
import AboutMe from './components/aboutme';
import Footer from './components/footer';

function App() {

  const mainContentSectionRef = useRef<HTMLDivElement>(null);
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const projectSectionRef = useRef<HTMLDivElement>(null);
  const travelSectionRef = useRef<HTMLDivElement>(null);
  const aboutMeSectionRef = useRef<HTMLDivElement>(null);

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
        refs={{ aboutMeSectionRef, experienceSectionRef, projectSectionRef, travelSectionRef  }}/>
      <div ref={mainContentSectionRef} id='main-content'>
        <div id='container'>
          <p className='main-content-text italianno-regular'>Welcome to Caleb's website!</p>
          <button id='see-more' onClick={() => handleNavbarScroll(experienceSectionRef)}>
            <svg width="160px" height='50px' viewBox='0 0 160 50' className='border'>
              <rect x="0" y="0" width="160" height="50" rx="3"/>
            </svg>
            <span>Click to see more!</span>
          </button>
        </div>
      </div>
      <AboutMe ref={aboutMeSectionRef}/>
      <Experience ref={experienceSectionRef}/>
      <Project ref={projectSectionRef}/>
      <Travel ref={travelSectionRef}/>
      <Footer/>
    </>
  )
}

export default App
