import React from 'react';
import style from './Footer.module.css';
import GitHubIcon from '../../assets/github-blue.png';
import LinkedinIcon from '../../assets/linkedin.png';

function Footer() {
    return (
        <div className={style.footerContainer} id="footer">
            {/* <a href="https://www.linkedin.com/in/marcos-ezequiel-arjona/" > */}
            <div>
                <a href="https://www.linkedin.com/in/marcos-ezequiel-arjona/" >
                    <i class="icono fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/MarcosArjona97" >
                    <i class="icono fab fa-github"></i>
                </a>
            </div>
            {/* </a> */}
            {/* <a href="https://github.com/MarcosArjona97" > */}
            {/* </a> */}
            <p>2021 | MARCOS ARJONA | FULL-STACK WEB DEVELOPER</p>
        </div>
    )
}

export default Footer
