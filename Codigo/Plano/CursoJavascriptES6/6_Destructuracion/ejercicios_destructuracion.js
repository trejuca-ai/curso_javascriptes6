const  meta = {
	titulo: 'titulo libro',
	autores: [
		{
			primerNombre: 'Lot',
			apellido: 'Alvarez'
		},
		{
			primerNombre: 'Juan',
			apellido: 'Trejo'
		}
	],
	editor: {
		nombre: 'porrua',
		url: 'www.siteweb.com'
	}
}


const [autor1, autor2] = meta.autores
console.log(autor1.apellido)
console.log(autor2.apellido)

/*const {
	titulo,
	editor: {url: web},
	autores: [{primerNombre: autor1Nombre}, {apellido: autor2Apellido}]
} = meta

console.log(titulo)
console.log(web)
console.log(autor1Nombre)
console.log(autor2Apellido)*/
