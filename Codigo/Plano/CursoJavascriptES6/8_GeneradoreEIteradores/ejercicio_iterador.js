const cliente = {
	nombre: 'Juan',
	apellido: 'trejo',
	edad: 35,
	[Symbol('password')]: 'hola123',
	[Symbol('token')]: '54sdfsyyupwqq4345'
}


function crearIterador(objeto) {
	return {
		indice: 0,
		[Symbol.iterator]: function() {
			const claves = [
				...Object.keys(objeto), 
				...Object.getOwnPropertySymbols(objeto)
			]
			return {
				next: () => {
					if (this.indice < claves.length) {
						const clave = claves[this.indice++]
						
						return {
							value: [clave, objeto[clave]],
							done: false
						}
					} else {
						return { done: true }
					}
				}
			}
		}
	}
}

const objetoIterador = crearIterador(cliente)
const iterador = objetoIterador[Symbol.iterator]()

for (let elemento of objetoIterador) {
	console.log(elemento)
}




