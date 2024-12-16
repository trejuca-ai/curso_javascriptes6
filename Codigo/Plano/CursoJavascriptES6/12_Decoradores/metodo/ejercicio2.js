// Decorador que recibe parámetros
// y que modifica el comportamiento de la 
// función original
function retrasarEjecucion(parameter) {
	
	// Devuelve un decorador
	return function(target, context) {
		// Agrega un inicializador al método
		context.addInitializer(function() {
			// Guarda el método original
			const metodoOriginal = this[context.name]
			// Modifica el método para agregar el retraso
			this[context.name] = function(...args) {
				// Muestra un mensaje antes de ejecutar
				console.log(`Esperando ${parameter} milisegundos antes de ejecutar`)
				// Devuelve una promesa que ejecuta el método original después del retraso
				return new Promise((resolve) => {
					setTimeout(() => {
						// Llama al método original con los argumentos proporcionados
						resolve(metodoOriginal.apply(this, args))
					}, parameter)
				})
			}
		})
	}
}

// Clase Usuario con un método 'imprimir' decorado
class Usuario {
	
	// Aplica el decorador 'retrasarEjecucion' al método 'imprimir' con un retraso de 4000 ms
	@retrasarEjecucion(4000)
	imprimir() {
		console.log('metodo imprimir')
	}
}

// Crea una instancia de 'Usuario' y llama al método 'imprimir'
const usuario = new Usuario()
usuario.imprimir()
	.then(() => {
		// Después del retraso, muestra este mensaje
		console.log('Metodo despues del retraso')
	})
