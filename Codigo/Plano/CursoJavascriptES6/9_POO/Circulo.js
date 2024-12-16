// Importa la clase base FiguraBidimensional
const FiguraBidimensional = require('./FiguraBidimensional');

class Circulo extends FiguraBidimensional {
    
    // Constructor que inicializa el radio, area y perimetro
    constructor(radio = 0.0, area = 0.0, perimetro = 0.0) {
		// Llama al constructor de la clase base
        super(area, perimetro);
		// Inicializa el radio 
        this._radio = radio; 
    }
    
    // Calcula y retorna el area del circulo
    calcularArea() {
        return Math.PI * Math.pow(this._radio, 2);
    }
    
    // Calcula y retorna el perimetro del circulo
    calcularPerimetro() {
        return 2 * Math.PI * this._radio;
    }
    
    // Setter para asignar un nuevo valor al radio
    set radio(radio) {
        this._radio = radio;
    }
    
    // Getter para obtener el valor del radio
    get radio() {
        return this._radio;
    }
}

// Exporta la clase Circulo para su uso en otros archivos
module.exports = Circulo;