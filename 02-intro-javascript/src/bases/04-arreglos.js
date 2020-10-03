
// Arreglos en JS

// Esta forma de Array es la única recomendada en Js, 
// se crea un array de 100 elementos vacios
// No obstante se pude pushear
const arreglo = new Array(100);
arreglo.push(1);
console.log(arreglo);

// Lo recomenedad es

const arreglo2 = [1,2,3,4];
console.log(arreglo2);


let arreglo3 =[`${arreglo2} 5`];
console.log(arreglo3);

arreglo3 =[...arreglo2, 5];
console.log(arreglo3);


// numero es cada uno de los valores de arreglo2(equivalente a la i de for)
const arreglo4 = arreglo3.map( function(numero){
    return numero * 2;
});
console.log(arreglo4);