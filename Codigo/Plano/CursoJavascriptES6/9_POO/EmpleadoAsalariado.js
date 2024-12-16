// Importa la clase base Empleado
const Empleado = require('./Empleado');

class EmpleadoAsalariado extends Empleado {
    
    // Constructor que inicializa el salario semanal, primer nombre y apellido
    constructor(salarioSemanal = 0.0, primerNombre = "", apellidoPaterno = "") {
		// Llama al constructor de la clase base
        super(primerNombre, apellidoPaterno); 
		// Inicializa el salario semanal
        this._salarioSemanal = salarioSemanal; 
    }
    
    // Método que calcula el sueldo basado en el salario semanal
    calcularSueldo() {
        return this._salarioSemanal;
    }
    
    // Setter para el salario semanal
    set salarioSemanal(salarioSemanal) {
        this._salarioSemanal = salarioSemanal;
    }
    
    // Getter para obtener el salario semanal
    get salarioSemanal() {
        return this._salarioSemanal;
    }
}

// Exporta la clase EmpleadoAsalariado para su uso en otros archivos
module.exports = EmpleadoAsalariado;
