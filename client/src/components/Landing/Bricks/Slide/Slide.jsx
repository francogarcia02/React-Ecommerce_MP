import './Slide.css';
import { useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../../firebase/config';
import SlideList from './SlideList/SlideList';

const Slide = () =>{
    const [productos, setProductos] = useState([])
    const productosDB = collection(db, 'productos');

    getDocs(productosDB)
        .then((resp) => {
            setProductos(
                resp.docs.map(prod=>{
                    return{...prod.data(), id: prod.id}
                })
            )
        })

    return(
        <SlideList productos={productos}/>
    )
}

export default Slide