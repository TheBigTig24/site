import { forwardRef, useState } from 'react';
import '../styles/aboutme.css';
import Face from '../assets/myface.JPG';

interface SocialItem {
    name: string;
    username: string;
    img: string;
    link: string;
}

const AboutMe = forwardRef<HTMLDivElement>((props, ref) => {

    const [socials, setSocials] = useState<SocialItem[]>([
        {
            name: 'Gmail', username: 'kaichun24@gmail.com', img: 'fas fa-envelope', link: 'mailto:kaichun24@gmail.com'
        },
        {
            name: 'LinkedIn', username: 'Caleb Chung', img: 'fab fa-linkedin-in', link: 'https://www.linkedin.com/in/calebkchung/'
        },
        {
            name: 'GitHub', username: 'TheBigTig24', img: 'fab fa-github', link: 'https://github.com/TheBigTig24'
        }
    ])

    return(<>
    <div ref={ref} id='about-me'>
        <p id='title-text' className='space-grotesk-text'>ABOUT ME</p>
        <div id='container'>
            <div id='my_img'>
                <img src={Face}></img>
            </div>
            <div id='socials-container'>
                {socials.map((item, index) => (
                    <div key={index} className='social-item space-grotesk-text'>
                        <a href={item.link} target='_blank' rel='noopener noreferrer'><i className={item.img}></i>{item.username}</a>
                    </div>
                ))}
            </div>
            <div className='vertical-line'></div>
            <div id='description'>
                <p>From a young age, I've always enjoyed learning and solving logic problems. After dipping my feet into computer science and programming in senior year of high school, I aimed to pursue a career in software development.
                    In university, I gained an interest in web development, in which I hope to find an entry level job as well as continue to hone my abilities in personal projects. In my free time, I most enjoy spending time with my loved ones,
                    doing things from eating out to playing games to golfing at the range!
                </p>
            </div>
        </div>
    </div>
    </>);
});

export default AboutMe;