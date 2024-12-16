// Decorador a nivel de clase, sin parametros
// que modifica el comportamiento

// Decorador que agrega la propiedad 'tiempo' con la fecha y hora actual al objeto
function agregarTiempo(target, context) {
    // Devuelve una clase extendida que agrega la propiedad 'tiempo'
    return class extends target {
        constructor(...args) {
            // Llama al constructor de la clase base
            super(...args)
            // Agrega la propiedad 'tiempo' con la fecha y hora actuales
            this.tiempo = new Date()
        }
    }        
}

// Clase Usuario con el decorador 'agregarTiempo' aplicado
@agregarTiempo
class Usuario {
    
    // Constructor que recibe el nombre y lo asigna a la propiedad 'nombre'
    constructor(nombre) {
        this.nombre = nombre
    }
}

// Instancia un nuevo objeto de la clase Usuario con el nombre 'Juan'
const usuario = new Usuario('Juan')

// Imprime el nombre y el tiempo (fecha y hora actuales) del usuario
console.log(usuario.nombre)  // 'Juan'
console.log(usuario.tiempo)  // Muestra la fecha y hora actuales
