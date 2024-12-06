// Declaracion de un mapa
let usuarios = new Map();
console.log("Mapa inicial:", usuarios);

// Agregar valores al mapa
usuarios.set(1, { nombre: "Juan", apellido: "Pérez" });
usuarios.set(2, { nombre: "Carlos", apellido: "López" });
usuarios.set(3, { nombre: "Ana", apellido: "Martínez" });
console.log("Mapa después de agregar elementos:", usuarios);

// Eliminar el elemento con la clave 2
usuarios.delete(2); 
console.log("Mapa después de eliminar un elemento:", usuarios);

// Actualizar el valor con clave 3
usuarios.set(3, { nombre: "Ana", apellido: "Gómez" }); 
console.log("Mapa después de actualizar un elemento:", usuarios);

// Verificar si una clave existe en el mapa
console.log("¿El mapa contiene la clave 1?", usuarios.has(1));
console.log("¿El mapa contiene la clave 2?", usuarios.has(2));

// Obtener un valor del mapa
console.log("Valor con clave 1:", usuarios.get(1));

// Iterar sobre el mapa
for (let clave of usuarios.keys()) {
    console.log("Clave:", clave);
}

// Iterar por claves
for (let clave of usuarios.keys()) {
    console.log("Clave:", clave);
}

// Iterar por valores
for (let valor of usuarios.values()) {
    console.log("Valor:", valor);
}

// Iterar por pares clave-valor
for (let [clave, valor] of usuarios.entries()) {
    console.log(`Clave: ${clave}, Valor:`, valor);
}