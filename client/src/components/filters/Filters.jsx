import React from 'react';
import style from './Filters.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {filterProducts} from '../../redux/actions';

function Filters() {
    const dispatch = useDispatch();
    const productos = useSelector(state => state.allProducts)

    function handleChange(e){
        dispatch(filterProducts([...productos], e.target.value))
    }

    return (
        <div className={style.filtersContainer}>
            <select name="" id="" onChange={handleChange}>
                <option value="A-Z">Nombre A-Z</option>
                <option value="Z-A">Nombre Z-A</option>
                <option value="MayorPrecio">Mayor precio</option>
                <option value="MenorPrecio">Menor Precio</option>
            </select>
        </div>
    )
}

export default Filters
