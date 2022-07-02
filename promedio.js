
/*
// creamos el arreglo donde se guardan los valores
const lista1=[
100,
200,
300,
500
];


//creamos la variable donde almacenaremos la suma de los valores del arreglo
let sumaLista1 = 0;

//creamos ciclo for para recorrer el arreglo y sumar los valores de cada posicion
for(let i=0; i < lista1.length; i++){
    sumaLista1 = sumaLista1+lista1[i];
}

const promedioLista1 = sumaLista1 / lista1.length;
*/
function calcularMediaAritmetica(lista){
   // let sumaLista = 0;
   // for (let i = 0; i < lista.length; i++){
    //    sumaLista = sumaLista+lista[i];
   // }

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista= sumaLista / lista.length;
     return promedioLista;
}