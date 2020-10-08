import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas'
import heroes from '../../data/heroes'

describe('Pruebas con promesas', () => {

    // El done es que hace esperar al test a que la función asincrona termie
    // es importante al final llamar al done() ya que puede haber más de un expect
    test('getHeroeByIdAsync debe de retornar un Héroe async', (done) => {

        const id = 1;

        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            });
    });

    test('Debe de obtener un error se el héroe por id no existe', (done) => {

        const id = 10;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });

    });

});


