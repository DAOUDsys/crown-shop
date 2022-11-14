import Categories from '../categories/categories.component';
import Category from '../../components/category/category.component';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import {fetchCategoriesStart} from '../../store/categories/category.action';

const Shop = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('inside shope')
            dispatch(fetchCategoriesStart());
    },[]);

    return (
        <Routes>
            <Route index element={<Categories />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
};

export default Shop;