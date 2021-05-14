import { GET_PRODUCTS, SEARCH_PRODUCTS, FILTER_PRODUCTS, ACTIVE_FORM, GET_PRODUCT_BY_ID} from './actions';

const initialState = {
    allProducts: [],
    form: {
        active: false,
        id: ""
    },
    productDetails: {}
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state, allProducts: action.payload
            }
        case SEARCH_PRODUCTS:
            return {
                ...state, allProducts: action.payload
            }
        case FILTER_PRODUCTS:
            let filtrados;
            if (action.filter === "A-Z") {
                filtrados = action.payload.sort((a, b) => (
                    a.name > b.name ? 1 : -1
                ))
                return {
                    ...state, allProducts: filtrados
                }
            }
            if (action.filter === "Z-A") {
                filtrados = action.payload.sort((a, b) => (
                    a.name < b.name ? 1 : -1
                ))
                return {
                    ...state, allProducts: filtrados
                }
            }
            if (action.filter === "MayorPrecio") {
                filtrados = action.payload.sort((a, b) => (
                    a.price < b.price ? 1 : -1
                ))
                return {
                    ...state, allProducts: filtrados
                }
            }
            if (action.filter === "MenorPrecio") {
                filtrados = action.payload.sort((a, b) => (
                    a.price > b.price ? 1 : -1
                ))
                return {
                    ...state, allProducts: filtrados
                }
            } else {
                break;
            }
        case ACTIVE_FORM:
            return {
                ...state, form: {
                    active: action.bool,
                    id: action.payload
                }
            }
        case GET_PRODUCT_BY_ID:
            return {
                ...state, productDetails: action.payload
            }

        default: return state
    }
};