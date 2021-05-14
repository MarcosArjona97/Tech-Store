import React from 'react';
import style from './NavBar.module.css';
import aenimaLogo from '../../assets/aenima-logo.png'
import { Link } from 'react-router-dom';

function NavBar() {

    return (
            <div className={style.navBar}>
                <Link to="/">
                    <img src={aenimaLogo} alt="imgNotFound" className={style.aenimaLogo} />
                </Link>
                <Link to="/" style={{ textDecoration: "none", height: "70px", paddingBottom: "30px"}}>
                    <h1 className={style.aenimaProducts}>Aenima Products</h1>
                </Link>
            </div>
    )
}

export default NavBar
