import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes'
describe('Pruebas en funciones de Héroes', () => {

    test('getHeroeById debe de retornar un héroe por id', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        // se puede hacer recorriendo el array con un bucle for, 
        // pero ya que estamos evaluando el find...
        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);



    });


    test('getHeroeById debe de retornar undefined si heroe no existe', () => {

        const id = 17;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual(undefined);

    });

    // Debe retornar un arreglo con los héroes de DC
    // owner
    // toEqual al arreglo filtrado

    test('getHeroesByOwner debe de retornar un arreglo con los héroes de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);


        // Solución del profesor ya que pedía el filter

        const heroesData = heroes.filter(h => h.owner === owner);
        expect(heroes).toEqual(heroesData);

        // Solución mía
        expect(heroes).toEqual(
          [ {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ]
        );

    });
    // Debe de retornar un arreglo con los héroes de Marvel
    // length = 2 // toBe
    test('getHeroesByOwner debe de retornar un arreglo con los héroes de Marvel', () => {

        const owner = 'Marvel';

        // Solución del profesor
        const heroesProf = getHeroesByOwner(owner);
        expect(heroesProf.length).toBe(2);

        // Solución mía
        const heroes = getHeroesByOwner(owner).length;
        expect(heroes).toBe(2);

    });




})
