import { getUser, getUsuarioActivo } from '../../base/05-funciones';
import '@testing-library/jest-dom';


describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
    })


    // getUsuarioActivo debe retornar un objeto

    test('getUsuarioActivo debe retornar un objeto ', () => {

        const nombre = 'Lázaro';
        const userActivo = getUsuarioActivo(nombre);

        // Solucion mía
        const userActivoTest = {
            uid: 'ABC567',
            username: nombre
        }

        expect(userActivo).toEqual(userActivoTest);

        // solución profesor

        expect(userActivo).toEqual(
            {
                uid: 'ABC567',
                username: nombre
            }
        )



    })

})
