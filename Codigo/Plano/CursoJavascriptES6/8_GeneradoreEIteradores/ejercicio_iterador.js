const cliente = {
    nombre: 'Juan', // Propiedad normal
    apellido: 'trejo',
    edad: 35,
    [Symbol('password')]: 'hola123', // Propiedad Symbol
    [Symbol('token')]: '54sdfsyyupwqq4345' 
};

function crearIterador(objeto) {
    return {
        indice: 0, // Inicializa el indice para la iteracion
        [Symbol.iterator]: function() {
            // Combina las claves normales y las propiedades Symbol del objeto
            const claves = [
                ...Object.keys(objeto), 
                ...Object.getOwnPropertySymbols(objeto)
            ];
            return {
                // Implementa el metodo `next` para recorrer las claves
                next: () => {
                    if (this.indice < claves.length) {
                        const clave = claves[this.indice++];
                        return {
                            value: [clave, objeto[clave]], // Retorna la clave y su valor
                            done: false // Indica que aun hay elementos por iterar
                        };
                    } else {
                        return { done: true }; // Iteracion finalizada
                    }
                }
            };
        }
    };
}

// Crea el iterador para el objeto cliente
const objetoIterador = crearIterador(cliente); 
// Obtiene el iterador
const iterador = objetoIterador[Symbol.iterator](); 
// Itera sobre el objeto y muestra las claves y valores en la consola
for (let elemento of objetoIterador) {
    console.log(elemento); // Cada elemento es un array [clave, valor]
}



