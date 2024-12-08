const password = Symbol.for('password')

let producto = new Map()
producto.set("nombre","telefono celular")
producto.set("marca","Motorola")
producto.set("precio", 7000)
producto.set("medidas", [123.0,23.9])
producto.set("caracteristicas", {pantalla:'amoled', bateria:'5000mah'})
producto.set(password, "hola123")

function replacer(key, value) {
	
	if (value instanceof Map) {
		const entries = [...producto.entries()].map(([llave, valor]) => {
			const llaveNueva = typeof llave === 'symbol' ? llave.description : llave
			return [llaveNueva, valor]
		})
		return Object.fromEntries(entries)
	} 
	return value
}

function reviver(clave, valor) {

	if (typeof valor === 'object' && !Array.isArray(valor)) {
		if (clave === '') {
			const mapa = new Map(Object.entries(valor))
			for (const [key, value] of mapa) {
				if (key === 'password') {
					mapa.set(password, value)
					mapa.delete('password')
				}
			}
			return mapa
		} else {
			return valor
		}
	}
	return valor
}

const objetoFormateado = JSON.stringify(producto, replacer, 2)
//console.log(objetoFormateado)
const objetoSerializado = JSON.parse(objetoFormateado, reviver)
//console.log(objetoSerializado)
console.log("password: ", objetoSerializado.get(password))


