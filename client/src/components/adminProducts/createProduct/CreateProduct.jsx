import React from 'react';
import style from './CreateProduct.module.css';
import Swal from 'sweetalert2';

function CreateProduct() {

    const [product, setProduct] = React.useState({
        name: "",
        description: "",
        price: "",
        image: ""
    });

    function handleChange(e) {
        setProduct({
            ...product, [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        let res = await fetch("http://localhost:3001/product/create", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(product)
        }).then(respuesta => { return respuesta })
        if (res.error) {
            Swal.fire('El producto no pudo ser creado', 'Compruebe los campos e intente nuevamente', 'error');
        } else {
            Swal.fire('El producto fue creado correctamente', '', 'success');
            setProduct({ name: "", description: "", price: "", image: "" });
        }
    }

    return (
        <div className={style.createProduct}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre</label>
                <input type="text" placeholder="Nombre" id="name" name="name" required value={product.name} onChange={handleChange} />
                <label htmlFor="description">Descripción</label>
                <textarea type="text" placeholder="Descripcion" id="description" name="description" required value={product.description} onChange={handleChange} />
                <label htmlFor="price">Precio</label>
                <input type="number" placeholder="Precio" id="price" name="price" required value={product.price} onChange={handleChange} />
                <label htmlFor="image">Imagen (URL)</label>
                <input type="url" required id="image" name="image" value={product.image} onChange={handleChange} />
                <button type="submit">Crear producto</button>
            </form>

        </div>
    )
}

export default CreateProduct;
