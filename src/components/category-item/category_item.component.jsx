import './category_item.style.scss';

const CategoryItem = ({category}) => {

    return (
        <div className="category">
        <img src={category.imageUrl} alt="title" />
        <div className="category-title">
            <h2>{category.title}</h2>
            <p>shop now</p>
        </div>
        </div>
    );
}

export default CategoryItem;