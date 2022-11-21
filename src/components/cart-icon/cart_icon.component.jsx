import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import {Counter, CartIconContainer, ShoppingIcon} from './cart_icon.style';

const CartIcon = () => {

    const {cartItems} = useContext(CartContext);
    const quantity = cartItems.reduce((previousValue,x) => previousValue+=x.quantity,0);
    return (
        <CartIconContainer >
            <ShoppingIcon className='shopping-icon' />
            <Counter>{quantity}</Counter>
        </CartIconContainer>
    )
}

export default CartIcon;