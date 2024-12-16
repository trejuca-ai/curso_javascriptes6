// Decorador que valida el rango de un valor
function validarRango(min, max) {
	return function(target, context) {

		// Función que valida si la edad está dentro del rango permitido
		function validar(edad) {
			// Verifica si la edad es un número entero y si está dentro del rango
			if (!Number.isInteger(edad) ||
				(edad < min || edad > max)) {
				// Si no cumple con los requisitos, retorna falso
				return false		
			}
			// Si cumple con los requisitos, retorna verdadero
			return true
		}

		// Añade un inicializador que modifica el comportamiento de la propiedad
		context.addInitializer(function() {
			// Guarda el valor original de la propiedad 'edad'
			let edadOriginal = this[context.name]
			
			// Si el valor original no es válido, lanza un error
			if (!validar(edadOriginal)) throw new Error(
				'Valor invalido de la propiedad'
			)
			
			// Define un getter y setter para la propiedad 'edad'
			Object.defineProperty(this, context.name, {
				// El getter devuelve el valor original
				get() {
					return edadOriginal		
				},
				// El setter valida la nueva edad antes de asignarla
				set(nuevaEdad) {
					// Si la nueva edad es válida, la asigna
					if (validar(nuevaEdad)) {
						edadOriginal = nuevaEdad
					} else {
						// Si no es válida, lanza un error
						throw new Error(
							'Valor invalido de la propiedad'
						)
					}
				}
			})
		})
	}
}

class Usuario {
	
	// Aplica el decorador 'validarRango' a la propiedad 'edad'
	@validarRango(18, 99)	
	edad = 35
}

// Crea una instancia de la clase Usuario
const usuario = new Usuario()
// Muestra el valor de la propiedad 'edad'
console.log(usuario.edad) // 35

// Cambia el valor de la propiedad 'edad' a 99
usuario.edad = 99
console.log(usuario.edad) // 99
