import { getCart, setCart } from "./cookie";

export const cartReducer = (state = getCart(), action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return addProduct(state, action.payload);

        case 'REMOVE_PRODUCT':
            return removeProduct(state, action.payload);

        default:
            return state;
    }
}

const addProduct = (state, product) => {
    if (state.products.findIndex(product_ => product_.id === product.id) !== -1) return state;

    const newState = {
        products: [...state.products, product],
        amount: state.amount + 1,
        totalCost: state.totalCost + product.price
    }

    setCart(newState);

    return newState;
}

const removeProduct = (state, product) => {
    if (state.products.findIndex(product_ => product_.id === product.id) === -1) return state;

    const newState = {
        products: state.products.filter(product_ => product_.id !== product.id),
        amount: Math.max(0, state.amount - 1),
        totalCost: Math.max(0, state.totalCost - product.price)
    }

    setCart(newState);

    return newState; 
}