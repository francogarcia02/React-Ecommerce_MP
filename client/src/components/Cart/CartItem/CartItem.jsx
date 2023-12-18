import './CartItem.css'

const CartItem = ({prod}) =>{
    return(
        <div key={prod.id} className="Cart__contMenu">
            <div key={prod.id} className="Cart__card">
                <img className="Card__cart__img" src={prod.img} alt={prod.name}/>
                <div className="Card__cart p-2">
                    <h3 className="font-weight-bold" >{prod.name}</h3>
                    <h2 className="font-weight-bold" >${prod.price}</h2>
                    <div className="CartItem__details">
                        <h4 className="m-0 h5">Cantidad: {prod.cantidad}</h4>
                        <h4 className="m-0 h5">Precio unitario: ${prod.price}</h4>
                        {
                        prod.cantidad > 1 &&
                        <h4 className="m-0 h5">Precio total: ${prod.price * prod.cantidad}</h4>
                        }
                    </div>


                </div>
            </div>
        </div>
    )
}

export default CartItem