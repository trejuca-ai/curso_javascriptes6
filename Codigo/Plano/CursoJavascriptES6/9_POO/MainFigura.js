const Figura = require('./Figura')
const Circulo = require('./Circulo')
const Cuadrado = require('./Cuadrado')
const Triangulo = require('./Triangulo')

const triangulo1 = new Triangulo(3.0, 12.0)
console.log('Area de triangulo: ',  triangulo1.calcularArea())
console.log('Perimetro de triangulo: ',  triangulo1.calcularPerimetro())

const circulo1 = new Circulo(1.5)
console.log('Area de circulo: ',  circulo1.calcularArea())
console.log('Perimetro de circulo: ',  circulo1.calcularPerimetro())

const cuadrado1 = new Cuadrado(23.0)
console.log('Area de cuadrado: ',  cuadrado1.calcularArea())
console.log('Perimetro de cuadrado: ',  cuadrado1.calcularPerimetro())

const figura1 = new Figura()
console.log('Area de figura: ',  figura1.calcularArea())
console.log('Perimetro de figura: ',  figura1.calcularPerimetro())