import CategoryItem from '../category-item/category_item.component';
import './directory.style.scss'

const Directory = ({categories}) => {
    return (
        <div className="categories">
        {
        categories.map((x) =>(
        <CategoryItem category={x} key={x.id} />
        )
        )
    }
    </div>
    )
}

export default Directory;