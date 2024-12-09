const Empleado = require('./Empleado')

class EmpleadoPorHoras extends Empleado {
	
	constructor(
		sueldo = 0.0, 
		horas = 0, 
		primerNombre = "", 
		apellidoPaterno = "") {
			
			super(primerNombre, apellidoPaterno)
			this._sueldo = sueldo
			this._horas = horas
		}
	
	calcularSueldo() {
		if (this._horas <= 40) {
			return this._sueldo * this._horas
		}
		return 40 * this._sueldo + (this._horas - 40) * this._sueldo * 1.5
	}
	
	set sueldo(sueldo) {
		this._sueldo = sueldo
	}
	
	get sueldo() {
		return this._sueldo
	}
	
	set horas(horas) {
		this._horas = horas
	} 
	
	get horas() {
		return this._horas
	}
}

module.exports = EmpleadoPorHoras