// Clase Empleado base, que no debe ser instanciada directamente
class Empleado {
    
    // Propiedad privada #nss
    #nss;
    
    // Constructor que inicializa el primer nombre y apellido, y lanza un error si se intenta instanciar directamente
    constructor(primerNombre = "", apellidoPaterno = "") {
        
        // Evita que se creen instancias de la clase base Empleado
        if (new.target === Empleado) {
            throw new Error('No es posible instanciar objetos de Empleado');
        }
		// Inicializa el primer nombre
        this._primerNombre = primerNombre; 
		// Inicializa el apellido
        this._apellidoPaterno = apellidoPaterno; 
		// Inicializa la propiedad privada #nss
        this.#nss = "abcde1234"; 
    }
    
    // Método para calcular el sueldo (en la clase base es null)
    calcularSueldo() {
        return null;
    }
    
    // Setter para el primer nombre
    set primerNombre(primerNombre) {
        console.log('desde set');
        this._primerNombre = primerNombre;
    }
    
    // Getter para obtener el primer nombre
    get primerNombre() {
        return this._primerNombre;
    }
    
    // Setter para el apellido paterno
    set apellidoPaterno(apellidoPaterno) {
        this._apellidoPaterno = apellidoPaterno;
    }
    
    // Getter para obtener el apellido paterno
    get apellidoPaterno() {
        return this._apellidoPaterno;
    }
    
    // Setter para la propiedad privada #nss
    set nss(nss) {
        this.#nss = nss;
    }
    
    // Getter para la propiedad privada #nss
    get nss() {
        return this.#nss;
    }
}

// Exporta la clase Emplea
module.exports = Empleado;