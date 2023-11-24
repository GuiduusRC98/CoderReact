import { CartContext } from "./CartContext"
import { useState } from "react";

const CartProvider = ({children}) => {
    const [products, setPorducts] = useState ([]);
    const [productQuantity, setProductQuantity] = useState(0)
    
    const addItem = (product, quantity) => {


        setPorducts([...products, {...product, quantity}]);
        setProductQuantity(products.reduce((acc, product) => acc + product.quantity, 0), 0)
    };

    return (
        <CartContext.Provider value={{ products, addItem, productQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider