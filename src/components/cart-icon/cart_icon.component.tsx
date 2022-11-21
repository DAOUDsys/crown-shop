import {Counter, CartIconContainer, ShoppingIcon} from './cart_icon.style';
import {useSelector} from 'react-redux';
import {selectCartItems} from '../../store/cart/cart.selector';

const CartIcon = () => {

    const cartItems = useSelector(selectCartItems);
    const quantity = cartItems.reduce((previousValue,x) => previousValue+=x.quantity,0);
    return (
        <CartIconContainer >
            <ShoppingIcon className='shopping-icon' />
            <Counter>{quantity}</Counter>
        </CartIconContainer>
    )
}

export default CartIcon;