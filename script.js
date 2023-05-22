const selectCantProdMostrar = document.querySelector ("#cant-productos-mostrar");
const selectCantProdPermitida = document.querySelector("#cant-producto-permitida");
const selectColores = document.querySelector ("#select-colores");

const divInfoMostrada = document.querySelector ("#info-seleccionada");
const divProdMostrados = document.querySelector ("#contenedor-productos");

//Productos a mostrar
const PRODUCTOS = [
    {
        imagen: "https://www.arrichetta.com.ar/wp-content/uploads/2021/07/981-000889-1.jpg",
        nombre: "Auriculares"
      },
      {
        imagen: "https://consumer.huawei.com/content/dam/huawei-cbg-site/south-pacific/ph/mkt/plp/laptops/img/img-0914/matebook-16s-big.jpg",
        nombre: "Laptop"
      },
      {
        imagen: "https://hiperlibertad.vteximg.com.br/arquivos/ids/205011-600-600/CELULAR-XIAOMI-REDMI-NOTE-11-128-GB-1-35732.jpg",
        nombre: "Celular"
      },
      {
        imagen: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-logitech-g203-gaming-lightsync-lila-910005852-0.jpg",
        nombre: "Mouse"
      },
      {
        imagen:"https://medias.musimundo.com/medias/00504002-145244-145244-01-145244-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1NzE4NHxpbWFnZS9qcGVnfGhhMC9oYTYvMTAzODEzODAwMjYzOTgvMDA1MDQwMDItMTQ1MjQ0LTE0NTI0NF8wMS0xNDUyNDRfMDEuanBnX3NpemU1MTV8MzY4Y2U2YzEwZWQyNTc4MGY2MWI5N2M0OTc5YzhkOTI1NmM4YmYwZGVhZTg2YTYzNmEzNTEwM2I0MzliZWNkMw",
        nombre: "Tablet"
      },

      {
        imagen: "https://mexx-img-2019.s3.amazonaws.com/Silla-Gamer-Level-Up-Ares-Pro-2-Rojo_44458_1.jpeg" ,
        nombre: "Silla"
    },
    {
        imagen: "https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-5241700.jpg",
        nombre: "Microfono"
    }
];

/**
 * Muestra un contenedor que dice que opciones selecciono el usuario
 */
function infoCambios() {
   console.log("prueba");
    opcSeleccionada1 = (selectCantProdMostrar.value);
    opcSeleccionada2 = (selectCantProdPermitida.value);
    opcSeleccionada3 = (selectColores.value);

    divInfoMostrada.innerHTML = `
    <p> La cantidad de productos a mostrar es ${opcSeleccionada1} </p>
    <p> La cantidad de productos permitidos a mostrar ${opcSeleccionada2} </p>
    <p> El tema seleccionado es ${opcSeleccionada3} </p>
    `;

    
}
/**
 * Imprime la cantidad de productos en base al numero seleccionado previamente
 */
function generarProductos (){

    divProdMostrados.innerHTML = "";

    for (let i = 0; i < selectCantProdMostrar.value; i++) {
       console.log(`prueba`);

       const producto = PRODUCTOS[i % PRODUCTOS.length];
        divProdMostrados.innerHTML +=`
        <div class="producto">
        <img src="${producto.imagen}" alt="Producto ${i}">
        <h3>${producto.nombre}</h3>
        <p>Opciones de pago:</p>
        <select name="producto" id="producto-mostrado">
          <option value="1">Efectivo</option>
          <option value="2">Débito</option>
          <option value="3">Crédito</option>
        </select>
        <p>Seleccione Cantidad </p>
        <select name ="producto-cant" id="producto-cant-total">
        </select>
        <opction> <br>
        <button>Comprar</button>
        `;
    }

}

function generarCambios (){
    infoCambios();
    generarProductos();
}