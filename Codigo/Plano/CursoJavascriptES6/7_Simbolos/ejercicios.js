function formatearObjectoConSimbolos(objeto) {
	
	// Objeto temporal para resultado
	const resultado = {}
	
	// Obtenemos las porpiedades normales del objeto
	Object.keys(objeto).forEach(llave => {
		resultado[llave] = objeto[llave]
	})
	
	// Obtener y copiar las propiedades Symbol
	Object.getOwnPropertySymbols(objeto).forEach(symbol => {
		resultado[symbol.description] = objeto[symbol]
	})
	// Convertir el objeto resultado a formato JSON con indentacion
	return JSON.stringify(resultado, null, 5)
}

// Crear un Symbol para la propiedad 'password'
const password = Symbol('password');

// Crear un objeto con propiedades normales
const cliente = {
    nombre: 'Juan',
    apellido: 'Trejo'
};

// Asignar una propiedad Symbol al objeto
cliente[password] = 'hola123';

// Mostrar el objeto formateado con las propiedades normales y Symbol
console.log(formatearObjectoConSimbolos(cliente));




