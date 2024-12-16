// Importa la clase base EmpleadoPorComision
const EmpleadoPorComision = require('./EmpleadoPorComision');

class EmpleadoBaseMasComision extends EmpleadoPorComision {
    
    // Constructor que inicializa el salario base, ventas brutas, tarifa de comisión, primer nombre y apellido
    constructor(
        salarioBase = 0.0,
        ventasBrutas = 0.0, 
        tarifaComision = 0.0, 
        primerNombre = "", 
        apellidoPaterno = "") {
        
        super(ventasBrutas, tarifaComision, primerNombre, apellidoPaterno); // Llama al constructor de la clase base
        this._salarioBase = salarioBase; // Inicializa el salario base
    }
    
    // Método que calcula el sueldo sumando el salario base y la comisión
    calcularSueldo() {
        return super.calcularSueldo() + this._salarioBase; // Llama al método de la clase base para la comisión y agrega el salario base
    }
    
    // Setter para el salario base
    set salarioBase(salarioBase) {
        this._salarioBase = salarioBase;
    }
    
    // Getter para obtener el salario base
    get salarioBase() {
        return this._salarioBase;
    }
}

// Exporta la clase EmpleadoBaseMasComision para su uso en otros archivos
module.exports = EmpleadoBaseMasComision;
