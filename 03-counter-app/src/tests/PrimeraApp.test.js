
import { shallow } from 'enzyme';
import React from 'react';
// const { render } = require("@testing-library/react");
import '@testing-library/jest-dom';
const { default: PrimeraApp } = require("../PrimeraApp");

describe('Pruebas en <PrimeraApp />', () => {

    /*     test('Debe de mostrar el mensaje Hola, soy Lázaro ', () => {
            const saludo = 'Hola, soy Lázaro';
            const { getByText } = render(<PrimeraApp saludo={saludo} />);
            expect(getByText(saludo)).toBeInTheDocument();
        }) */

    test('Debe mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola, soy Lázaro';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe enviar el subtitulo enviado por props', () => {

        const saludo = 'Hola, soy Lázaro';
        const subtitulo = "Soy un subtítulo";
        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />
        );
        
        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);
        

    });


});