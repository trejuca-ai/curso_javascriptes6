const tablaComponent = {
	tabla: null,
	id: 'tabla-usuarios',
	nombresColumnas: {},
	construirTabla: function(nombresColumnas) {
	
		const contenedorTabla = document.getElementById('container-table')	
		const tablaTemp = document.getElementById(this.id)
		
		if (tablaTemp === null) {
			this.tabla = document.createElement('table')
			this.tabla.id = this.id
			this.tabla.setAttribute('class','table table-hover')
			
			const encabezado = this.tabla.createTHead().insertRow()
			this.nombresColumnas = nombresColumnas
			
			Object.keys(nombresColumnas).forEach((nombre, indice) => {
				encabezado.insertCell(indice).innerHTML = `<b>${nombresColumnas[nombre]}</b>`
			})
			
			contenedorTabla.appendChild(this.tabla)
		}
	},
	construirFila: function() {
		const fila = this.tabla.insertRow()
		const celdas = {}
		
		Object.keys(this.nombresColumnas).forEach(function(llave, indice) {
			celdas[llave] = fila.insertCell(indice)
		})
		return celdas
	},
	actualizarTabla: function(data) {

		const fila = this.construirFila()
		Object.keys(fila).forEach(function(celda) {
			if (data[celda]) {
				fila[celda].innerHTML = data[celda]
			}
		})
		
		fila['acciones'].appendChild(function() {
			const linkEliminar = document.createElement('a')
			
			linkEliminar.innerText = 'Eliminar'
			linkEliminar.href = '#'
			
			return linkEliminar
		})
	}
}