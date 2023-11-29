import { createContext, useEffect, useState } from "react";


export const CartContext = createContext()

const Provider = (props) => {
    const [cart, setCart] = useState([])
    const [suma, setSuma] = useState(0)

    const totalCart = () => {
        let  suma = 0
        cart.forEach(item => suma += (item.precio * item.cantidad));
        setSuma(suma)
    }

    useEffect(() => {
        console.log(cart)
        totalCart()
    }, [cart])

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            cart.map((product) => {
                if(product.id === item.id){
                    product.cantidad = cantidad
                    console.log('cart', cart)
                    setCart(cart)
                }
            })
            
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    const deleteOne = (id) => {
        const productosFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(productosFiltrados);
    }

    const deleteAll = () => {
        setCart([])
    }

    return (
         <CartContext.Provider value={{ cart, addToCart, deleteAll, deleteOne, suma }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default Provider