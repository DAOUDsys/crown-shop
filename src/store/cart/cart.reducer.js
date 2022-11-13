import CartActionTypes from './cart.types';


export const INITIAL_STATE ={
    cartItems: [],
};

export const CartReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch(type) {
        case CartActionTypes.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload,
            };
        default:
            return state;
    }

};