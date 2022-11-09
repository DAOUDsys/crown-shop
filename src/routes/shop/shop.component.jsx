import { useContext } from "react";
import { productsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product_card.component";
import './shop.style.scss'

const Shop = () => {

    const {products} = useContext(productsContext);

    return (
        <div className="products-component">
            {products.map((product) => {
                return <ProductCard product={product} key={product.id} />
                
            })}
        </div>
    )
}

export default Shop;