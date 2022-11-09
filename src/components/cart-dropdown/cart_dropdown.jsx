import './cart_dropdown.style.scss';
import Button from '../button/button.component';
import {CartContext} from '../../contexts/cart.context';
import {useContext} from 'react';
import CartItem from '../cart-item/cart_item.component';
import { Link } from 'react-router-dom';



const CartDropdown = ({dis}) => {

    const {cartItems} = useContext(CartContext);

    return (
        <div className='cart-dropdown-container' style={{display:dis}}>
            <div className='cart-items'>
                {
                    cartItems.map((item) => <CartItem product={item} key={item.id} />)
                }
            </div>
            <Button ><Link to='/checkout'>CHECK OUT</Link></Button>
        </div>
    );  
};

export default CartDropdown;