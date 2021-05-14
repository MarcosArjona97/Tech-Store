import React from 'react';
import style from './ProductCard.module.css';
import { Link } from 'react-router-dom';

function ProductCard({ img, name, price, id }) {
    return (
        <Link to={`/product/details/${id}`} style={{height: "fit-content"}}>
            <div className={style.container} >
                <div className={style.imgContainer}>
                    <img src={img} className={style.cardImg} alt="img Not Found" />
                </div>
                <div className={style.cardBody}>
                    <h4 style={{margin: "0px", fontWeight: "300"}}>{name}</h4>
                    <h3 style={{margin: "0px 0px 10px 0px", fontWeight: "600"}}>${price}</h3>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
