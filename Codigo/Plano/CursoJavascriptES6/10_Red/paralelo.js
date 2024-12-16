// Función que consulta la API secuencialmente
async function consultarApiSecuencialmente() {
	// Marca el inicio del tiempo de ejecución
	const inicio = performance.now()

	// Realiza la solicitud a la API de usuarios
	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	// Convierte la respuesta a JSON
	const resultado = await response.json()

	// Realiza la solicitud a la API de comentarios
	const response2 = await fetch('https://jsonplaceholder.typicode.com/comments')
	// Convierte la respuesta de comentarios a JSON
	const resultado2 = await response2.json()

	// Marca el final del tiempo de ejecución
	const final = performance.now()

	// Muestra el tiempo de ejecución secuencial
	console.log(`Tiempo de ejecucion sencuencial: ${final - inicio}`)
}

// Función que consulta las APIs en paralelo utilizando Promise.all
async function consultarApiEnParalelo() {
	// Marca el inicio del tiempo de ejecución
	const inicio = performance.now()

	// Realiza las solicitudes en paralelo
	const [respuesta1, respuesta2] = await Promise.all([
		fetch('https://jsonplaceholder.typicode.com/users'),
		fetch('https://jsonplaceholder.typicode.com/comments')
	])

	// Convierte las respuestas a JSON
	const data1 = await respuesta1.json()
	const data2 = await respuesta2.json()

	// Marca el final del tiempo de ejecución
	const final = performance.now()
	
	// Muestra el tiempo de ejecución en paralelo
	console.log(`Tiempo de ejecucion en paralelo1: ${final - inicio}`)
}

// Función que consulta las APIs en paralelo utilizando un array de URLs
async function consultarApiEnParalelo2() {
	// Marca el inicio del tiempo de ejecución
	const inicio = performance.now()

	// Array de URLs para las APIs
	const urls = [
		'https://jsonplaceholder.typicode.com/users',
		'https://jsonplaceholder.typicode.com/comments'
	]

	// Realiza las solicitudes en paralelo
	const respuestas = await Promise.all(urls.map(url => fetch(url)))
	// Convierte las respuestas a JSON
	const datas = await Promise.all(respuestas.map(respuesta => respuesta.json()))

	// Marca el final del tiempo de ejecución
	const final = performance.now()
	
	// Muestra el tiempo de ejecución en paralelo
	console.log(`Tiempo de ejecucion en paralelo2: ${final - inicio}`)
}

// Llama a las funciones para medir los tiempos de ejecución
consultarApiSecuencialmente()
consultarApiEnParalelo()
consultarApiEnParalelo2()
