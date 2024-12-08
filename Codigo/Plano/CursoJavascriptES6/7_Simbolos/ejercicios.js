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
	
	return JSON.stringify(resultado, null, 5)
}

const password = Symbol('password')
const cliente = {
	nombre: 'Juan',
	apellido: 'Trejo'
}

cliente[password] = 'hola123'
console.log(formatearObjectoConSimbolos(cliente))




