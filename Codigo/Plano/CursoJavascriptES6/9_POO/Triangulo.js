// Importa la clase base FiguraBidimensional
const FiguraBidimensional = require('./FiguraBidimensional');

class Triangulo extends FiguraBidimensional {
    
    // Constructor que inicializa la base, altura, area y perimetro
    constructor(base = 0.0, altura = 0.0, area = 0.0, perimetro = 0.0) {
		// Llama al constructor de la clase base
        super(area, perimetro);
		// Inicializa la base del triángulo 
        this._base = base; 
		// Inicializa la altura del triángulo
        this._altura = altura; 
    }
    
    // Calcula y retorna el área del triángulo
    calcularArea() {
        return (this._base * this._altura) / 2;
    }
    
    // Calcula y retorna el perímetro del triángulo (simplificado para un triángulo equilátero)
    calcularPerimetro() {
        return 3 * this._base;
    }
}

// Exporta la clase Triangulo para su uso en otros archivos
module.exports = Triangulo;
