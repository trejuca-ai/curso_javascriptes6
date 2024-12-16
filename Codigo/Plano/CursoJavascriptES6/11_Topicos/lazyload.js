// Escucha cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
	// Crea una nueva instancia de IntersectionObserver
	const observador = new IntersectionObserver(entries => {
		// Muestra en consola las entradas observadas
		console.log(entries)
	})
	
	// Observa el elemento con la clase '.cargar'
	observador.observe(document.querySelector('.cargar'))
})
