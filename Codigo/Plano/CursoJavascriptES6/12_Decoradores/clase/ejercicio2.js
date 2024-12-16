// Decorador que recibe parametros
// y que no modifica el comportamiento

// Mapa que lleva el registro de las clases registradas por su nombre
const registroDeClases = new Map()

// Decorador que registra la clase en 'registroDeClases' utilizando un parámetro como clave
function llevarRegistro(parameter) {
    // Retorna una función que se ejecutará cuando se aplique el decorador
    return function(target, context) {
        // Almacena la clase en el mapa con el parámetro como clave
        registroDeClases.set(parameter, target)
        console.log('se registra clase con llave: ', parameter)
    }
}

// Aplicación del decorador 'llevarRegistro' a la clase 'Usuario', con la clave 'Usuario'
@llevarRegistro('Usuario')
class Usuario {
    // Constructor que inicializa la propiedad 'nombre'
    constructor(nombre) {
        this.nombre = nombre
    }
}

// La clase 'Persona' está comentada para evitar que el decorador la registre
//@llevarRegistro('Persona')
class Persona {
    // Constructor que inicializa la propiedad 'edad'
    constructor(edad) {
        this.edad = edad
    }
}

// Recupera la clase registrada con la clave 'Usuario' del mapa
const UsuarioClase = registroDeClases.get('Usuario')
// Crea una instancia de la clase 'Usuario' usando el constructor de 'UsuarioClase'
const usuario = new UsuarioClase('Laura')
console.log(usuario.nombre)  // Muestra 'Laura'

// Recupera la clase registrada con la clave 'Persona' del mapa
const PersonaClase = registroDeClases.get('Persona')
// Crea una instancia de la clase 'Persona' usando el constructor de 'PersonaClase'
const persona = new PersonaClase(40)
console.log(persona.edad)  // Muestra 40
