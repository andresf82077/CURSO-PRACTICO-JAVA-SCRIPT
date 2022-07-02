


//*********+FUNCIONES HELPERS, QUE NOS AYUDAN EN CUALQUIER PROGRAMA AUNQUE NO SEAN DE LA LOGICA DEL PROBLEMA COMO TAL */
//vamos a calcular la mediana de los salarios. debemos primero verificar si el numero es par o impar
function esPar(numerito){
    return (numerito % 2 === 0 );
     
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
 //*************************** */

//CALCULADORA DE MEDIANA
 //vamos a calcular la mediana general

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }

    
}


//mediana general
//creamos un array de salario para que haga una busqueda en el array medianasalrios y solo me traiga y almacene en este array que voy a crear, los salarios solamente

const salariosCol = colombia.map(
    //creamos funcion anonima
    function (personita){
        return personita.salary;
    }
);

//ordenamos el arreglo. esta es la manera de ordenar la info
const salariosColSorted = salariosCol.sort(
    //siempres debemos pasarle a la funcion anonima 2 paramtros
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);


//MEDIANA DEL TOP 10%

const spliceStart = (salariosColSorted.length * 90)/ 100;
const spliceCount = salariosColSorted - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});