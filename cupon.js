


function evaluarCupon(valor, cupon){
   
        const porcentajePrecioConDescuento = 100 - cupon;
        const precioConDescuento = (valor * porcentajePrecioConDescuento) / 100;
         return precioConDescuento;
}


function calculoDescuento(){
    const inputValor = document.getElementById("InputCompra");
    const valorValue = inputValor.value;

    const inputCupon = document.getElementById("InputCupon");
    const cuponValue = inputCupon.value;
    const resultP = document.getElementById("ResultP");

    if(cuponValue==15 || cuponValue==30 || cuponValue==50){
        const precioConDescuento = evaluarCupon(valorValue, cuponValue);
        
        resultP.innerText = "el  % de descuento es: "+ cuponValue + 
        ", el valor sin descuento es: "+ valorValue + 
        "el descuento es: "+(valorValue-precioConDescuento)+
        " y el valor total a pagar es : "+precioConDescuento;
    } else{
        resultP.innerText = "EL CUPON ES INVALIDO, INTENTE NUEVAENTE CON UNO VALIDO ";
    }
   

}