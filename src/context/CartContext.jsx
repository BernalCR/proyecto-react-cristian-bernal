import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    totalPrice: 0,
    totalItems: 0
}); 

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    const addItem = (item, quantity) =>{
        const isAdded = cart.find(prod => prod.item.id === item.id);

        if(isAdded){
            const updatedCart = cart.map(prod =>{
                if(prod.item.id === item.id){
                    return {...prod, quantity: prod.quantity + quantity}
                }else{
                    prod
                }
            });
            setCart(updatedCart)
        }else{
            setCart(prev => [...prev, {item, quantity}])
        }
        setTotalPrice(prev => prev + item.price * quantity)
        setTotalItems(prev => prev + quantity)
    }

    const deleteItem = (id) =>{
        const deletedItem = cart.find(prod => prod.item.id === id);
        const updatedCart = cart.filter(prod => prod.item.id !== item.id);

        setCart(updatedCart)
        setTotalPrice(prev => prev - deletedItem.quantity * deletedItem.item.price)
        setTotalItems(prev => prev - deletedItem.quantity)
    }

    const emptyCart = () =>{
        // falta un swal

        setCart([])
        setTotalPrice(0)
        setTotalItems(0)
    }


    return(
        <CartContext.Provider
        value={{
          cart,
          totalPrice,
          totalItems,
          addItem,
          deleteItem,
          emptyCart,
        }}
      >
        {children}
      </CartContext.Provider>
    )
}