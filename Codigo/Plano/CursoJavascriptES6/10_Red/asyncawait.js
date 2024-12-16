// Función que consulta los usuarios desde una API
async function consultarUsuarios() {
	
	try {
		// Realiza la solicitud a la API
		const response = await fetch('https://jsonplaceholder.typicode.com/users')
		
		// Verifica si la respuesta fue exitosa
		if (!response.ok) {
			throw new Error('Error en la solicitud')
		}
		
		// Convierte la respuesta a JSON y la retorna
		const data = await response.json()
		return data
	} catch (error) {
		// Muestra el error en caso de fallo
		console.log(error)
	} 
}

// Función que procesa los usuarios consultados
async function procesarUsuarios() {
	// Llama a la función para obtener los usuarios
	const usuarios = await consultarUsuarios()
	return usuarios
}

// Imprime el resultado de procesar los usuarios
console.log((procesarUsuarios()))
