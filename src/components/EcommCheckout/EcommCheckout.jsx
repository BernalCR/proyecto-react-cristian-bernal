import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../context/CartContext';
import { db } from "../../services/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import "./EcommCheckout.css"

const EcommCheckout = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmation, setEmailConfirmation] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");
  
    const {cart, emptyCart, totalPrice} = useContext(CartContext)
    const navigate = useNavigate();

    useEffect(() => {
        if (orderId) {
            Swal.fire({
                title: "¡Gracias por tu compra!",
                text: "Tu número de orden es: " + orderId,
                icon: "success",
                confirmButtonColor: "#44aa44",
            }).then((result) => {
                if (result.isConfirmed) navigate('/');
            });
        }
    }, [orderId]);  // Ejecutar cuando cambie orderId

    const handlerForm = (e) =>{
        e.preventDefault()

        if (!name || !lastName || !phone || !email || !emailConfirmation){
            setError("Tienes que llenar todos los campos")
            return;
        }

        if(email !== emailConfirmation){
            setError("El correo electronico no coincide");
            return;
        }

        const order = {
            items: cart.map(prod =>({
                id: prod.item.id,
                name: prod.item.name,
                quantity: prod.quantity,
            })),
            date: new Date(),
            totalPrice,
            name,
            lastName,
            phone,
            email
        }

        Promise.all(
            order.items.map(async (prod)=>{
                const productRef = doc(db, "products", prod.id);
                const productDoc = await getDoc(productRef);
                const stockBefore = productDoc.data().stock;
                await updateDoc(productRef,{
                    stock: stockBefore - prod.quantity,
                });
            })
        )
        .then(()=>{
            //Guardar la orden en la base de datos
            addDoc(collection(db, "orders"), order)
                .then(docRef => {
                    setOrderId(docRef.id)
                    emptyCart();
                    setName("")
                    setLastName("")
                    setPhone("")
                    setEmail("")
                    setEmailConfirmation("")
                })
                .catch(error => {
                    console.log("Error al crear la orden", error)
                    setError("Se producjo un error al crear la orden!")
                })
        })
        .catch((error) => {
            console.log("No se pudo actualizar el stock", error)
            setError("No se puede actualziar el stock")
        })
    }


    return (
        <>
            <div className='box_container' style={{margin: "var(--maginSections) auto"}}>
                <h2> Checkout:</h2>

                <div className='itemRow head'>
                    <p><strong>Nombre</strong></p>
                    <span></span>
                    <p><strong>Precio</strong></p>
                    <span></span>
                    <p><strong>cantidad</strong></p>
                </div>
                {   
                    cart.map(product => (
                        <div className='itemRow' key={product.item.id}>
                            <p>{product.item.name}</p>
                            <span></span>
                            <p>$ {product.item.price}</p>
                            <span></span>
                            <p>{product.quantity}</p>
                        </div>
                    ))
                }
            </div>

            <form className='box_container' onSubmit={handlerForm}>
                <div>
                    <label htmlFor=""> Nombre </label>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name} />                
                </div>

                <div>
                    <label htmlFor=""> Apellido </label> 
                    <input type="text" onChange={(e)=>setLastName(e.target.value)} value={lastName} /> 
                </div>

                <div>
                    <label htmlFor=""> Telefono </label> 
                    <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone} /> 
                </div>

                <div>
                    <label htmlFor=""> Email </label> 
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
                </div>

                <div>
                    <label htmlFor=""> Email Confirmacion </label> 
                    <input type="email" onChange={(e)=>setEmailConfirmation(e.target.value)} value={emailConfirmation}/>
                </div>
                <button type="submit">Confirmar Compra</button>
                
                { error && <p style={{color:"red"}}> {error}</p> }
            </form>
        </>
    )
}

export default EcommCheckout



