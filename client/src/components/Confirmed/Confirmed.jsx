import './Confirmed.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Confirmed = () =>{
    const {id, vaciarCarrito} = useContext(CartContext)

    if(id){
        vaciarCarrito()
    }

    return(
            <div className="CheckEnd">
                <h3 className="CheckEnd__title">Pedido encargado</h3>
                <p className="CheckEnd__text">Identificador de pedido: {id}</p>
            </div>
        )
}

export default Confirmed