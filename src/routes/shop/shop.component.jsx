import Categories from '../categories/categories.component';
import Category from '../../components/category/category.component';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import {getCollectionAndDocuments} from '../../utils/firebase/firebase.utils.js';
import {setCategories} from '../../store/categories/category.action';

const Shop = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCollectionAndDocuments('categories');
            dispatch(setCategories(categoriesArray));
        }
        getCategoriesMap();
    },[]);

    return (
        <Routes>
            <Route index element={<Categories />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
};

export default Shop;