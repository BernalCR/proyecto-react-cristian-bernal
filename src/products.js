
const misProductos = [
    {
        name: "Pro Plan Gatos Cuidado Urinario Urinary 3 Kg",
        price: 142.95,
        img: "./Gallery/pro-plan-urinary-3kg-min.jpg",
        bestSeller: true,
        id: 1,
        stock: 5,
        category: "Alimento"
    },
    {
        name: "Pedigree High Protein Alimento Completo y Balanceado 4 Kg",
        price: 72.8,
        img: "./Gallery/pedigree-high-protein-4kg-min.jpg",
        bestSeller: true,
        id: 2,
        stock: 5,
        category: "Alimento"
    },
    {
        name: "BR for CAT Bombonera para gatos reduce bolas de pelo 350 gr",
        price: 22.3,
        img: "./Gallery/br-cat-bombonera-350gr-snack-min.jpg",
        bestSeller: true,
        id: 5,
        stock: 5,
        category: "Snacks"
    },
    {
        name: "Churu Snack Receta de Atún con Salmón x 4 Unds 14 g  (Rosa)",
        price: 13.8,
        img: "./Gallery/churu-atun-salmon-4-14gr.jpg",
        id: 6,
        stock: 5,
        category: "Snacks"
    },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}


//Actividad after: Agregar el datalle del producto
//Crear una funcion similar a la anterior pero que solo nos retorne un solo item

export const getUnProducto = (id) => {
    return new Promise (resolve =>{
        setTimeout(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 100)
    })

}


export const getProductosPorCategorias = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const producto = misProductos.filter(item => item.idCat === idCategoria)
            resolve(producto)
        }, 100);

    })

}