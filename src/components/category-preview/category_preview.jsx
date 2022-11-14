import ProductCard from '../product-card/product_card.component';
import { Link } from 'react-router-dom';
import Spinner from '../spinner/spinner.component';
import {useSelector} from 'react-redux';
import {selectLoadingState} from '../../store/categories/category.selector';
import './category_preview.style.scss';
import { Fragment } from 'react';


const CategoryPreview = ({title, products}) => {

    return (
        
    <div className='category-preview-container'>
        <h2><Link className='title' to={title} >{title.toUpperCase()}</Link></h2>
        <div className='preview'>
            {
                products.filter((_, i) => i<4)
                .map(product => <ProductCard key={product.id} product={product}/>)
            }
        </div>
    </div>
    );
};

export default CategoryPreview;