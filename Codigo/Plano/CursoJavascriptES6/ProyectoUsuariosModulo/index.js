import { tablaComponent } from './tabla.js'

const API_USARIO = "users"
const URL_API = "https://jsonplaceholder.typicode.com"
/**
 * Consultar la API de usuarios
 */
export const consultarUsuario = async () => {
	
	const id = document.querySelector("#busqueda").value
	
	try {
		
		const usuario = await fetch(`${URL_API}/${API_USARIO}/${id}`)
		
		if (!usuario.ok) {
			throw new Error(`No se encontro el usuario con el id: ${id}`)
		}
		
		const usuarioJson = await usuario.json()
		cargarUsuario(usuarioJson)
		
	} catch(error) {
		alert(error)
	}
}

/**
 * Cargar los datos del usuario en el formulario
 * 
 * @param {datos}	datos Objeto que representa
 * 					los datos del usuario 
 */
export const cargarUsuario = (datos) => {

	Object.keys(datos).forEach((llave) => {
		let nodo = document.getElementById(llave)
		if (nodo !== null) {
			nodo.value = datos[llave]
		}
	})
}

/**
 * Guardar el usuario del formulario en localstorage
 * 
 */
export const guardarUsuario = () => {
	
	//Validar datos antes de guardar
	if (validarFormulario()) {
		alert("Revise por favor los campos del formulario")
		return
	}
	
/*	validarFormulario() && (
		alert("Revise por favor los campos del formulario")
		return
	)*/

	const {usuario} = leerFormulario()
	console.log(usuario)
	localStorage.setItem(
		usuario.id,
		JSON.stringify(usuario)
	)

	inicializarAplicacion()
}

export const inicializarAplicacion = () => {
	
	tablaComponent.destruirTabla(tablaComponent.id)

	if (localStorage.length > 0) {
		const {nombresColumnas} = leerFormulario()
		tablaComponent.construirTabla(nombresColumnas)
		
		const llaves = Object.keys(localStorage).sort((a,b) => a - b)
		
		for(let index=0; index < llaves.length; index++) {
			const usuario = JSON.parse(localStorage.getItem(llaves[index]))
			tablaComponent.actualizarTabla(usuario)	
		}
	}
}

const leerFormulario = function(modoValidacion = false) {
	
	const usuario = {}
	const nombresColumnas = {}
	
	document.querySelectorAll(".data-field").forEach(nodo => {
		usuario[nodo.id] = nodo.value
		nombresColumnas[nodo.id] = nodo.dataset.nombreColumna
		if (!modoValidacion) {
			nodo.value = ""
		}
	})
	
	return {
		usuario,
		nombresColumnas
	}
}

const validarFormulario = () => {
	
	// Recuperar datos del formulario y validar
	const valores = leerFormulario(true).usuario
	delete valores.acciones

	return Object.values(valores).includes('')
}

window.consultarUsuario = consultarUsuario;
window.guardarUsuario = guardarUsuario;


