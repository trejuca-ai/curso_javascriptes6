// Decorador que toma el objetivo y contexto y los imprime en la consola
function decorador(target, context) {
    console.log(target, context)
}

// Clase Usuario que usa el decorador
@decorador
class Usuario {
    
    // Definición del getter para el nombre, con un decorador
    @decorador
    get nombre() {
        return this.nombre
    }

    // Definición del setter para el nombre, con un decorador
    @decorador
    set nombre(nombre) {
        this.nombre = nombre
    }
    
    // Propiedad nombre, inicializada con valor 'Juan', con un decorador
    @decorador
    nombre = 'Juan'
    
    // Método de negocio, decorado con el decorador
    @decorador
    logicaDeNegocio() {
        console.log('Metodo con LN')
    }
}
