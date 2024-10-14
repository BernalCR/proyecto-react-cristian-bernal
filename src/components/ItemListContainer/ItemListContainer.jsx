import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/config";
import "./ItemListContainer.css"

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
            <section><img className="banner" src="/Gallery/mathew-coulton-zxqaAkkayP8-unsplash.jpg"/></section>
            <main className="box_container">
                <section>
                    <h1 className="txt_center">Las mejores marcas para tu mascota</h1>
                    <div className="brands_box">
                        <img src="/Gallery/pro-plan-min.jpg" alt="Logo de pro plan"/>
                        <img src="/Gallery/pedigree_ed-min.jpg" alt="Logo de pedigree"/>
                        <img src="/Gallery/nutra-gold-min.jpg" alt="Logo de nutra gold"/>
                        <img src="/Gallery/max-2-min.jpg" alt="Logo de max 2"/>
                    </div>
                    <div className="brands_box d-flex">
                        <img src="/Gallery/evangers-min.jpg" alt="Logo de evangers"/>
                        <img src="/Gallery/dog-chow-2-min.jpg" alt="Logo de dog chow"/>
                        <img src="/Gallery/cat-chow_ed-min.jpg" alt="Logo de cat chow"/>
                    </div>
                </section>

                <section>
                    <h2>Mis Productos</h2>
                    <ItemList productos={products} />
                </section>
            </main>
        </>
    )
}

export default ItemListContainer