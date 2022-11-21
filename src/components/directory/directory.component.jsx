import DirectoryItem from '../directory-item/directory_item.component';
import './directory.style.scss'

const categories = [
    {
        id: 1,
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        route: 'shop/hats',
    },
    {
        id: 2,
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        route: 'shop/jackets',
    },
    {
        id: 3,
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        route: 'shop/sneakers',
    },
    {
        id: 4,
        title: "women",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        route: 'shop/womens',
    },
    {
        id: 5,
        title: "men",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        route: 'shop/mens',
    },
    ];

    const Directory = () => {

    return (
        <div className="categories">
        {
        categories.map((x) =>(
        <DirectoryItem directory={x} key={x.id} />
        )
        )
    }
    </div>
    )
}

export default Directory;