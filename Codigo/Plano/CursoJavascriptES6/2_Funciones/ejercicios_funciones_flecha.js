
// Función tradicional
function sumar(a, b) {
    return a + b;
}

// Función flecha equivalente
const sumarFlecha = (a, b) => a + b;

console.log(sumar(2, 3)); // 5
console.log(sumarFlecha(2, 3)); // 5

// Si la funcion no recibe parametros, se usa parentesis vacíos.
const saludar = () => console.log("¡Hola!");
saludar();

// Cuando la funcion recibe un solo parametro 
// los parentesis pueden omitirse.
const cuadrado = num => num * num;
console.log(cuadrado(4));

// Si la funcion tiene un cuerpo con varias lineas 
// se debe usar llaves {} y return explícito
const multiplicarYMostrar = (a, b) => {
    const resultado = a * b;
    console.log("Resultado:", resultado);
    return resultado;
};

