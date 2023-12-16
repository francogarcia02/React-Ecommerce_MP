import './ItemDetail.css';
import { useContext, useState } from 'react';
import { CartContext } from '../../../context/CartContext';

const ItemDetail = ({prod}) =>{
    const {agregarAlCarrito} = useContext(CartContext)

    const [cantidad, setCantidad ] = useState(1)

    const addCant = () =>{
        setCantidad(cantidad + 1)
    }

    const lessCant = () =>{
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return(
        <div className="detail__contMenu">
            <h3 className="menu__title">Categoria: {prod.category}</h3>
            <div key={prod.id} className="detail__card">
                <img className="card__detail__img" src={prod.img} alt={prod.name}/>
                <div className="card__detail">
                    <h3 className="card__detail__item detail__title" >{prod.name}</h3>
                    <h2 className="card__detail__item detail__price" >${prod.price}</h2>
                    <div className="item__caract">
                        <h5>Caracteristicas</h5>
                        <p className="caract">{prod.caract1}</p>
                        <p className="caract">{prod.caract2}</p>
                        <p className="caract">{prod.caract3}</p>
                        <p className="caract">{prod.caract4}</p>
                    </div>
                </div>
                <div className="detail__ends">
                    <div className="detail__cantidades">
                        <button className="cantidades__button" onClick={lessCant}>-</button>
                        <p>{cantidad}</p>
                        <button className="cantidades__button" onClick={addCant}>+</button>
                    </div>
                    <button onClick={()=>{agregarAlCarrito(prod, cantidad)}} className="detail__button  detail__button-carrito">Añadir al carrito</button>
                </div>

            </div>
        </div>

    )
}

export default ItemDetail