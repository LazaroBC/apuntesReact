import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifGridItem } from '../../components/GifGridItem';

/*
    1.- Enzyme
    2.- Enzyme to json
    3.- Debe de mostrar el componente correctamente

    * Shallow
    * Wrapper
    * Wrapper .toMatchSnapshot()

*/

describe('Pruebas es <GifGridItem />', () => {

    const title = 'Un título';
    const url = 'https://localhost/algo.jpg';

    let wrapper = shallow(
        <GifGridItem
            title={title}
            url={url}
        />);

    test('Debe de mostrar <GifGridItem /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de tener un parrafo con el title', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    })

    test('Debe de tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');
        // console.log(img.props().src);
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    })

    test('Debe de tener animate__fadeIn', () => {

        const div = wrapper.find('div');
        // console.log(div.prop('className').includes('animate__fadeIn'));
        expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
        
    })
    

})