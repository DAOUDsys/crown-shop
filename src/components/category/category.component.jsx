import './category.style.scss';
import ProductCard from '../product-card/product_card.component';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import {selectCategoriesMap} from '../../store/categories/category.selector';

const Category = () => {

    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    },[categoriesMap, category]);

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