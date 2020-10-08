const { retornaArreglo } = require("../../base/07-deses-arr")

describe('Pruebas en desestructuración', () => {

    test('retornaArreglo debe de retornar un string y un número', () => {


        const arr = retornaArreglo(); //['ABC', 123];
        expect(arr).toEqual(['ABC', 123]);

        // tambiés se podría desestructurar
        const [letras, numeros] = retornaArreglo(); //['ABC', 123];

        expect(letras).toBe('ABC');
        console.log(typeof letras);
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        console.log(typeof numeros);
        expect(typeof numeros).toBe('number');



    })


})
