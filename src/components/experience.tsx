import { forwardRef, useState } from 'react';
import '../styles/experience.css';

interface ExpItem {
    company: string;
    title: string;
    duration: string;
    points: string[];
    specialProject: SpecialProject | null;
}

interface SpecialProject {
    title: string;
    points: string[];
}

const Experience = forwardRef<HTMLDivElement>((props, ref) => {

    const [experienceList, setExperienceList] = useState<ExpItem[]>([
        {
            company: "CSU Chancellor's Office",
            title: 'Full-Stack Developer',
            duration: 'June 2025 - Present',
            points: [
                'Delivered critical bug fixes and new features on schedule leveraging Laravel, Blade, jQuery, and MySQL.',
                'Managed database migrations and schema versionings, ensuring data integrity across production deployments.',
                'Accelerated page load times by 30% across key user-facing dashboards by implementing asset minification/concatenation and optimizing complex Laravel Eloquent queries.'
            ],
            specialProject: {
                title: 'Gamification Module',
                points: [
                    'Architected full-stack gamification module, featuring interactive user quiz with the goal of improving user data literacy on the dashboard pages.',
                    'Collaborated directly with stakeholders and design team to translate technical specifications to develop features on time.',
                    'Designed database schemas to track user progress, completion rates, and user high scores, optimizing for fast retrieval and scalability.'
                ]
            }
        }
    ]);

    return (<>
        <div ref={ref} id="experience">
            <div id="title-text">
                <p id="title" className="space-grotesk-text">EXPERIENCE</p>
                <p id="description" className="space-grotesk-text">Looking for an entry level job in Software Engineering or Web Development</p>
            </div>
            <div id="experience-content">
                <div id="downwards-line"></div>
                <div id="experience-items">
                    {experienceList.map((exp, index) => (
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