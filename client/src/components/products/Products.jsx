import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../redux/actions';
import ProductCard from '../productCard/ProductCard';
import style from './Products.module.css';

function Products() {
    const [loading, setLoading] = useState(false)
    
    const dispatch = useDispatch();
    const products = useSelector(state => state.allProducts)

    useEffect(() => {
        setLoading(true)
        dispatch(getProducts())
        setLoading(false)
    }, [dispatch])

    if(loading){
        return(
            <div>Loading...</div>
        )
    }

    return (
        <div className={style.cardsContainer}>
            {products?.map(i => {
                return (
                        <ProductCard img={i.image} name={i.name} price={i.price} id={i.id} key={i.id} />
                )
            })
            }
        </div>
    )
}

export default Products
