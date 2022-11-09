import { createContext,useState } from "react";

const addCartItem = (cartItems,product) => {
    const yes = cartItems.find((item) => item.id === product.id );
    if(yes) {
       return cartItems.map((x) => x.id === product.id? {...x , quantity: x.quantity+1} : x);
    } 

    return [...cartItems,{...product,quantity:1}];
}


export const CartContext = createContext({
    cartItems:[],
    addToItems: () => {},
    setCartItems: () => {},
});

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    
    const addToItems = (product) => {
        setCartItems(addCartItem(cartItems,product));
    }
    const value = {cartItems, addToItems, setCartItems};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}