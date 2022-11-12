import './product_card.style.scss';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import {useContext} from 'react';

const ProductCard = ({product}) => {

    const {name,imageUrl,price} =product;
    const {addToItems} = useContext(CartContext);

    const pushItemToCart = () => addToItems(product);
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