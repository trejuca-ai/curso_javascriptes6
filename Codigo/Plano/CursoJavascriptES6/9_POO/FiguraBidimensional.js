// Importa la clase base Figura
const Figura = require('./Figura');

class FiguraBidimensional extends Figura {
    
    // Constructor que llama al constructor de la clase base Figura
    constructor(area, perimetro) {
		// Inicializa el área y perímetro usando el constructor de Figura
        super(area, perimetro); 
    }
}

// Exporta la clase FiguraBidimensional para su uso en otros archivos
module.exports = FiguraBidimensional;
