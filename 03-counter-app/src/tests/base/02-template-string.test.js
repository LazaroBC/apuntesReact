import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {

    test('getSaludo debe retornar Hola Lázaro!', () => {

        const nombre = 'Lázaro';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola Lázaro!');
        expect(saludo).toBe('Hola ' +  nombre + '!');
    })

    // getSaludo debe de retornar Hola Carlos! si no hay argumento en el nombre

    test('getSaludo debe retornar Hola Carlos!', () => {

        

        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos!');
        //expect(saludo).toBe('Hola ' +  nombre + '!');
    })
})
