

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 12345,
        lat: 12.45645,
        lng: 4567.3456,
    }
};

// Para clonar un objeto
const persona3 = { ...persona };

console.log(persona);
console.table(persona);

// En este caso estamos copiando la refencia a memoria de persona, no los valores.
const persona2 = persona;

// De manera que si hacemos
persona2.nombre = 'Peter'
console.log('persona', persona);
console.log('persona2', persona2);


console.log('persona', persona);
console.log('persona2', persona2);
console.log('persona3', persona3);
