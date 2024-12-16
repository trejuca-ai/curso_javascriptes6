// Importa la clase base FiguraBidimensional
const FiguraBidimensional = require('./FiguraBidimensional');

class Cuadrado extends FiguraBidimensional {
    
    // Constructor que inicializa el lado, area y perimetro
    constructor(lado = 0.0, area = 0.0, perimetro = 0.0) {
		// Llama al constructor de la clase base
        super(area, perimetro);
		// Inicializa el lado del cuadrado 
        this._lado = lado; 
    }
    
    // Calcula y retorna el area del cuadrado
    calcularArea() {
        return this._lado * this._lado;
    }
    
    // Calcula y retorna el perimetro del cuadrado
    calcularPerimetro() {
        return 4 * this._lado;
    }
    
    // Setter para asignar un nuevo valor al lado
    set lado(lado) {
        this._lado = lado;
    }
    
    // Getter para obtener el valor del lado
    get lado() {
        return this._lado;
    }
}

// Exporta la clase Cuadrado para su uso en otros archivos
module.exports = Cuadrado;