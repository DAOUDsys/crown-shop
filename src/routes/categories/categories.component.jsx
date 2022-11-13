import CategoryPreview from "../../components/category-preview/category_preview";
import {selectCategoriesMap} from '../../store/categories/category.selector';
import {useSelector} from 'react-redux';

const Categories = () => {

    const categoriesMap = useSelector(selectCategoriesMap);

    return (
        <>
            {Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title];
                return <CategoryPreview products={products} title={title} key={title} />
            })}
        </>
    )
}

export default Categories;