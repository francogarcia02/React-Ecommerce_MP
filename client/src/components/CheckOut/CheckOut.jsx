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
    const [confirm, setConfirm] = useState(false)
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
        <div className='CheckOut'>
            <h1 className="CheckOut__title">¿Desea confirmar la compra?</h1>
            <div className="CheckOut__data">
                <h4>Precio a pagar: ${precioTotal()}</h4>
                <h4>A nombre de: {user.nombre} {user.apellido}</h4>
            </div>
            <div className="CheckOut__ends">
                <Link className="ends__button-cancel" to="/carrito">Cancelar</Link>
                <button className="ends__button-confirm" onClick={handleBuy}>Confirmar</button>
                {preferenceId &&
                    <Wallet initialization={{preferenceId}} />
                }
            </div>

        </div>
    )
}

export default CheckOut;