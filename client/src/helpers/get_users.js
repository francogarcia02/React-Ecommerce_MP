import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
const usuarios = collection(db, 'usuarios');


const usuariosDB = [];

getDocs(usuarios)
        .then((resp)=>{
            resp.docs.map(us=>{
                usuariosDB.push(us.data())
            })
        })

export {usuariosDB}

