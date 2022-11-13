import CartActionTypes from "./cart.types";
import {createAction} from '../../utils/reducer/reducer.utils';

const addCartItem = (cartItems,product) => {
    const yes = cartItems.find((item) => item.id === product.id );
    if(yes) {
       return cartItems.map((x) => x.id === product.id? {...x , quantity: x.quantity+1} : x);
    } 

    return [...cartItems,{...product,quantity:1}];
}
const DecreaseOrRemoveCheckoutItem = (cartItems,product) => {
    const yes = cartItems.find((item) => item.id === product.id );
       
    if(yes.quantity === 1) {
        return cartItems.filter(item => item.id !== product.id); 
    }

    return cartItems.map((x) => x.id === product.id? {...x , quantity: x.quantity-1} : x);
}

const removeItem = (cartItems,product) => cartItems.filter(item => item.id !== product.id); 




    
export const addToItems = (product,cartItems) => {
    const newCartItems = (addCartItem(cartItems,product));
    return createAction(CartActionTypes.SET_CART_ITEMS ,newCartItems);
}
export const removeFromItems = (product,cartItems) => {
    const newCartItems = (DecreaseOrRemoveCheckoutItem(cartItems,product));
    return createAction(CartActionTypes.SET_CART_ITEMS ,newCartItems);
}
export const removeCheckoutItem = (product,cartItems) => {
    const newCartItems = (removeItem(cartItems,product));
    return createAction(CartActionTypes.SET_CART_ITEMS ,newCartItems);
}