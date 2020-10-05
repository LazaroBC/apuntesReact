

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [goku] = personajes;
console.log(goku);


const [p1] = personajes;
console.log('Primer elemento: ', p1);

const [, p2] = personajes;
console.log('Segundo elemento: ', p2);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea 
// 1.- El primer vlaor del arreglo se llamará nombre
// 2.- Se llamará setNombre

const useState = (valor) => {
    return [valor, () => { console.log('Hola mundo') }];
}

const [nombre, setNombre] = useState('Goku');
console.log(nombre);
setNombre();

