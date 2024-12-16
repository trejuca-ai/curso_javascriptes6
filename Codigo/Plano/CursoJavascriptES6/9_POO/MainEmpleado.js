// Importa las clases necesarias
const Empleado = require('./Empleado')
const EmpleadoAsalariado = require('./EmpleadoAsalariado')
const EmpleadoPorHoras = require('./EmpleadoPorHoras')
const EmpleadoPorComision = require('./EmpleadoPorComision')
const EmpleadoBaseMasComision = require('./EmpleadoBaseMasComision')

// Crea una instancia de un empleado asalariado con un sueldo de 12.7 y nombre "Pablo Luna"
const empleadoAsalariado = new EmpleadoAsalariado(12.7, "Pablo", "Luna")

// Crea una instancia de un empleado por horas con un sueldo de 7879.00 y 50 horas trabajadas, con nombre "Laura Perez"
const empleadoPorHoras = new EmpleadoPorHoras(7879.00, 50, "Laura", "Perez")

// Crea una instancia de un empleado por comision con ventas brutas de 4321.00 y tarifa de comision de 0.25, con nombre "Lorena Hernandez"
const empleadoPorComision = new EmpleadoPorComision(4321.00, 0.25, "Lorena", "Hernandez")

// Crea una instancia de un empleado base más comisión con un salario base de 123.45, ventas brutas de 1234.00 y tarifa de comision de 0.40, con nombre "Juan Trejo"
const empleadoBaseMasComision = new EmpleadoBaseMasComision(123.45, 1234.00, 0.40, "Juan", "Trejo")

// Crear un arreglo con todos los empleados creados
const empleados = [
    empleadoAsalariado,
    empleadoPorHoras,
    empleadoPorComision,
    empleadoBaseMasComision
]

// Itera sobre el arreglo de empleados para mostrar su número de seguridad social y su sueldo calculado
empleados.forEach(empleado => {
    // Muestra el número de seguridad social (nss) de cada empleado
    console.log(empleado.nss)
    
    // Muestra el nombre del empleado y su sueldo calculado mediante el método calcularSueldo
    console.log(`Nombre: ${empleado.primerNombre}, sueldo: ${empleado.calcularSueldo()}`)
})
