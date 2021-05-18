import React from 'react';
import style from './NavBar.module.css';
import aenimaLogo from '../../assets/aenima-logo.png'
import { Link } from 'react-router-dom';

function NavBar() {

    return (
            <div className={style.navBar}>
                <Link to="/">
                    <img src="https://img-premium.flaticon.com/png/512/1813/1813847.png?token=exp=1621225489~hmac=962444646e3c0e3c814ddc38ed1dad02" alt="imgNotFound" className={style.aenimaLogo} />
                </Link>
                <Link to="/" style={{ textDecoration: "none", height: "70px"}}>
                    <h1 className={style.aenimaProducts}>Tech-Store</h1>
                </Link>
            </div>
    )
}

export default NavBar
