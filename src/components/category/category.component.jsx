import './category.style.scss';
import ProductCard from '../product-card/product_card.component';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import {selectCategoriesMap,selectLoadingState} from '../../store/categories/category.selector';
import Spinner from '../spinner/spinner.component'
const Category = () => {

    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectLoadingState);
    const [products, setProducts] = useState(categoriesMap[category]);
    const coco = isLoading.toString();

    useEffect(() => {
        setProducts(categoriesMap[category]);
    },[categoriesMap, category]);

    return (
        <>
        <h2 className='title'>{category.toUpperCase()}</h2>
        <div className={coco}>
            { isLoading ?  <Spinner /> :
            <div className='category-container'>
                {
                    products && products.map(product => (<ProductCard product={product} key={product.id} />))
                }
            </div>}
        </div>
        </>
    );
};

export default Category;