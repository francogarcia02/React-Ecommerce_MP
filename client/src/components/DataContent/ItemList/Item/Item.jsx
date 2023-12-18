import './Item.css';
import { Link } from 'react-router-dom'

const Item = ({prod}) =>{
    return(
        <div className="card">
            <img className="card__img" src={prod.img} alt={prod.name}/>
            <div className="card__content">
                <h3 className="h5 p-2" >${prod.price}</h3>
                <h4 className="h5 p-2" >{prod.name}</h4>
                <p className="p-3" ></p>
                <Link to={`/item/${prod.id}`}><button className="card__content__button btn btn-primary" id="${id}">Ver mas</button></Link>
            </div>
    </div>
    )
}

export default Item