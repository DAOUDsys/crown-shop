import './cart_dropdown.style';
import CartItem from '../cart-item/cart_item.component';
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {CartContainer, EmptyMessage, CartItemsContainer, CheckoutButton} from './cart_dropdown.style';
import { selectCartItems } from '../../store/cart/cart.selector';



const CartDropdown = ({dis}) => {

    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate('/checkout');
    }

    return (
        <CartContainer style={{display:dis}}>
            <CartItemsContainer>
                {
                    cartItems.length ? (cartItems.map((item) => <CartItem product={item} key={item.id} />))
                    : <EmptyMessage>Your cart is empty</EmptyMessage>
                }
            </CartItemsContainer>
            <CheckoutButton onClick={goToCheckout} >GO TO CHECKOUT</CheckoutButton>
        </CartContainer>
    );  
};

export default CartDropdown;