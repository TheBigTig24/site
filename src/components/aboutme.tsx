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
        </div>
    </div>
    </>);
});

export default AboutMe;