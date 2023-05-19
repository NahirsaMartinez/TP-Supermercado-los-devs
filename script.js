const selectCantProdMostrar = document.querySelector ("#cant-productos-mostrar");
const selectCantProdPermitida = document.querySelector("#cant-producto-permitida");
const selectColores = document.querySelector ("#select-colores");

const divInfoMostrada = document.querySelector ("#info-seleccionada");
const divProdMostrados = document.querySelector ("#contenedor-productos");

//Productos a mostrar
const IMG_PROD_1 = "https://www.arrichetta.com.ar/wp-content/uploads/2021/07/981-000889-1.jpg";
const IMG_PROD_2 = "https://consumer.huawei.com/content/dam/huawei-cbg-site/south-pacific/ph/mkt/plp/laptops/img/img-0914/matebook-16s-big.jpg";
const IMG_PROD_3 = "https://hiperlibertad.vteximg.com.br/arquivos/ids/205011-600-600/CELULAR-XIAOMI-REDMI-NOTE-11-128-GB-1-35732.jpg";


/**
 * Muestra un contenedor que dice que opciones selecciono el usuario
 */
function generarCambios() {
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