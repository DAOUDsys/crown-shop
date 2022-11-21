import './category.style.scss';
import ProductCard from '../product-card/product_card.component';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';


const GET_CATEGORY = gql`
    query($title: String!) {
        getCollectionsByTitle(title: $title) {
            id 
            title 
            items {
                id 
                name
                price 
                imageUrl
            }
        }
    }
`;

const Category = () => {

    const {category} = useParams();
    const {loading, error, data} = useQuery(GET_CATEGORY, {
        variables: {
            title: category
        }
    });

    useEffect(() => {
        if(data) {
            const {
                getCollectionsByTitle: {items}
            } = data;

            setProducts(items);
        }
    }, [category, data])

    const [products, setProducts] = useState([]);




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