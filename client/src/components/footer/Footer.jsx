import React from 'react';
import style from './Footer.module.css';
import GitHubIcon from '../../assets/github-blue.png';
import LinkedinIcon from '../../assets/linkedin.png';

function Footer() {
    return (
        <div className={style.footerContainer}>
            <a href="https://www.linkedin.com/in/marcos-ezequiel-arjona/" >
                <img src={LinkedinIcon} alt="Linkedin Icon" className={style.linkedin} />
                    LINKEDIN
                </a>
            <a href="https://github.com/MarcosArjona97" >
                <img src={GitHubIcon} alt="GitHub Icon" className={style.github} />
                    GITHUB
            </a>
            <p>2021 | MARCOS ARJONA | FULL-STACK WEB DEVELOPER</p>
        </div>
    )
}

export default Footer
