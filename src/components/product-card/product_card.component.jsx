import './product_card.style.scss';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import {addToItems} from '../../store/cart/cart.action'
import {useSelector, useDispatch} from 'react-redux';
import {selectCartItems} from '../../store/cart/cart.selector';


const ProductCard = ({product}) => {

    const dispatch = useDispatch();
    const {name,imageUrl,price} =product;
    const cartItems = useSelector(selectCartItems);


    const pushItemToCart = () => dispatch(addToItems(product,cartItems));
    return (
        <div className='product-container'>            
                <img src={imageUrl} alt={name} />
                <Button children='ADD TO CART' buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={pushItemToCart}/>
            <div className='second-container'>
                <div className='name'>{name}</div>
                <div className='price'>{price}</div>
            </div>
        </div>
    );
};

export default ProductCard