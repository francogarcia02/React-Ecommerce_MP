import './Instruccions.css'

const Instruccions = () =>{
    return(
        <div class="funcionalidad">
            <h2 class="funcionalidad__item">¿Como hago mi pedido?</h2>
            <div class="funcionalidad__row">
                <div>
                    <h4 class="funcionalidad__row__item">Primer paso</h4>
                    <h5 class="funcionalidad__row__item__text">Registrate o inicia sesion</h5>
                </div>
                <div>
                    <h4 class="funcionalidad__row__item">Segundo paso</h4>
                    <h5 class="funcionalidad__row__item__text">Generar una orden de pedido en el catalogo</h5>
                </div>
                <div>
                    <h4 class="funcionalidad__row__item">Tercer paso</h4>
                    <h5 class="funcionalidad__row__item__text">Pagar la cuenta en el carrito y dirigirse a nuestra sucursal con el ticket para retirar</h5>
                </div>
            </div>
        </div>
    )
}

export default Instruccions