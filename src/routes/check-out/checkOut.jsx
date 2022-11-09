import './checkOut.style.scss'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckOut = () => {

    const {cartItems} = useContext(CartContext);

    return (
        <div>
            
        </div>
    );
};

export default CheckOut;