const Empleado = require('./Empleado')
const EmpleadoAsalariado = require('./EmpleadoAsalariado')
const EmpleadoPorHoras = require('./EmpleadoPorHoras')
const EmpleadoPorComision = require('./EmpleadoPorComision')
const EmpleadoBaseMasComision = require('./EmpleadoBaseMasComision')

const empleadoAsalariado = new EmpleadoAsalariado(12.7, "Pablo", "Luna")
const empleadoPorHoras = new EmpleadoPorHoras(7879.00, 50, "Laura", "Perez")
const empleadoPorComision = new EmpleadoPorComision(4321.00, 0.25, "Lorena", "Hernandez")
const empleadoBaseMasComision = new EmpleadoBaseMasComision(123.45, 1234.00, 0.40, "Juan", "Trejo")


/*const empleado = new Empleado("Pedro", "Martinez")
console.log(empleado.calcularSueldo())*/

const empleados = [
	empleadoAsalariado,
	empleadoPorHoras,
	empleadoPorComision,
	empleadoBaseMasComision
]

empleados.forEach(empleado => {
	console.log(empleado.nss)
	console.log(`Nombre: ${empleado.primerNombre}, sueldo: ${empleado.calcularSueldo()}`)
})




