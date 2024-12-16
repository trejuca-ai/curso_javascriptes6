// Ejecuta la función verificarConexion cada 5000ms (5 segundos)
setInterval(verificarConexion, 5000)

// Función que verifica la conexión realizando una solicitud HEAD
function verificarConexion() {
	// Realiza una solicitud HEAD a Google (modo 'no-cors' para evitar problemas de CORS)
	fetch('https://www.google.com', {method: 'HEAD', mode: 'no-cors'})
		.then(response => {
			// Si la solicitud tiene éxito, se asume que hay conexión
			console.log('Hay conexion')
			// Dispara el evento 'online' en el objeto window
			window.dispatchEvent(new Event('online'))
		})
		.catch(error => {
			// Si la solicitud falla, se asume que no hay conexión
			console.log('No hay conexion')
			// Dispara el evento 'offline' en el objeto window
			window.dispatchEvent(new Event('offline'))
		})
}

// Escucha el evento 'online' para indicar que la conexión fue restablecida
window.addEventListener('online', function() {
	console.log('Recuperamos la conexion')
})

// Escucha el evento 'offline' para indicar que la conexión se ha perdido
window.addEventListener('offline', function() {
	console.log('Nos quedamos sin conexion')
})
