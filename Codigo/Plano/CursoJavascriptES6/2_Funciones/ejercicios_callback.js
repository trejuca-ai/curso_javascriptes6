
// Una funcion que toma otra funcion como argumento y la ejecuta
function saludar(nombre, callback) {
    console.log("Hola, " + nombre);
    callback(); // Llamar al callback
}

saludar("Juan", () => {
    console.log("Bienvenido al sistema.");
});


// Una funcion callback que recibe parametros
function calcular(a, b, callback) {
    return callback(a, b);
}

// Callback para sumar
let suma = calcular(5, 3, (x, y) => x + y);
// Callback para multiplicar 
let producto = calcular(5, 3, (x, y) => x * y); 

console.log("Suma:", suma);
console.log("Producto:", producto);