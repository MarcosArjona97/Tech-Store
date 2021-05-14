import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditIcon from '../../../assets/edit.png';
import DeleteIcon from '../../../assets/delete.png';
import style from './ProductsList.module.css';
import { getProducts, activeForm } from '../../../redux/actions';
import Swal from 'sweetalert2';
import {deleteProduct} from '../../../redux/actions';

function ProductsList() {

    const dispatch = useDispatch();
    const products = useSelector(state => state.allProducts)

    React.useEffect(() => {
        dispatch(getProducts());
    }, [dispatch, products])

    function handleEditClick(e) {
        dispatch(activeForm(e.currentTarget.value, true))
    }

    async function handleDelete(e){
        const id = e.currentTarget.value
        Swal.fire({
            icon: 'warning',
            title: 'Eliminar producto',
            text: 'Estás seguro que deseas eliminar el producto?',
            showDenyButton: true,
            denyButtonText: 'No',
            confirmButtonText: 'Si'
        })
        .then(result => {
            if(result.isConfirmed){
                Swal.fire('Producto eliminado', '', 'success');
                deleteProduct(id);
                dispatch(getProducts());
            }
        })
    }

    if (!products) {
        return (
            <h1> Loading ...</h1>
        )
    }

    return (
        <div className={style.productsList}>
            <ul>
                {products?.map(i => {
                    return (
                        <li className={style.productCell} key={i.id}>{i.name}
                            <div style={{ marginLeft: "15px", borderLeft: "1px solid lightgray" }}>
                                <button name={i.id} onClick={handleEditClick} style={{ marginRight: "3px" }} className={style.btn} value={i.id}>
                                    <img src={EditIcon} alt="" className={style.listIcons} />
                                </button>
                                <button className={style.btn} name={i.id} value={i.id} onClick={handleDelete}>
                                    <img src={DeleteIcon} alt="" className={style.listIcons} />
                                </button>
                            </div>
                        </li>
                    )
                })

                }
            </ul>
        </div>
    )
}

export default ProductsList;

