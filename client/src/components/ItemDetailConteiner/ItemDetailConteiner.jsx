import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config'


const ItemDetailContainer = () => {
    const id = useParams().id
    const [item, setItem] = useState(null)

    useEffect(()=>{
        const docRef = doc(db, 'productos', id)

        getDoc(docRef)
            .then(resp=>{
                setItem({...resp.data(),id: resp.id})
            })

    },[id])

    return(
        <div className="Justifier">
            {item && <ItemDetail prod={item}/>}
        </div>
    )

}

export default ItemDetailContainer