
class Empleado {
	
	constructor(primerNombre = "", apellidoPaterno = "") {
		
		this._primerNombre = primerNombre
		this._apellidoPaterno = apellidoPaterno
	}
	
	calcularSueldo() {
		return null	
	}
	
	set primerNombre(primerNombre) {
		this._primerNombre = primerNombre
	}
	
	get primerNombre() {
		return this._primerNombre
	}
	
	set apellidoPaterno(apellidoPaterno) {
		this._apellidoPaterno = apellidoPaterno
	}
	
	get apellidoPaterno() {
		return this._apellidoPaterno
	}
	
}

module.exports = Empleado