// Decorador que no modifica el comportamiento
// y que recibe parámetros
function fetchData(parameter) {

	// Devuelve un decorador
	return function(target, context) {

		// Guarda el método original
		const metodoOriginal = target
		
		// Devuelve un método decorado asincrónicamente
		return async function(...args) {

			// Muestra un mensaje con la URL que se va a consultar
			console.log('llamando a la api: ', parameter)

			// Toma el primer argumento que se pasa al método
			const usuarioId = args[0]
			// Concatenar el ID del usuario a la URL base
			parameter = `${parameter}${usuarioId}`
			
			// Realiza la consulta a la API
			const response = await fetch(parameter)
			
			// Verifica si la respuesta es exitosa
			if (!response.ok) {
				// Si no es exitosa, lanza un error
				throw new Error('Error al mandar a llamar la api')
			}
			
			// Convierte la respuesta a formato JSON
			const data = await response.json()
			// Llama al método original pasando los datos obtenidos de la API
			return metodoOriginal.apply(this, [...args, data])
		}
	}
}

class Usuario {
	
	// Aplica el decorador 'fetchData' al método 'consultarUsuario'
	@fetchData('https://jsonplaceholder.typicode.com/users/')
	async consultarUsuario(id, data) {
		// Devuelve un objeto con el ID y los datos obtenidos
		return {
			id,
			name: data.name,
			email: data.email
		}
	}
}

// Función asincrónica para probar el método 'consultarUsuario'
(async () => {
	// Crea una instancia de 'Usuario'
	const usuario = new Usuario()
	// Llama al método decorado y pasa un ID de usuario
	const datos = await usuario.consultarUsuario(1)
	// Muestra los datos obtenidos de la API
	console.log(datos)
})()
