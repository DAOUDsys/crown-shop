import { CartItem} from './cart.types';
import { AnyAction } from 'redux';
import { setCartItem } from './cart.action';


export type CartState = {readonly cartItems: CartItem[];}

export const INITIAL_STATE: CartState = {
    cartItems: [],
};

export const CartReducer = (state = INITIAL_STATE, action: AnyAction): CartState => {
    
    if(setCartItem.match(action)) {
        return {
            ...state,
            cartItems: action.payload,
        };
    }

    return state;

};