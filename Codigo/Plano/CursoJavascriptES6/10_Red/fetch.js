fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => {
		if (!response.ok) {
			throw new Error('Error en la solicitud')
		}
		return response.json()
	})
	.then(data => {
		console.log(data)
	})
	.catch(error => {
		console.log(error)
	})