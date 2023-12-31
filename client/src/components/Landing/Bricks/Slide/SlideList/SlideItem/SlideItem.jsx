import './SlideItem.css';
import { Link } from 'react-router-dom'
import { Bag } from 'react-bootstrap-icons';

const SlideItem = ({prod}) =>{

    return(
        <div className="SlideCard alt-background">
            <img className="card__img" src={prod.img} alt="prod img"/>
            <div className="card__content">
                <h3 className="h5 p-2 alt-color-txt" >${prod.price}</h3>
                <h4 className="h5 p-2 alt-color-txt" >{prod.name}</h4>
                <p className="p-3" ></p>
                <Link to={`/item/${prod.id}`}><button className="card__content__button btn btn-primary" id="${id}"><Bag/></button></Link>
            </div>
        </div>
    )
}

export default SlideItem