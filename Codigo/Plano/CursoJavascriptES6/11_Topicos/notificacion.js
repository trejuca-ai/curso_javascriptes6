// Referencia al botón para solicitar el permiso de notificación
const botonNtificacion = document.getElementById('solicitarPermisoNotificacion')

// Referencia al botón para visualizar la notificación
const botonVerNoti = document.getElementById('verNotificacion')

// Evento que solicita el permiso para mostrar notificaciones
botonNtificacion.addEventListener('click', function() {
	// Verifica si el navegador soporta las notificaciones
	if ("Notification" in window) {
		console.log('permisos concedidos')
		// Solicita el permiso para mostrar notificaciones
		Notification.requestPermission()
			.then(permiso => {
				// Muestra el permiso concedido en la consola
				console.log(permiso)
			})
	}
})

// Evento que muestra una notificación si se tiene permiso
botonVerNoti.addEventListener('click', function() {
	// Muestra el estado actual del permiso para notificaciones
	console.log(Notification.permission)

	// Muestra la notificación si el permiso fue concedido
	new Notification('Esta es la notificacion')
})
