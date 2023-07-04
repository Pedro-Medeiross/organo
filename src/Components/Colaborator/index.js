import "./Colaborator.css";
import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from 'react-icons/ai';

const Colaborator = ({colaborator, backgroundColor, onDelete, onFavorite}) => {
    function favorite () {
        onFavorite(colaborator.id)
    }

    const propsFavorite = {
        size: 25,
        onClick: favorite
    }

    return (
        <div className="colaborator">
            <AiFillCloseCircle size={25} className="delete" onClick={() => onDelete(colaborator.id)} />
            <div className="header" style={{backgroundColor: backgroundColor}}>
                <img src={colaborator.image} alt={colaborator.name} />
            </div>
            <div className="footer">
                <h4>{colaborator.name}</h4>
                <h5>{colaborator.role}</h5>
                <div className="favorite">
                    {colaborator.favorite ? <AiFillHeart {...propsFavorite} color='#ff0000'/> : <AiOutlineHeart {...propsFavorite} />}
                </div>
            </div>
        </div>
    )
}

export default Colaborator;