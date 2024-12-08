class Triangulo extends FiguraBidimensional {
	
	constructor(base = 0.0, altura = 0.0, area = 0.0, perimetro = 0.0) {
		super(area, perimetro)
		this._base = base
		this._altura = altura
	}
	
	calcularArea() {
		return (this._base * this._altura) / 2
	}
	
	calcularPerimetro() {
		return 3 * this._base
	}
}