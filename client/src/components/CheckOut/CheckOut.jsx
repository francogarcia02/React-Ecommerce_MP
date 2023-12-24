import './CheckOut.css';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { Link } from 'react-router-dom';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';


const CheckOut = () =>{
    const {carrito, precioTotal, postId} = useContext(CartContext)
    const { user } = useContext(UserContext)
    const pedidos = collection(db, 'pedidos');
    const [preferenceId, setPreferenceId] = useState(null);

    initMercadoPago('TEST-36a2cd8c-1d9e-4781-a107-9bd8296c0857');

    const createPreference = async () => {
        try {
            const response = await axios.post('http://localhost:8080/create_preference', {
                description: 'Product',
                price: precioTotal(),
                quantity: 1,
                currency_id: 'ARS'
            });
            const { id } = response.data;
            return id;
        } catch (error) {
            console.log(error);
        }
    }

    const handleBuy = async () =>{
        const id = await createPreference();
        if(id){
            setPreferenceId(id);
            addDoc(pedidos, pedido)
            .then((resp) =>{
                postId(resp.id)
            })
        }
    }

    const pedido = {
        cliente: user,
        pedido: carrito,
        precioTotal: precioTotal()
    }

    return(
        <div className='CheckOut alt-background alt-color-txt'>
            <h2 className="CheckOut__title p-3">¿Desea confirmar la compra?</h2>
            <div className="CheckOut__data">
                <p className="p-0">Precio a pagar: ${precioTotal()}</p>
                <p className="p-0">A nombre de: {user.nombre} {user.apellido}</p>
            </div>
            <div className="CheckOut__ends">
                <Link className="ends__button-cancel" to="/carrito">Cancelar</Link>
                <button className="ends__button-confirm" onClick={handleBuy}>Confirmar</button>
            </div>
            {preferenceId &&
                <Wallet initialization={{preferenceId}} />
            }
        </div>
    )
}

export default CheckOut;