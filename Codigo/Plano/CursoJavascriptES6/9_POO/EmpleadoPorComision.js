const Empleado = require('./Empleado')

class EmpleadoPorComision extends Empleado {
	
	constructor(
		ventasBrutas = 0.0, 
		tarifaComision = 0.0, 
		primerNombre = "", 
		apellidoPaterno = "") {
			
			super(primerNombre, apellidoPaterno)
			this._ventasBrutas = ventasBrutas
			this._tarifaComision = tarifaComision
		}
	
	calcularSueldo() {
		return this._tarifaComision * this._ventasBrutas
	}	
	
	set ventasBrutas(ventasBrutas) {
		this._ventasBrutas = ventasBrutas
	}
	
	get ventasBrutas() {
		return this._ventasBrutas
	}
	
	set tarifaComision(tarifaComision) {
		this._tarifaComision = tarifaComision
	}
	
	get tarifaComision() {
		return this._tarifaComision
	}
}

module.exports = EmpleadoPorComision