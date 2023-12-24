import './Item.css';
import { Link } from 'react-router-dom';
import { Bag } from 'react-bootstrap-icons';
import { lazy, Suspense } from 'react';

const Item = ({name, img, price, id}) =>{
    const Img = lazy( () => import('./Img') )

    return(
        <div className="card alt-background">
            <Suspense fallback={ <h5 className="text-light">Cargando</h5> }>
                <Img ruta={img}/>
            </Suspense>
            <div className="card__content">
                <h3 className="h5 p-2 alt-color-txt" >${price}</h3>
                <h4 className="h5 p-2 alt-color-txt" >{name}</h4>
                <p className="p-3" ></p>
                <Link to={`/item/${id}`}><button className="card__content__button btn btn-primary" id="${id}"><Bag/></button></Link>
            </div>
    </div>
    )
}

export default Item