import {DirectoryItemDiv,DirectoryTitle} from './directory_item.style';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({directory}) => {

    const navigate = useNavigate();
    const onNavigate = () => navigate(directory.route);

    return (
        <DirectoryItemDiv onClick={onNavigate}>
        <img src={directory.imageUrl} alt="title" />
        <DirectoryTitle>
            <h2>{directory.title}</h2>
            <p>shop now</p>
        </DirectoryTitle>
        </DirectoryItemDiv>
    );
}

export default DirectoryItem;