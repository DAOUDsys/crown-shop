import { createContext,useState } from "react";

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


export const CartContext = createContext({
    cartItems:[],
    addToItems: () => {},
    setCartItems: () => {},
    total: 0,
});

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    
    const addToItems = (product) => {
        setCartItems(addCartItem(cartItems,product));
    }
    const removeFromItems = (product) => {
        setCartItems(DecreaseOrRemoveCheckoutItem(cartItems,product));
    }
    const removeCheckoutItem = (product) => {
        setCartItems(removeItem(cartItems,product));
    }
    const value = {cartItems, addToItems, removeFromItems,removeCheckoutItem};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}