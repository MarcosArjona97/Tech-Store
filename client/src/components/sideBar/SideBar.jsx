import React from 'react';
import style from './SideBar.module.css';
import SearchBar from '../searchBar/SearchBar';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions';
import Filters from '../filters/Filters'
import { Link } from 'react-router-dom';

function SideBar() {

    const dispatch = useDispatch();

    function handleClick() {
        dispatch(getProducts())
    }

    return (
        <div className={style.sideBar}>
                <button onClick={handleClick} className={style.allBtn}>Todos los productos</button>
                <SearchBar />
                <Filters />
                <Link to ="/product/admin">
                    <button className={style.allBtn}>Administrar productos</button>
                </Link>
        </div>
    )
}

export default SideBar;
