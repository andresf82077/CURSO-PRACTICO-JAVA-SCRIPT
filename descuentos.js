//const precioOriginal = 120;
//const porcentajeDescuento = 18;


function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

// esta funcion se crea para cuando demos click en el boton para calcular descuento
function onClickButtonPriceDiscount(){
    //creamos estas variables para leer y tomar los valores digitados por el usuario para hacer los calculos
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    //llamamos a la funcion que va a calcular los descuentos con los parametros recibidos del usaurio
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio condescuento es: $" + precioConDescuento;
}

//console.log("El precio original es "+ precioOriginal);

/*
console.log({
    precioOriginal,
    porcentajeDescuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
});
*/

