import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn(); // jest.fn() es como tener una función vacía pero podemos saber como fue llamada, que fue llamado,  cuantas veces fue llamada, etc
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {

        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);

    });

    test('No debe de postear la información onsubmit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).not.toHaveBeenCalled();
    })

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'Hola mundo';
        // 1.- Simular el InputChange
        wrapper.find('input').simulate('change', { target: { value } });

        // 2.- Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        // 3.- setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();

        // Comprobar que setCategories ha sido llamado solo una vez
        expect(setCategories).toHaveBeenCalledTimes(1);

        // Comprobar que setCategories es una funcion
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        
        // 4.- El valor del input debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('');

    });
});