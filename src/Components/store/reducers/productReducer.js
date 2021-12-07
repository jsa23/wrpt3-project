import axios from "axios";

const initalState = {
    products: []
}

const GET_PRODUCTS = "GET_PRODUCTS";

export const getProducts = () => {
    return {
        type: GET_PRODUCTS,
        payload: axios.get('/api/cases')
    }
}

const productReducer = ( state = initalState, action) => {
    console.log(action)
    switch(action.type){
        case GET_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }
        default: return state;
    }
};

export default productReducer;
