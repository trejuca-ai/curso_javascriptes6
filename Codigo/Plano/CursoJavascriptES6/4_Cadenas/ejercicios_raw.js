//let ubicacion = 'final'
//let ruta = String.raw`c:\misdocumentos\trabajo\\${ubicacion}`



function rawPersonalizada(template, ...substitutions) {
	return template.reduce(function(resultado, cadena, i) {
		return `${resultado}${cadena}${substitutions[i] ? `${substitutions[i]}` : ''}`
	}, '')
}

let nombre = "Juan"
let edad = 35

//let mensaje = rawPersonalizada`Hola mi nombre es ${nombre} y mi edad es ${edad}`

let mensaje = rawPersonalizada(
	["Hola mi nombre es ", " y mi edad es ", " años"], nombre, edad)
	
console.log(mensaje)