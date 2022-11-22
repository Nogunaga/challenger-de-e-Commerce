import { productosServicios } from "../productos-servicios.js";

const nuevoProducto = (nombre, precio, imagenUrl) =>{
    const card = document.createElement("div");
    const contenido = `
    <div>
    <img src="${imagenUrl}" alt=".">
    <h3>${nombre}</h3>
    <p>${precio}</p>
    </div>
     `

     card.innerHTML = contenido;
     card.classlist.add("card")
     return card
}

const productos = document.querySelector("[datos-productos]");
const render = async () =>{
    try{
        const listasProductos = await productosServicios.listasProductos()
        listasProductos.forEach(element => {
            productos.appendChild(nuevoProducto(element.imagenUrl, element.nombre, element.precio))
            
        });
    }
    catch(error){
        console.log(error)
    }
}

render()