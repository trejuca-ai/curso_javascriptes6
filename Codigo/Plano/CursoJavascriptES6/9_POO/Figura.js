// Clase base Figura, que sirve como plantilla para otras figuras geométricas
class Figura {
    
    // Constructor que inicializa el área y el perímetro
    constructor(area = 0.0, perimetro = 0.0) {
		// Inicializa el área de la figura
        this._area = area; 
		// Inicializa el perímetro de la figura
        this._perimetro = perimetro; 
    }
    
    // Método para calcular el área (valor predeterminado de -1)
    calcularArea() {
        return -1;
    }
    
    // Método para calcular el perímetro (valor predeterminado de -1)
    calcularPerimetro() {
        return -1;
    }
    
    // Setter para asignar un valor al área
    set area(area) {
        this._area = area;
    }
    
    // Getter para obtener el valor del área
    get area() {
        return this._area;
    }
    
    // Setter para asignar un valor al perímetro
    set perimetro(perimetro) {
        this._perimetro = perimetro;
    }

    // Getter para obtener el valor del perímetro
    get perimetro() {
        return this._perimetro;
    }
}

// Exporta la clase Figura para su uso en otros archivos
module.exports = Figura;
