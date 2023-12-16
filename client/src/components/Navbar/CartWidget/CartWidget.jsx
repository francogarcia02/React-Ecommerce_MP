import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom'

const CartWidget = () =>{
    const {productosEnCarrito} = useContext(CartContext)

    return(
        <Link className="Cart__conteiner" to="/carrito">
            <p className="Navbar__item">Carrito</p>
            <span className="Cart__counter"> {productosEnCarrito()} </span>
        </Link>

    )
}

export default CartWidget