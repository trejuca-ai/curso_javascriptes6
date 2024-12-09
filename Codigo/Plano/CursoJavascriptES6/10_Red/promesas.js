
function fetchData() {
	
	return new Promise((resolve, reject) => {
		
		setTimeout(() => {
			const flag = true
			
			if(flag) {
				resolve('Los datos se obtuvieron de forma correcta')
			} else {
				reject('Ocurrio un error en el proceso de obtencion de datos')
			}
		}, 3000)
	})
}

fetchData()
	.then(data => {
		
		const nuevaPromesa = new Promise((resolve) => {
			setTimeout(() => {
				resolve('promesa encadenada de forma correcta')
			}, 1000)
		})
		return nuevaPromesa
	})
	.then(data2 => {
		console.log(data2)
	})
	.catch(error => {
		console.log('en el catch')
		console.log(error)
	})
	
	
	
	