// Objeto que almacena metadatos de un libro
const meta = {
    titulo: 'titulo libro', // Titulo del libro
    autores: [ // Lista de autores
        {
            primerNombre: 'Lot',
            apellido: 'Alvarez'
        },
        {
            primerNombre: 'Juan',
            apellido: 'Trejo'
        }
    ],
    editor: { // Informacion del editor
        nombre: 'porrua',
        url: 'www.siteweb.com'
    }
};

// Desestructuracion para obtener los dos autores de la lista
const [autor1, autor2] = meta.autores;

// Muestra los apellidos de los autores en la consola
console.log(autor1.apellido); // 'Alvarez'
console.log(autor2.apellido); // 'Trejo'

/*const {
	titulo,
	editor: {url: web},
	autores: [{primerNombre: autor1Nombre}, {apellido: autor2Apellido}]
} = meta

console.log(titulo)
console.log(web)
console.log(autor1Nombre)
console.log(autor2Apellido)*/
