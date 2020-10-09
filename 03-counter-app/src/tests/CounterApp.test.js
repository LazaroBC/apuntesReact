
import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';


// Tarea
/*
1.- Debe de mostrar <CounterApp /> correctamente (haacer match con un snapshot)
    y sus valores por defecto.
2.- Debe de mostrar el valor por defecto 100
    2.1.- Usar el wrapper.find, tomando el elemento html donde se muestra el valor del contador
*/

describe('Pruebas en <CounterApp />', () => {

    let wrapper= shallow(<CounterApp />);

    // Esta función se va a ejecutar antes de cada una de las evaluzaiones
    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    })

    test('Debe de mostrar <CounterApp /> correctamente ', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar el valor por defecto 100', () => {
        // Soución no valida  por que no hay manera de comprobar 
        // el valor cambiado
        /* const counter = 100;
        const wrapper = shallow(
            <CounterApp 
                value= {counter}
            />
        );
        console.log(counter)
        const valorCounter = wrapper.find('h2').text();
        expect(valorCounter).toBe(counter.toString()); */

        // Solución del profesor

        const wrapper = shallow(<CounterApp value= { 100 } />);
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('100');

    });

    test('Debe incrementar con el boton +1', () => {

        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');

    });

    test('Debe incrementar con el boton -1', () => {


        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');

    });

    test('Debe de colocar el valor por defectocon el boton Reset', () => {

        const wrapper = shallow(<CounterApp value= { 105 } />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        console.log(counterText);

        expect(counterText).toBe('105');
    });


});