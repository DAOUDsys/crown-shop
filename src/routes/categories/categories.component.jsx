import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category_preview";


const Categories = () => {

    const {categoriesMap} = useContext(CategoriesContext);

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