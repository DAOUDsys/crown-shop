import './cart_icon.style.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const CartIcon = () => {

    const {cartItems} = useContext(CartContext);
    const quantity = cartItems.reduce((previousValue,x) => previousValue+=x.quantity,0);
    return (
        <div className='cart-icon-container' >
            <ShoppingIcon className='shopping-icon' />
            <span className='counter'>{quantity}</span>
        </div>
    )
}

export default CartIcon;