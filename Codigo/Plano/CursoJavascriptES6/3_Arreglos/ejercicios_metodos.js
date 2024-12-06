
// forEach. Ejecuta una funcion por cada elemento del arreglo.
let numeros = [1, 2, 3, 4, 5];
// Imprime: 2, 4, 6, 8, 10
numeros.forEach(num => console.log(num * 2)); 


// map. Crea un nuevo arreglo aplicando una funcion a cada elemento.
let cuadrados = numeros.map(num => num ** 2);
// [1, 4, 9, 16, 25]
console.log(cuadrados); 


// filter. Crea un nuevo arreglo con los elementos que cumplen una condicion
let pares = numeros.filter(num => num % 2 === 0);
// [2, 4]
console.log(pares); 


// reduce. Reduce los elementos del arreglo a un unico valor
let suma = numeros.reduce((acumulador, num) => acumulador + num, 0);
// Suma 15
console.log(suma); 


// find. Devuelve el primer elemento que cumple una condicion
let mayorQueTres = numeros.find(num => num > 3);
// 4
console.log(mayorQueTres); 



// findIndex. Devuelve el indice del primer elemento que cumple la condicion.
let indice = numeros.findIndex(num => num > 3);
// 3
console.log(indice);



// fill. Llena todos los elementos de un arreglo con un valor
let rellenado = new Array(5).fill(0);
console.log(rellenado); // [0, 0, 0, 0, 0]



// values. Devuelve un iterador para los valores del arreglo
let iteradorValores = numeros.values();
for (let valor of iteradorValores) {
    console.log(valor); // 1, 2, 3, 4, 5
}


//keys. Devuelve un iterador para los indices del arreglo
let iteradorClaves = numeros.keys();
for (let clave of iteradorClaves) {
    console.log(clave); // 0, 1, 2, 3, 4
}


// slice. Devuelve una copia de una porción del arreglo.
// Desde el índice 1 hasta el 4 (sin incluir)
let subArreglo = numeros.slice(1, 4); 
console.log(subArreglo); // [2, 3, 4]



// push. Agrega uno o mas elementos al final del arreglo 
// y devuelve la nueva longitud.
numeros.push(6);
console.log(numeros); // [1, 2, 3, 4, 5, 6]



// shift. Elimina y devuelve el primer elemento del arreglo
let primerElemento = numeros.shift();
console.log(primerElemento); // 1
console.log(numeros); // [2, 3, 4, 5, 6]



// pop. Elimina y devuelve el ultimo elemento del arreglo
let ultimoElemento = numeros.pop();
console.log(ultimoElemento); // 6
console.log(numeros); // [2, 3, 4, 5]


