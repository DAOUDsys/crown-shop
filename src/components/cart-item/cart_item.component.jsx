import './cart_item.style.scss';

const CartItem = ({product}) => {
    const {name,quantity,imageUrl,price} = product;
    return (
        <div className='container'>
            <img src={imageUrl} alt={name} />
            <div className='second-container'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} X ${price}</span>
            </div>
        </div>
    );
};

export default CartItem;