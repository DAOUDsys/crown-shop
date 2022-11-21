import {CartActionTypes, CartItem} from "./cart.types";
import {createAction,withMatcher, ActionWithPayload} from '../../utils/reducer/reducer.utils';
import {CategoryItem} from '../categories/category.types';

const addCartItem = (cartItems: CartItem[],product: CategoryItem): CartItem[] => {
    const xx= cartItems?.find((item) => item.id === product.id );
    const yes = cartItems ? cartItems.find((item) => item.id === product.id ): [];
    if(yes) {
       return cartItems && cartItems.map((x) => x.id === product.id? {...x , quantity: x.quantity+1} : x);
    } 

    return [...cartItems,{...product,quantity:1}];
}
const DecreaseOrRemoveCheckoutItem = (cartItems: CartItem[],product: CategoryItem): CartItem[] => {
    
    const yes = cartItems && cartItems.find((item) => item.id === product.id );
       
    if(yes && yes.quantity === 1) {
        return cartItems && cartItems.filter(item => item.id !== product.id); 
    }

    return cartItems && cartItems.map((x) => x.id === product.id? {...x , quantity: x.quantity-1} : x);
}

const removeItem = (cartItems: CartItem[],product: CategoryItem): CartItem[] => cartItems && cartItems.filter(item => item.id !== product.id); 

export type SetCartItems = ActionWithPayload<CartActionTypes.SET_CART_ITEMS, CartItem[]>;

export const setCartItem = withMatcher((cartItems: CartItem[]): SetCartItems => 
    createAction(CartActionTypes.SET_CART_ITEMS, cartItems)
)

    
export const addToItems = withMatcher((product: CategoryItem,cartItems: CartItem[]) => {
    const newCartItems = (addCartItem(cartItems,product));
    return setCartItem(newCartItems);
})
export const removeFromItems = withMatcher((product: CategoryItem,cartItems: CartItem[]) => {
    const newCartItems = (DecreaseOrRemoveCheckoutItem(cartItems,product));
    return setCartItem(newCartItems);
})
export const removeCheckoutItem = withMatcher((product: CategoryItem,cartItems: CartItem[]) => {
    const newCartItems = (removeItem(cartItems,product));
    return setCartItem(newCartItems);
})