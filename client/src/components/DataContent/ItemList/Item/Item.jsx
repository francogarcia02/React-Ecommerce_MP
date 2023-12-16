import './Item.css';
import { Link } from 'react-router-dom'

const Item = ({prod}) =>{
    return(
        <div className="card">
            <img className="card__img" src={prod.img} alt={prod.name}/>
            <div className="card__content">
                <h3 className="card__content__item content__price" >${prod.price}</h3>
                <h4 className="card__content__item content__title" >{prod.name}</h4>
                <p className="card__content__item" >{prod.desc}</p>
                <Link to={`/item/${prod.id}`}><button className="card__content__button" id="${id}">Ver mas</button></Link>
            </div>
    </div>
    )
}

export default Item