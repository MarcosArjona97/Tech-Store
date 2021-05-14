import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import {activeForm} from '../../../redux/actions';
import style from './ModifyProduct.module.css';

function ModifyProduct() {
    const form = useSelector(state => state.form)
    const products = useSelector(state => state.allProducts)
    const [producto, setProducto] = React.useState();
    const dispatch = useDispatch();

    React.useEffect(() => {
        let product = products.find(i => parseInt(i.id) === parseInt(form.id))
        setProducto(product);
    }, [products, form.id])

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3001/product/" + producto.id, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(producto),
          }).then(() => {
              Swal.fire({
                  title: "Producto modificado correctamente",
                  icon: "success",
                  timer: 3000
              })
            .then(() => {
                dispatch(activeForm(undefined, false))
            })
          })
        
    }

    function handleChange(e){
        let {name, value} = e.target;
        setProducto({
            ...producto,
            [name]: value
        })
    }


    if (!producto) {
        return (
            <h1>Loading...</h1>
        )
    }
    if (form.active === false) {
        return null;
    }

    return (
        <div className={style.modifyContainer}>
            <form 
            onSubmit={handleSubmit}
            >
                <label htmlFor="name">Nombre</label>
                <input type="text" placeholder="Nombre" id="name" name="name" required defaultValue={producto.name} onChange={handleChange}/>
                <label htmlFor="description">Descripción</label>
                <textarea type="text" placeholder="Descripcion" id="description" name="description" required defaultValue={producto.description} onChange={handleChange}/>
                <label htmlFor="price">Precio</label>
                <input type="number" placeholder="Precio" id="price" name="price" required defaultValue={producto.price} onChange={handleChange}/>
                <label htmlFor="image">Imagen (URL)</label>
                <input type="url" required id="image" name="image" defaultValue={producto.image} onChange={handleChange}/>
                <button type="submit">Modificar producto</button>
            </form>
        </div>
    )
}

export default ModifyProduct;
