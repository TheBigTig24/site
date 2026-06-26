import { forwardRef, useState } from 'react';
import '../styles/experience.css';
import { ExpData } from '../assets/data/ExpData';

const Experience = forwardRef<HTMLDivElement>((props, ref) => {

    return (<>
        <div ref={ref} id="experience">
            <div id="title-text">
                <p id="title" className="space-grotesk-text">EXPERIENCE</p>
                <p id="description" className="space-grotesk-text">Looking for an entry level job in Software Engineering or Web Development</p>
            </div>
            <div id="experience-content">
                <div id="downwards-line"></div>
                <div id="experience-items">
                    {ExpData.map((exp, index) => (
                        <div key={index} className='exp-item'>
                            <div className='exp-item-inner'>
                                <p className='company space-grotesk-text'>{exp.company}</p>
                                <p className='title space-grotest-text'><i>{exp.title} / {exp.duration}</i></p>
                                <ul className='points'>
                                    {exp.points.map((pt, index) => (
                                        <li key={index} className='pts space-grotesk-text'>{pt}</li>
                                    ))}
                                </ul>
                                {exp?.specialProject && (<>
                                    <p className='title space-grotesk-text'>Key Project: <strong>{exp.specialProject?.title}</strong></p> 
                                    <ul className='points'>
                                        {exp?.specialProject?.points.map((pt, index) => (
                                            <li key={index} className='pts space-grotesk-text'>{pt}</li>
                                        ))}
                                    </ul>
                                </>)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>);
});

export default Experience;