const nombre = 'Lázaro';
const apellido = 'Belloch';

const nombreCompleto1 = nombre + ' ' + apellido;
const nombreCompleto2 = `${nombre} ${apellido}
${1 + 1}
`;
console.log(nombreCompleto1);
console.log(nombreCompleto2);


function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)} `);