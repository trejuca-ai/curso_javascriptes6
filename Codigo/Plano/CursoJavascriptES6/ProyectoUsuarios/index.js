
const API = 'users'
const ULR_API = 'https://jsonplaceholder.typicode.com'

const consultarUsuario = async () => {
	
	const id = document.querySelector('#busqueda').value

	try {
		const response = await fetch(`${ULR_API}/${API}/${id}`)
		
		if (!response.ok) {
			throw new Error('No se encontro el usuario con el id: ' + id)
		}
		
		const usuario = await response.json()
		cargarUsuario(usuario)

	} catch(error) {
		alert(error)
	}
}

/**
 * Cargar los datos del usuario en el formulario
 * 
 * @param {datos}	datos. Objeto que representa los
 * 					datos del usuario
 */
const cargarUsuario = (datos) => {
	Object.keys(datos).forEach(llave => {
		let nodo = document.getElementById(llave)
		if (nodo !== null) {
			nodo.value = datos[llave]
		}
	}) 
}

/**
 * Guardar el usuario en localStorage
 */
const guardarUsuario = () => {
	
	if (validarFormulario()) {
		alert('Todos los campos son obligatorios')
		return	
	}
	const {usuario, nombresColumnas} = leerFormulario()
	localStorage.setItem(usuario.id, JSON.stringify(usuario))
	tablaComponent.construirTabla(nombresColumnas)
	tablaComponent.actualizarTabla(usuario)
}

/**
 * Leer los valores desde el formulario
 * 
 */
const leerFormulario = (modoValidacion = false) => {
	
	const usuario = {}
	const nombresColumnas = {}
	
	document.querySelectorAll('.data-field').forEach(nodo => {
		usuario[nodo.id] = nodo.value
		nombresColumnas[nodo.id] = nodo.dataset.nombreColumna
		if (!modoValidacion) {
			nodo.value = ''
		}
	})
	
	return {usuario, nombresColumnas}
}

/**
 * Validar formulario para guardar datos
 */
const validarFormulario = () => {
	const {usuario} = leerFormulario(true)
	delete usuario.acciones
	return Object.values(usuario).includes('')
}



