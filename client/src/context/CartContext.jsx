import { createContext, useState, children, useEffect } from 'react';


export const CartContext = createContext();

const carritoLocal = JSON.parse(localStorage.getItem("carrito")) || [];
const idPedido = JSON.parse(localStorage.getItem("idPedido")) || [];

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(carritoLocal);
    const [id, setId] = useState(idPedido);

    const postId = (data)=>{
        setId(data)
    }

    const agregarAlCarrito = (prod, cantidad) => {
        const prodAgregado = {...prod, cantidad};

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === prodAgregado.id)

        if(estaEnElCarrito){
            estaEnElCarrito.cantidad += cantidad;
        }
        else{
            nuevoCarrito.push(prodAgregado)
        }
        setCarrito(nuevoCarrito);

    }

    const productosEnCarrito = (acc, prod) => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const precioTotal = (acc, prod) => {
        return carrito.reduce((acc, prod) => acc + (prod.price * prod.cantidad), 0)
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect(() =>{
        localStorage.setItem("carrito", JSON.stringify(carrito))
    },[carrito])

    useEffect(() =>{
        localStorage.setItem("idPedido", JSON.stringify(id))
    },[id])

    return(
    <CartContext.Provider
    value={{
    carrito,
    agregarAlCarrito,
    productosEnCarrito,
    precioTotal,
    vaciarCarrito,
    postId,
    id
    }}>
        {children}
    </CartContext.Provider>
    )
}