import './DataContent.css';
import { useState, useEffect } from 'react';
import ItemList from './ItemList/ItemList';
import { useParams, Link } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebase/config';

const DataContent = () => {
    const [productos, setProductos] = useState([])
    const [titulo, setTitulo] = useState("Productos")
    const categoria = useParams().categoria

    useEffect(() => {
        const productosDB = collection(db, 'productos');

        const q = categoria ? query(productosDB, where('category','==',categoria)) : productosDB

        getDocs(q)
            .then((resp) => {
                setProductos(
                    resp.docs.map(prod=>{
                        return{...prod.data(), id: prod.id}
                    })
                )
            })

        if (categoria){
            setTitulo(categoria);
        }
        else{
            setTitulo('Productos')
        }

    }, [categoria])

    return(
        <div className="Justifier">
            <div className='menu__categories'>
                <Link className="category" to='/menu'>Todos</Link>
                <Link className="category" to='/menu/pc'>Computadoras</Link>
                <Link className="category" to='/menu/smartphone'>Celulares</Link>
                <Link className="category" to='/menu/smart-tv'>Televisores</Link>
            </div>
            <ItemList productos={productos} titulo={titulo}/>
        </div>
    );
};

export default DataContent;
