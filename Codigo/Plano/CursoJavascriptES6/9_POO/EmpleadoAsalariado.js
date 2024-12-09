const Empleado = require('./Empleado')

class EmpleadoAsalariado extends Empleado {
	
	constructor(salarioSemanal = 0.0, primerNombre = "", apellidoPaterno = "") {
		super(primerNombre, apellidoPaterno)
		this._salarioSemanal = salarioSemanal
	}
	
	calcularSueldo() {
		return this._salarioSemanal	
	}
	
	set salarioSemanal(salarioSemanal) {
		this._salarioSemanal = salarioSemanal
	}
	
	get salarioSemanal() {
		return this._salarioSemanal
	}
}

module.exports = EmpleadoAsalariado