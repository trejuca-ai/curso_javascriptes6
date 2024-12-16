// Decorador que no recibe parámetros
// pero que modifica el comportamiento
function modificarNombre(target, context) {
	
	// Añade un inicializador al contexto
	context.addInitializer(function() {
		// Guarda el valor original de la propiedad 'nombre'
		let valorOriginal = this[context.name]
		
		// Define un getter y setter para la propiedad 'nombre'
		Object.defineProperty(this, context.name, {
			// El getter devuelve el valor original
			get() {
				return valorOriginal
			},
			// El setter actualiza el valor original
			set(nuevoValor) {
				valorOriginal = nuevoValor
			}
		})
	})
}

class Usuario {
	
	// Aplica el decorador 'modificarNombre' a la propiedad 'nombre'
	@modificarNombre	
	nombre = 'Pedro'
}

// Crea una instancia de la clase Usuario
const usuario = new Usuario()
// Muestra el valor inicial de la propiedad 'nombre'
console.log(usuario.nombre) // 'Pedro'
// Cambia el valor de la propiedad 'nombre'
usuario.nombre = 'Pablo'
// Muestra el valor actualizado de la propiedad 'nombre'
console.log(usuario.nombre) // 'Pablo'
