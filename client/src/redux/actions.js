export const GET_PRODUCTS = "GET_PRODUCTS";
export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";
export const ACTIVE_FORM = "ACTIVE_FORM";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";

export function getProducts() {
    return async function (dispatch) {
        let products = await fetch("http://localhost:3001/product")
            .then(res => res.json())
            .then(products => { return products })
        dispatch({ type: GET_PRODUCTS, payload: products })
    }
}

export function getProductById(id) {
    return async function (dispatch) {
        let product = await fetch("http://localhost:3001/product/" + id)
            .then(res => res.json())
            .then(product => { return product })
        dispatch({ type: GET_PRODUCT_BY_ID, payload: product })
    }
}


export function searchProducts(payload) {
    return async function (dispatch) {
        let products = await fetch(`http://localhost:3001/product/search/${payload}`)
            .then(res => res.json())
            .then(products => { return products })
        dispatch({ type: SEARCH_PRODUCTS, payload: products })
    }
}

export function filterProducts(payload, filter) {
    return {
        type: FILTER_PRODUCTS,
        payload,
        filter
    }
}

export function activeForm(id, bool) {
    return {
        type: ACTIVE_FORM,
        payload: id,
        bool: bool
    }
}

export async function deleteProduct(id) {
    await fetch(`http://localhost:3001/product/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
}
