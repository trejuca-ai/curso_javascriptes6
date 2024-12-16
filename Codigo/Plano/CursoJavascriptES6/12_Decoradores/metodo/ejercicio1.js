// Decorador que modifica el comportamiento
// y que no recibe parámetros
function logger(target, context) {
    // Verifica si el decorador está aplicado a un método
    if (context.kind === 'method') {
        // Agrega un inicializador para el método
        context.addInitializer(function() {
            // Guarda el método original
            const metodoOriginal = this[context.name]
            // Modifica el método para agregar el log
            this[context.name] = function(...args) {
                // Muestra el registro de la fecha y hora en que se invoca el método
                console.log('registro a las: ', new Date())
                // Llama al método original con los argumentos proporcionados
                return metodoOriginal.apply(this, args)
            }
        })
    }
}

// Clase Usuario con un método 'imprimir' decorado
class Usuario {
    // Aplica el decorador 'logger' al método 'imprimir'
    @logger
    imprimir() {
        console.log('metodo imprimir')
    }
}

// Crea una instancia de 'Usuario' y llama al método 'imprimir'
const usuario = new Usuario()
usuario.imprimir()
