// Importa las clases necesarias
const Figura = require('./Figura') // Importa la clase base Figura
const Circulo = require('./Circulo') // Importa la clase Circulo, que hereda de Figura
const Cuadrado = require('./Cuadrado') // Importa la clase Cuadrado, que hereda de Figura
const Triangulo = require('./Triangulo') // Importa la clase Triangulo, que hereda de Figura

// Crea una instancia de Triangulo con base 3.0 y altura 12.0
const triangulo1 = new Triangulo(3.0, 12.0)

// Muestra el área y el perímetro del triángulo
console.log('Area de triangulo: ',  triangulo1.calcularArea())
console.log('Perimetro de triangulo: ',  triangulo1.calcularPerimetro())

// Crea una instancia de Circulo con radio 1.5
const circulo1 = new Circulo(1.5)

// Muestra el área y el perímetro del círculo
console.log('Area de circulo: ',  circulo1.calcularArea())
console.log('Perimetro de circulo: ',  circulo1.calcularPerimetro())

// Crea una instancia de Cuadrado con un lado de 23.0
const cuadrado1 = new Cuadrado(23.0)

// Muestra el área y el perímetro del cuadrado
console.log('Area de cuadrado: ',  cuadrado1.calcularArea())
console.log('Perimetro de cuadrado: ',  cuadrado1.calcularPerimetro())

// Crea una instancia de Figura con los valores predeterminados (0.0 para área y perímetro)
const figura1 = new Figura()

// Muestra el área y el perímetro de la figura base (que retorna valores predeterminados)
console.log('Area de figura: ',  figura1.calcularArea())
console.log('Perimetro de figura: ',  figura1.calcularPerimetro())
