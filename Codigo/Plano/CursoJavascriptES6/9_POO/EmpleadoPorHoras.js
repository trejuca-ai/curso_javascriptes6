// Importa la clase base Empleado
const Empleado = require('./Empleado');

class EmpleadoPorHoras extends Empleado {
    
    // Constructor que inicializa sueldo, horas trabajadas, primer nombre y apellido
    constructor(
        sueldo = 0.0, 
        horas = 0, 
        primerNombre = "", 
        apellidoPaterno = "") {
        
        super(primerNombre, apellidoPaterno); // Llama al constructor de la clase base
        this._sueldo = sueldo; // Inicializa el sueldo
        this._horas = horas; // Inicializa las horas trabajadas
    }
    
    // Método que calcula el sueldo basado en las horas trabajadas
    calcularSueldo() {
        if (this._horas <= 40) {
            return this._sueldo * this._horas; // Sueldo normal si son 40 horas o menos
        }
        // Calcula sueldo extra por horas extras
        return 40 * this._sueldo + (this._horas - 40) * this._sueldo * 1.5;
    }
    
    // Setter para el sueldo
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }
    
    // Getter para obtener el sueldo
    get sueldo() {
        return this._sueldo;
    }
    
    // Setter para las horas trabajadas
    set horas(horas) {
        this._horas = horas;
    } 
    
    // Getter para obtener las horas trabajadas
    get horas() {
        return this._horas;
    }
}

// Exporta la clase EmpleadoPorHoras para su uso en otros archivos
module.exports = EmpleadoPorHoras;
