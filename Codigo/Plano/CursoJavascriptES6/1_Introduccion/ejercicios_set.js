
//Declaracion del conjunto
let usuarios = new Set();
console.log("Conjunto inicial:", usuarios);

// Agregar valores al conjunto
usuarios.add("Juan Pérez");
usuarios.add("Carlos López");
usuarios.add("Ana Martínez");
console.log("Conjunto después de agregar elementos:", usuarios);

// Eliminar un elemento
usuarios.delete("Carlos López"); 
console.log("Conjunto después de eliminar un elemento:", usuarios);

// Eliminar el elemento existente
usuarios.delete("Ana Martínez");
// Agregar el nuevo elemento actualizado 
usuarios.add("Ana Gómez"); 
console.log("Conjunto después de actualizar un elemento:", usuarios);

// Verificar las existencia de elementos sobre el conjunto
console.log("¿El conjunto contiene 'Juan Pérez'?", usuarios.has("Juan Pérez"));
console.log("¿El conjunto contiene 'Carlos López'?", usuarios.has("Carlos López"));

// Iterar sobre un conjunto
for (let usuario of usuarios) {
    console.log("Usuario:", usuario);
}

