// Función que simula la obtención de datos de forma asíncrona
function fetchData() {
	// Devuelve una nueva promesa
	return new Promise((resolve, reject) => {
		// Simula una operación asíncrona con setTimeout
		setTimeout(() => {
			// Variable que simula si la obtención de datos fue exitosa o no
			const flag = true
			
			// Si flag es true, resuelve la promesa, si es false la rechaza
			if (flag) {
				resolve('Los datos se obtuvieron de forma correcta')
			} else {
				reject('Ocurrio un error en el proceso de obtencion de datos')
			}
		}, 3000) // Tiempo de espera para simular la obtención de datos
	})
}

// Llamada a la función fetchData
fetchData()
	// Encadena una nueva promesa que se resuelve después de 1 segundo
	.then(data => {
		// Define una nueva promesa que se resuelve después de 1 segundo
		const nuevaPromesa = new Promise((resolve) => {
			setTimeout(() => {
				resolve('promesa encadenada de forma correcta')
			}, 1000)
		})
		// Devuelve la nueva promesa
		return nuevaPromesa
	})
	// Maneja la resolución de la segunda promesa
	.then(data2 => {
		// Imprime el resultado de la segunda promesa
		console.log(data2)
	})
	// Maneja los errores de las promesas
	.catch(error => {
		// Imprime el mensaje de error en caso de que haya un rechazo
		console.log('en el catch')
		console.log(error)
	})
