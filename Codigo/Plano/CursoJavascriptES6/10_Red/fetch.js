// Realiza una solicitud para obtener los usuarios desde una API
fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => {
		// Verifica si la respuesta fue exitosa
		if (!response.ok) {
			throw new Error('Error en la solicitud')
		}
		// Convierte la respuesta a JSON y la retorna
		let data // Variable que almacenará los datos de la respuesta en formato JSON
		return response.json()
	})
	.then(data => {
		// Muestra los datos de los usuarios en la consola
		console.log(data)
	})
	.catch(error => {
		// Muestra el error en caso de fallo
		console.log(error)
	})
