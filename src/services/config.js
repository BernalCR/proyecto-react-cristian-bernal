import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

const myProducts = [
  {
      name: "Pro Plan Gatos Cuidado Urinario Urinary 3 Kg",
      price: 142.95,
      img: "/Gallery/pro-plan-urinary-3kg-min.jpg",
      stock: 10,
      category: "alimento"
  },
  {
      name: "Pedigree High Protein Alimento Completo y Balanceado 4 Kg",
      price: 72.8,
      img: "/Gallery/pedigree-high-protein-4kg-min.jpg",
      stock: 10,
      category: "alimento"
  },
  {
      name: "Max Professional Line Perros Senior Pollo y Arroz 15 Kg",
      price: 223.6,
      img: "/Gallery/max-senior-pollo-arroz-15kg-min.jpg",
      stock: 10,
      category: "alimento"
  },
  {
      name: "Dog Chow Perros Senior Vida Sana 17 Kg",
      price: 193.5,
      img: "/Gallery/dow-chow-senior-vida-sana-17kg-min.jpg",
      stock: 10,
      category: "alimento"
  },

  {
      name: "BR for CAT Bombonera para gatos reduce bolas de pelo 350 gr",
      price: 22.3,
      img: "/Gallery/br-cat-bombonera-350gr-snack-min.jpg",
      stock: 10,
      category: "snacks"
  },
  {
      name: "Churu Snack Receta de Atún con Salmón x 4 Unds 14 g  (Rosa)",
      price: 13.8,
      img: "/Gallery/churu-atun-salmon-4-14gr.jpg",
      stock: 10,
      category: "snacks"
  },
  {
      name: "Bombonera Delidog Bone por 1 Kg",
      price: 33.6,
      img: "/Gallery/delidog-bombonera-1kg.jpg",
      stock: 10,
      category: "snacks"
  },
  {
      name: "DentaLife Perros Razas Medianas 119 g",
      price: 19.5,
      img: "/Gallery/dentalife-119g.jpg",
      stock: 10,
      category: "snacks"
  },

  {
      name: "Hueso Juguete comestible paleta de cerdo",
      price: 5.5,
      img: "/Gallery/hueso-juguete-paleta-de-cerdo.jpg",
      stock: 10,
      category: "juguetes"
  },
  {
      name: "Pelota Lick And Snak 8 cm",
      price: 48,
      img: "/Gallery/link-and-snack-8cm.jpg",
      stock: 10,
      category: "juguetes"
  },
  {
      name: "Juguete caña de pesca para gatos",
      price: 8,
      img: "/Gallery/cana-pesca-gatos.jpg",
      stock: 10,
      category: "juguetes"
  },

  {
      name: "Maxicat Arena para gatos Aroma a Café 25 Kg",
      price: 78.7,
      img: "/Gallery/maxicat-arena-cafe-25kg.jpg",
      stock: 10,
      category: "accesorios" 
  },
  {
      name: "Collar Felcan ID Talla Única Morado",
      price: 42,
      img: "/Gallery/collar-felcan-unica-morado.jpg",
      stock: 10,
      category: "accesorios"    
  }
]

import { collection, doc, writeBatch } from "firebase/firestore";

const uploadProducts = async () =>{
    const batch = writeBatch(db);
    const productsRef = collection(db, "products");
    myProducts.forEach(product => batch.set(doc(productsRef), product));

    try{
        batch.commit();
    }catch(error){
        console.log(error);
    }
}

// uploadProducts() 



