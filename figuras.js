//codigo del cuadrado
console.group("cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden "+ ladoCuadrado+ "cm");

//la variable perietroCuadrado la vamos a convertir en funcion para que podamos ingresar dartos por medio del teclado.
//const perimetroCuadrado = ladoCuadrado * 4;

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("El perimetro del cuadrado es: "+perimetroCuadrado+" cm");

//const area = ladoCuadrado * ladoCuadrado;
//console.log("El área del cuadrado es: "+ area+" cm cuadrado");
function areaCuadrado(lado){
    return lado*lado;
}

console.groupEnd();

//codigo del triangulo

function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
}

function areaTriangulo (base,altura){
    return (base*altura)/2
}

function alturaTrianguloIsoseles(lado1, lado2, base,){
        if(lado1===lado2 && lado1 != base 
           || lado1===base && lado1!= lado2
           || lado2===base && lado2!= lado1){

            return ((lado1*lado1)-(base*base))/4;
            console.log("Triangulo isoceles");
        } else  
             console.log("NO ES TRIANGULO ISOCELES");
                
}

//console.group("Triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const base = 4;
//const alturaTriangulo = 5.5;

//console.log("Los lados del triángulo miden: "
  //          +ladoTriangulo1+" cm , "
    //        +ladoTriangulo2+" cm, "
      //      +base+" cm"
        //    );
//console.log("La altura del triangulo es : "
  //          +alturaTriangulo+" cm"
    //        );

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + base;
//console.log("El perímetro del triángulo es "+perimetroTriangulo);

//const areaTriangulo = (base * alturaTriangulo) / 2;
//console.log("El área del triángulo es :"+ areaTriangulo+" cm cuadrados");
//console.groupEnd();

//codigo del circulo

const pi = Math.PI;
function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

function areaCirculo(radio){
    return pi * (radio*radio);
}

//console.group("Circulos");

//const radioCirculo = 4;
//console.log("el radio del circulo es: "+ radioCirculo+" cm");
//const diametroCirculo = radioCirculo * 2;
//console.log("El diámetro del circulo es "+diametroCirculo+" cm");

//console.log("el valor de PI es "+pi);
//const perimetroCirculo = diametroCirculo * pi;
//console.log("El perímetro del circulo es "+perimetroCirculo+ " cm");
//const areaCirculo = pi*(radioCirculo*radioCirculo);
//console.log("El area del circulo es "+ areaCirculo);
//console.groupEnd();
