// Decorador que recibe parametros
// y que modifica el comportamiento

// Decorador que agrega un prefijo al nombre de la clase objetivo
function agregarPrefijo(parameter) {
    // Retorna un decorador que envuelve la clase objetivo
    return function(target, context) {
        // Retorna una nueva clase que extiende la clase original
        return class extends target {
            // Constructor que agrega el prefijo al nombre
            constructor(...args) {
                super(...args)
                // Agrega el prefijo al nombre
                this.nombre = `${parameter} ${this.nombre}`
            }
        }
    }
}

// Aplicación del decorador 'agregarPrefijo' con el prefijo 'Sr.' a la clase 'Usuario'
@agregarPrefijo('Sr.')
class Usuario {
    // Constructor que inicializa la propiedad 'nombre'
    constructor(nombre) {
        this.nombre = nombre
    }
}

// Crea una instancia de 'Usuario' con el nombre 'Juan'
const usuario = new Usuario('Juan')
// Muestra el nombre con el prefijo agregado: 'Sr. Juan'
console.log(usuario.nombre)
