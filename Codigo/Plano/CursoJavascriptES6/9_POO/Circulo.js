class Circulo extends FiguraBidimensional {
	
	constructor(radio = 0.0, area = 0.0, perimetro = 0.0) {
		super(area, perimetro)
		this._radio = radio
	}
	
	calcularArea() {
		return Math.PI * Math.pow(this._radio, 2)
	}
	
	calcularPerimetro() {
		return 2 * Math.PI * this._radio
	}
	
	set radio(radio) {
		this._radio = radio
	}
	
	get radio() {
		return this._radio
	}
}