const selectCantProdMostrar = document.querySelector("#cant-productos-mostrar");
const selectCantProdPermitida = document.querySelector("#cant-producto-permitida");
const selectColores = document.querySelector("#select-colores");

const divInfoMostrada = document.querySelector("#info-seleccionada");
const divProdMostrados = document.querySelector("#contenedor-productos");

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
        imagen: "https://medias.musimundo.com/medias/00504002-145244-145244-01-145244-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1NzE4NHxpbWFnZS9qcGVnfGhhMC9oYTYvMTAzODEzODAwMjYzOTgvMDA1MDQwMDItMTQ1MjQ0LTE0NTI0NF8wMS0xNDUyNDRfMDEuanBnX3NpemU1MTV8MzY4Y2U2YzEwZWQyNTc4MGY2MWI5N2M0OTc5YzhkOTI1NmM4YmYwZGVhZTg2YTYzNmEzNTEwM2I0MzliZWNkMw",
        nombre: "Tablet"
    },

    {
        imagen: "https://mexx-img-2019.s3.amazonaws.com/Silla-Gamer-Level-Up-Ares-Pro-2-Rojo_44458_1.jpeg",
        nombre: "Silla"
    },
    {
        imagen: "https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-5241700.jpg",
        nombre: "Microfono"
    },
    {
        imagen: "https://arsonyb2c.vtexassets.com/arquivos/ids/362074/PlayStation-5-DualShock.jpg?v=638162215101070000",
        nombre: "Playstation 5"
    },
    {
        imagen: "https://media-cdn.bnn.in.th/3866/Switch-H-New-Nintendo-Switch-Console-Neon-Red-Blue-1-square_medium.jpg",
        nombre: "Nintendo Switch"
    },
    {
        imagen: "https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_SL1500_.jpg",
        nombre: "Xbox Series S"
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
 * Imprime la cantidad de productos y en base al numero seleccionado previamente
 */
function generarProductos() {

    divProdMostrados.innerHTML = "";
    const cantidadProductos = parseInt(selectCantProdMostrar.value);

    for (let i = 0; i < cantidadProductos; i++) {

        producto = PRODUCTOS[i];

        let opcionesCantidad = "";
        const cantidadPermitida = parseInt(selectCantProdPermitida.value);

    for (let j = 1; j <= cantidadPermitida; j++) {
      opcionesCantidad += `<option value="${j}">${j}</option>`;
    }
        divProdMostrados.innerHTML += `
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
        <select name="producto-cant" id="producto-cant-total">
        ${opcionesCantidad}
        </select>
        <br>
        <button>Comprar</button>
        </div>
        `;
    
    }

}


 /**
  * Llama a las dos anteriores funciones al hacer clic
  */
function generarCambios() {
    infoCambios();
    generarProductos();
    
}