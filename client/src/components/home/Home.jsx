import React from 'react';
import Products from '../products/Products';
import style from './Home.module.css';
import Footer from '../footer/Footer';
import SideBar from '../sideBar/SideBar';


function Home() {

    return (
        <div className={style.home}>
            <SideBar />
            <Products />
        </div>
    )
}

export default Home
