import './category.style.scss';
import { useParams } from 'react-router-dom';
import { useContext,useState, useEffect } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../product-card/product_card.component';

const Category = () => {

    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    },[categoriesMap, category])

    return (
        <>
        <h2 className='title'>{category.toUpperCase()}</h2>
        <div className='category-container'>
            {
                products && products.map(product => (<ProductCard product={product} key={product.id} />))
            }
        </div>
        </>
    );
};

export default Category;