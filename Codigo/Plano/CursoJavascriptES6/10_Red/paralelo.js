async function consultarApiSecuencialmente() {
	
	const inicio = performance.now()
	
	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	const resultado = await response.json()
	
	const response2 = await fetch('https://jsonplaceholder.typicode.com/comments')
	const resultado2 = await response2.json()
	
	const final = performance.now()
	
	console.log(`Tiempo de ejecucion sencuencial: ${final - inicio}`)
}

async function consultarApiEnParalelo() {
	
	const inicio = performance.now()
	
	const [respuesta1, respuesta2] = await Promise.all([
		fetch('https://jsonplaceholder.typicode.com/users'),
		fetch('https://jsonplaceholder.typicode.com/comments')
	])
	
	const data1 = await respuesta1.json()
	const data2 = await respuesta2.json()
	
	const final = performance.now()
	console.log(`Tiempo de ejecucion en paralelo1: ${final - inicio}`)
}

async function consultarApiEnParalelo2() {
	
	const inicio = performance.now()
	const urls = [
		'https://jsonplaceholder.typicode.com/users',
		'https://jsonplaceholder.typicode.com/comments'
	]
	
	const respuestas = await Promise.all(urls.map(url => fetch(url)))
	const datas = await Promise.all(respuestas.map(respuesta => respuesta.json()))
	
	const final = performance.now()
	console.log(`Tiempo de ejecucion en paralelo2: ${final - inicio}`)
}

consultarApiSecuencialmente()
consultarApiEnParalelo()
consultarApiEnParalelo2()
