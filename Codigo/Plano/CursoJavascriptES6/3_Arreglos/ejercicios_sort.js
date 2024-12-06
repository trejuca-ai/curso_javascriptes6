const nombres = [
    3,
    5,
    10,
    "Carlos",
    "Herrera",
    "Juan",
    undefined,
    "Perez",
    "Pérez",
    "perez",
    "Trejo",
    "Zavala",
    null
]

// Implementar el metodo para ordenar un arreglo
// que contenga valores string, number, undefined y null
nombres.sort((valor1, valor2) => {
	
	if (valor1 === null || valor1 === undefined) return 1
	if (valor2 === null || valor2 === undefined) return -1
	
	// Si ambos valores son de tipo numero
	if (typeof valor1 === 'number' && typeof valor2 === 'number') {
		return valor1 - valor2
	}
	
	// Si ambos valores son de tipo string
	if (typeof valor1 === 'string' && typeof valor2 === 'string') {
		return valor1.localeCompare(valor2, "es", {numeric: true})
	}
	
	// Si uno es numero y el otro es cadena, trata el numero como menor
	if (typeof valor1 === 'number') return -1
	if (typeof valor2 === 'number') return 1
	
})


console.log(nombres)