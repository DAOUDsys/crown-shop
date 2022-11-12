import { Route, Routes } from 'react-router-dom';
import Categories from '../categories/categories.component';
import Category from '../../components/category/category.component';

const Shop = () => {

    return (
        <Routes>
            <Route index element={<Categories />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
};

export default Shop;