import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom'


const Cart = () =>{
    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)
    const {userExist} = useContext(UserContext)

    const exist = userExist()

    console.log(exist)

    const handleVaciar = () =>{
        vaciarCarrito();
    }

    return(
        <div className="Justifier Cart_conteiner">
            <h1 className="Cart__title">Carrito</h1>
            {carrito.length > 0 ?
                <>
                    {carrito.map((prod) =>(
                        <CartItem key={prod.id} prod={prod}/>
                    ))}
                    <div className="Total">
                        <h3 className="Total__title">precio total: ${precioTotal()}</h3>
                        <div className="Total__buttons">
                            <button onClick={handleVaciar} className="Total__button">Vaciar</button>
                            {
                            (exist)
                            ?
                            <Link to='/checkout' className="Total__button">Comprar</Link>
                            :
                            <Link to='/login' className="Total__button">Comprar</Link>
                            }
                        </div>


                    </div>

                </>:
                <div className="Cart__empty">
                    <h1 className="Empty__title">Carrito vacio</h1>
                </div>
            }
        </div>
    )
}

export default Cart