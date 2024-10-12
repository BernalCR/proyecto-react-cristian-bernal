import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/config";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {idCategory} = useParams()
    console.log(idCategory)

    useEffect(() => {
        const myProducts = idCategory ? query(collection(db, "products"), where("category", "==", idCategory)) : collection(db, "products") ;
        getDocs(myProducts)
        .then(res =>{
            const newProducts = res.docs.map(doc =>{
                const data = doc.data();
                return {id: doc.id, ...data}
            });
            setProducts(newProducts);
        })
        .catch(error => console.log(error))
        .finally(() => console.log("proceso finalizado"));
    }, [idCategory])

    return (
        <>
            <h2 style={{ textAlign: "center" }}>Mis Productos</h2>
            <ItemList productos={products} />
        </>
    )
}

export default ItemListContainer