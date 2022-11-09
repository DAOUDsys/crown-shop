import './checkOut.style.scss'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';



const CheckOut = () => {

    const {cartItems,addToItems,removeFromItems,removeCheckoutItem} = useContext(CartContext);

    const totalPrice = cartItems.reduce((price,item) =>  price+=item.quantity*item.price,0)
    

    return (
        
        <div className='checkout-container'>
            <div className='checkout-header'>
                <span className='header-block'>Product</span>
                <span className='header-block'>Description</span>
                <span className='header-block'>Quantity</span>
                <span className='header-block'>Price</span>
                <span className='header-block'>Remove</span>
            </div>
            {
                cartItems.map((item) => {
                    const {name,price,imageUrl,quantity,id} = item;
                    return (

                    <div className='checkout-item-container' key={id}>
                        <div className='image-container'>
                            <img src={imageUrl} alt={name} />
                        </div>
                        <span className='name'>{name}</span>
                        
                        <span className='quantity'>
                            <div className='arrow' onClick={()=>removeFromItems(item)}>&#10094;</div>
                                {quantity}  
                            <div className='arrow' onClick={() => addToItems(item)}>&#10095;</div>
                            </span>
                        <span className='price'>{price}</span>
                        <div className='remove-button' onClick={() => removeCheckoutItem(item)}>&#10005;</div>
                    </div>
                    );
                })
            }
            <span className='total'>Total Price: ${totalPrice}</span>
        </div>
    );
};

export default CheckOut;