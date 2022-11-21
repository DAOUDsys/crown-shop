import './cart_dropdown.style';
import {CartContext} from '../../contexts/cart.context';
import {useCallback, useContext} from 'react';
import CartItem from '../cart-item/cart_item.component';
import { useNavigate } from 'react-router-dom';
import {CartContainer, EmptyMessage, CartItemsContainer, CheckoutButton} from './cart_dropdown.style';



const CartDropdown = ({dis}) => {

    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckout = useCallback(() => {
        navigate('/checkout');
    }, [navigate])

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