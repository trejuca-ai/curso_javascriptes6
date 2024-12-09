const EmpleadoPorComision = require('./EmpleadoPorComision')

class EmpleadoBaseMasComision extends EmpleadoPorComision {
	
	constructor(
		salarioBase = 0.0,
		ventasBrutas = 0.0, 
		tarifaComision = 0.0, 
		primerNombre = "", 
		apellidoPaterno = "") {
			
			super(ventasBrutas, tarifaComision, primerNombre, apellidoPaterno)
			this._salarioBase = salarioBase
		}
	
	calcularSueldo() {
		return super.calcularSueldo() + this._salarioBase	
	}	
	
	set salarioBase(salarioBase) {
		this._salarioBase = salarioBase
	}
	
	get salarioBase() {
		return this._salarioBase
	}
}

module.exports = EmpleadoBaseMasComision