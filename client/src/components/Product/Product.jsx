import './Product.css'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import {useState} from 'react';
import axios from 'axios';

const Product = () =>{
    const [preferenceId, setPreferenceId] = useState(null);

    initMercadoPago('TEST-36a2cd8c-1d9e-4781-a107-9bd8296c0857');

    const createPreference = async () => {
    try {
        const response = await axios.post('http://localhost:8080/create_preference', {
            description: 'Product',
            price: 5000,
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
        }
    }

    return(
        <div>
            <h1>Product</h1>
            <p>Precio: $5000</p>
            <button onClick={handleBuy}>comprar</button>
            {preferenceId &&
                <Wallet initialization={{preferenceId}} />
            }
        </div>
    )
}

export default Product