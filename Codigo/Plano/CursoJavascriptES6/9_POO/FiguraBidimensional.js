const Figura = require('./Figura')

class FiguraBidimensional extends Figura {
	
	constructor(area, perimetro) {
		super(area, perimetro)
	}
}

module.exports = FiguraBidimensional