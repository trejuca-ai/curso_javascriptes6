async function consultarUsuarios() {
	
	try {
		
		const response = await fetch('https://jsonplaceholder.typicode.com/users')
		
		if (!response.ok) {
			throw new Error('Error en la solicitud')
		}
		
		const data = await response.json()
		return data
	}catch (error) {
		console.log(error)
	} 
}

async function procesarUsuarios() {
	const usuarios = await consultarUsuarios()
	return usuarios
}

console.log((procesarUsuarios()))