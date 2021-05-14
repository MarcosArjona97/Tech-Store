import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './ProductDetails.module.css';
import {getProductById} from '../../redux/actions';

function ProductDetails({ id }) {

    const [loading, setLoading] = useState(false);
    const product = useSelector(state => state.productDetails);
    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(true);
        dispatch(getProductById(id));
        setLoading(false)
    }, [dispatch, id])

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div className={style.productDetails}>
            <img src={product.image} alt="ImgNotFound" className={style.detailsImage} />
            <div className={style.detailsBody}>
                <h2 style={{margin: "0px 0px 15px 0px", textAlign: "left"}}>{product.name}</h2>
                <div style={{marginRight: "20px"}}>{product.description}</div>
                <h3 style={{textAlign: "left"}}>${product.price}</h3>
            </div>
        </div>
    )
}

export default ProductDetails
