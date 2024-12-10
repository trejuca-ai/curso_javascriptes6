import { inicializarAplicacion, cargarUsuario } from './index.js'

export const tablaComponent = {
	tabla: null,
	nombreColumas: {},
	id: 'tabla',
	construirTabla: function(nombresColumnas) {
		
		const containerTable = document.getElementById("container-table")
		const table = document.getElementById(this.id)
		
		if (table === null) {

			this.tabla = document.createElement("table")
			this.tabla.id = this.id
			this.tabla.border = 1
			this.tabla.setAttribute("class","table table-hover")
			
			const encabezado = this.tabla.createTHead().insertRow()
			this.nombreColumas = nombresColumnas
			
			// Crear la fila de encabezado
			Object.keys(nombresColumnas).forEach(function(nombre, index) {
				encabezado.insertCell(index).innerHTML = `<b>${nombresColumnas[nombre]}</b>`
			})
			
			containerTable.appendChild(this.tabla)
		}
	},
	construirFila: function() {
	
		const fila = this.tabla.insertRow()
		const celdas = {}
		
		Object.keys(this.nombreColumas).forEach(function(key, index) {
			celdas[key] = fila.insertCell(index)
		})
		
		return celdas
	},
	actualizarTabla: function(data) {
		
		const fila = this.construirFila()
		//console.log(data)
		Object.keys(fila).forEach(function(celda) {
			
			if (data[celda]) {
				fila[celda].innerHTML = data[celda]	
			}
		})

		fila['acciones'].appendChild(function(destruyeMiTabla, id) {
			
			// Crear los enlaces
			const linkEliminar = document.createElement("a")
			const linkActualizar = document.createElement("a")
			
			//Configurar enlace de eliminar
			linkEliminar.innerText = "Eliminar"
			linkEliminar.setAttribute("href", "#")
			linkEliminar.setAttribute("class","btn btn-danger")
			linkEliminar.addEventListener("click", function() {
				
				if (localStorage.getItem(data['id']) !== null) {
					localStorage.removeItem(data['id'])
					inicializarAplicacion()
				}
			})
			
			// Configurar enlace de Actualizar
			linkActualizar.innerText = "Editar"
			linkActualizar.setAttribute("href","#")
			linkActualizar.setAttribute("class","btn btn-warning")
			linkActualizar.addEventListener("click", function() {
				cargarUsuario(data)
			})
			
			const containerLinks = document.createElement("div")
			containerLinks.appendChild(linkEliminar)
			containerLinks.appendChild(linkActualizar)
			
			return containerLinks
		}(this.destruirTabla, this.id))
	},
	destruirTabla: function(id) {
		console.log("Entra a la funcion")
		const tabla = document.getElementById(id)
		
		if (tabla !== null) {
			console.log("borra la tabla")
			console.log(tabla)
			tabla.remove()
		}
	}
}






