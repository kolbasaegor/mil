export const getCart = () => {
    const cartStorage = localStorage.getItem("cart_cookie");
    if (cartStorage) return JSON.parse(cartStorage);

    const newCart = {
        products: [],
        amount: 0,
        totalCost: 0
    }

    localStorage.setItem("cart_cookie", JSON.stringify(newCart));

    return newCart;
}

export const setCart = (newCart) => {
    localStorage.setItem("cart_cookie", JSON.stringify(newCart));
}