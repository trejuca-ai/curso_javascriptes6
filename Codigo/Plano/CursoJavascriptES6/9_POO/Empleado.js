
class Empleado {
	
	#nss
	
	constructor(primerNombre = "", apellidoPaterno = "") {
		
		if (new.target === Empleado) {
			throw new Error('No es posible instanciar objetos de Empleado')	
		}
		
		this._primerNombre = primerNombre
		this._apellidoPaterno = apellidoPaterno
		this.#nss = "abcde1234"
	}
	
	calcularSueldo() {
		return null	
	}
	
	set primerNombre(primerNombre) {
		console.log('desde set')
		this._primerNombre = primerNombre
	}
	
	get primerNombre() {
		//console.log('desde metodo get')
		return this._primerNombre
	}
	
	set apellidoPaterno(apellidoPaterno) {
		this._apellidoPaterno = apellidoPaterno
	}
	
	get apellidoPaterno() {
		return this._apellidoPaterno
	}
	
	set nss(nss) {
		this.#nss = nss
	}
	
	get nss() {
		return this.#nss
	}
}

module.exports = Empleado