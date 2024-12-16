// Importa la clase base Empleado
const Empleado = require('./Empleado');

class EmpleadoPorComision extends Empleado {
    
    // Constructor que inicializa ventas brutas, tarifa de comisión, primer nombre y apellido
    constructor(
        ventasBrutas = 0.0, 
        tarifaComision = 0.0, 
        primerNombre = "", 
        apellidoPaterno = "") {
        
        super(primerNombre, apellidoPaterno); // Llama al constructor de la clase base
        this._ventasBrutas = ventasBrutas; // Inicializa las ventas brutas
        this._tarifaComision = tarifaComision; // Inicializa la tarifa de comisión
    }
    
    // Método que calcula el sueldo basado en las ventas brutas y la tarifa de comisión
    calcularSueldo() {
        return this._tarifaComision * this._ventasBrutas;
    }
    
    // Setter para las ventas brutas
    set ventasBrutas(ventasBrutas) {
        this._ventasBrutas = ventasBrutas;
    }
    
    // Getter para obtener las ventas brutas
    get ventasBrutas() {
        return this._ventasBrutas;
    }
    
    // Setter para la tarifa de comisión
    set tarifaComision(tarifaComision) {
        this._tarifaComision = tarifaComision;
    }
    
    // Getter para obtener la tarifa de comisión
    get tarifaComision() {
        return this._tarifaComision;
    }
}

// Exporta la clase EmpleadoPorComision para su uso en otros archivos
module.exports = EmpleadoPorComision;
