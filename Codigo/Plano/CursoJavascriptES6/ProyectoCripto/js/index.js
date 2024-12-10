/**
 * Objeto para almacenar los valores del formulario
 */
const datosMoneda = {
	moneda:'MXN',
	criptomoneda: ''
}
nombres = {}
/**
 * Constantes para la URL de las APIs
 */
const URL_IMAGEN = 'https://www.cryptocompare.com'
const URL_TOP_CRIPTOS = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=5&tsym=USD'
const URL_COTIZACION_CRIPTO = 
	'https://min-api.cryptocompare.com/data/pricemultifull?fsyms={criptomoneda}&tsyms={moneda}'

/**
 * Variables globales para elementos del formulario
 */
const criptoMonedaSelector = document.getElementById('criptomonedas')
const monedaonedaSelector = document.getElementById('moneda')
const tablaCotizacion = document.querySelector('#cotizacion table')
const formularioCotizacion = document.getElementById('formulario')

document.addEventListener('DOMContentLoaded', () => {
	obtenerTopCriptos()
	
	monedaonedaSelector.addEventListener('change', obtenerValorMoneda)
	criptoMonedaSelector.addEventListener('change', obtenerValorMoneda)
	formularioCotizacion.addEventListener('submit', obtenerCotizacion)
	
})

const obtenerTopCriptos = () => {
	fetch(URL_TOP_CRIPTOS)
		.then(response => response.json())
		.then(data => cargarCriptos(data.Data))
}

const obtenerCotizacion = (event) => {
	event.preventDefault()
	
	const urlParseada = URL_COTIZACION_CRIPTO.replace(
		/{(.*?)}/g, (match, value) => datosMoneda[value]
	)
	ejecutarSpinner()
	fetch(urlParseada)
		.then(response => response.json())
		.then(cotizacion => {
			datosMoneda.criptomoneda.split(',').forEach(cripto => {
				console.log(cotizacion)
				procesarCotizacion(
					cotizacion.DISPLAY[cripto][datosMoneda.moneda],
					cripto)
			})
		})	
		.catch(error => console.log(error))
}

const procesarCotizacion = (cotizacion, criptoName) => {
	//console.log(cotizacion)
	const { PRICE, HIGHDAY, LOWDAY, LASTUPDATE, CHANGEPCTDAY, IMAGEURL } = cotizacion
	const encabezado = tablaCotizacion.querySelector('thead')

	if (!encabezado) {
		tablaCotizacion.innerHTML = `
			<thead class='encabezado_fila'>
				<td><b>Imagen</b></td>
				<td><b>Precio</b></td>
				<td><b>Precio mas alto</b></td>
				<td><b>Precio mas bajo</b></td>
				<td><b>Ultima actualizacion</b></td>
				<td><b>Variacion ultimo dia</b></td>
			</thead>
		`
	}
	
	tablaCotizacion.innerHTML += `
		<tr>
			<td>
				<img 
					src='${URL_IMAGEN}${IMAGEURL}' 
					width=30 height=30 
					title="${nombres[criptoName]}"/>
			</td>
			<td>${PRICE}</td>
			<td>${HIGHDAY}</td>
			<td>${LOWDAY}</td>
			<td>${LASTUPDATE}</td>
			<td>
				<span class='${CHANGEPCTDAY < 0 ? 'negativo' : 'positivo'}'>
					${CHANGEPCTDAY}
				</span>
			</td>
		</tr>
	`
}

const cargarCriptos = criptomonedas => {
	
	criptomonedas.forEach((cripto, indice) => {

		const {FullName, Name} = cripto.CoinInfo
		const opcion = document.createElement('option')
		
		opcion.value = Name
		opcion.textContent = FullName
		
		indice !== 0 || opcion.setAttribute('selected', true)
		//if (indice === 0) opcion.selected = true
		
		criptoMonedaSelector.appendChild(opcion)
		nombres[Name] = FullName
	})
}

const obtenerValorMoneda = (event) => {
	const selector = event.target
	console.log(selector.selectedOptions)
	let tipoMoneda = selector.hasAttribute('multiple')
		? Array.from(selector.selectedOptions).reduce((a, cm) => `${a ? `${a},` : ''}${cm.value}`,'')
		: selector.value
		
	datosMoneda[event.target.name] = tipoMoneda

}

const ejecutarSpinner = () => {
	
	tablaCotizacion.innerHTML = ''
	
	const spinner = document.createElement('div')
	spinner.innerHTML = `
		<div class="sk-cube-grid">
		  <div class="sk-cube sk-cube1"></div>
		  <div class="sk-cube sk-cube2"></div>
		  <div class="sk-cube sk-cube3"></div>
		  <div class="sk-cube sk-cube4"></div>
		  <div class="sk-cube sk-cube5"></div>
		  <div class="sk-cube sk-cube6"></div>
		  <div class="sk-cube sk-cube7"></div>
		  <div class="sk-cube sk-cube8"></div>
		  <div class="sk-cube sk-cube9"></div>
		</div>
	`
	tablaCotizacion.appendChild(spinner)
}
