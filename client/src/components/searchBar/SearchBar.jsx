import React, {useState} from 'react';
import style from './SearchBar.module.css';
import {useDispatch} from 'react-redux';
import {searchProducts} from '../../redux/actions';

function SearchBar() {

    const [product, setProduct] = useState();
    const dispatch = useDispatch();

    function handleChange(e){
        setProduct(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(searchProducts(product));
        setProduct("")
    }


    return (
            <div className={style.searchBar}>
                <form onSubmit={e => handleSubmit(e)}>
                    <input type="text" placeholder="Buscar..." onChange={e => handleChange(e)} value={product} required/>
                    <button type="submit" >Buscar</button>
                </form>
            </div>
    )
}

export default SearchBar
