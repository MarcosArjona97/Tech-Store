import React from 'react';
import style from './AdminProducts.module.css';
import CreateProduct from './createProduct/CreateProduct';
import ProductsList from './productsList/ProductsList';
import {useSelector, useDispatch} from 'react-redux';
import ModifyProduct from './modifyProduct/ModifyProduct';
import {activeForm} from '../../redux/actions';

function AdminProducts() {
    const [form, setForm] = React.useState();
    const formActive = useSelector(state => state.form)
    const dispatch = useDispatch();
    
    function handleClick(e) {
        if(formActive.active){
            dispatch(activeForm(undefined, false));
        }
        setForm(e.target.value);
    }

    return (
        <div className={style.adminProducts}>
            <div className={style.adminProductsSideBar}>
                <button value="crearProducto" onClick={handleClick}>Crear producto</button>
                <button value="modificarProducto" onClick={handleClick}>Modificar/Eliminar producto</button>
            </div>
            <div style={{gridArea: "form", display: "flex"}}>
                {
                    !form ? null : form === "crearProducto" ? (<CreateProduct />) :
                    form === "modificarProducto" && !formActive.active ? (<ProductsList/>) : 
                    formActive.active ? (<ModifyProduct />) : null
                }
            </div>
        </div>
    )
}

export default AdminProducts
