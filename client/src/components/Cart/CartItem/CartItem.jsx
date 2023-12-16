import './CartItem.css'

const CartItem = ({prod}) =>{
    return(
        <div key={prod.id} className="Cart__contMenu">
            <div key={prod.id} className="Cart__card">
                <img className="Card__cart__img" src={prod.img} alt={prod.name}/>
                <div className="Card__cart">
                    <h3 className="Card__cart__item CartItem__title" >{prod.name}</h3>
                    <h2 className="Card__cart__item CartItem__price" >${prod.price}</h2>
                    <div className="CartItem__details">
                        <h4 className="Details__item">Cantidad: {prod.cantidad}</h4>
                        <h4 className="Details__item">Precio unitario: ${prod.price}</h4>
                        {
                        prod.cantidad > 1 &&
                        <h4 className="Details__item">Precio total: ${prod.price * prod.cantidad}</h4>
                        }
                    </div>


                </div>
            </div>
        </div>
    )
}

export default CartItem