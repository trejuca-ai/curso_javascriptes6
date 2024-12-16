//let ubicacion = 'final'
//let ruta = String.raw`c:\misdocumentos\trabajo\\${ubicacion}`



// Define una funcion personalizada para procesar plantillas literales
function rawPersonalizada(template, ...substitutions) {
    // Combina las cadenas del template y los valores sustituidos
    return template.reduce(function(resultado, cadena, i) {
        return `${resultado}${cadena}${substitutions[i] ? `${substitutions[i]}` : ''}`;
    }, ''); // Inicia el resultado como una cadena vacia
}

let nombre = "Juan"
let edad = 35

//let mensaje = rawPersonalizada`Hola mi nombre es ${nombre} y mi edad es ${edad}`

// Crea un mensaje usando la funcion personalizada con un array de cadenas y valores
let mensaje = rawPersonalizada(
    ["Hola mi nombre es ", " y mi edad es ", " años"], nombre, edad
);
	
console.log(mensaje)