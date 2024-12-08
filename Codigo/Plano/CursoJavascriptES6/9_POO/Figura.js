class Figura {
	
	constructor(area = 0.0, perimetro = 0.0) {
		this._area = area
		this._perimetro = perimetro
	}
	
	calcularArea() {
		return -1
	}
	
	calcularPerimetro() {
		return -1
	}
	
	set area(area) {
		this._area = area
	}
	
	get area() {
		return this._area
	}
	
	set perimetro(perimetro) {
		this._perimetro = perimetro
	}

	get perimetro() {
		return this._perimetro
	}
}