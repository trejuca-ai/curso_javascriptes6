
// Creacion de un objeto
let usuario = {
    id: 1,
    nombre: "Juan",
    apellido: "Pérez"
};

console.log("Usuario inicial:", usuario);

// Agregar una nueva propiedad
usuario.edad = 30; 
console.log("Usuario con nueva propiedad:", usuario);

// Eliminar una propiedad existente
delete usuario.apellido; 
console.log("Usuario sin la propiedad 'apellido':", usuario);

// Actualizar el valor de una propiedad
usuario.nombre = "Carlos"; 
console.log("Usuario actualizado:", usuario);