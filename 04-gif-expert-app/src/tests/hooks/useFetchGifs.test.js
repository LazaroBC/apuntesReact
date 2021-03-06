
import '@testing-library/jest-dom';
// import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks'; // Libreria para probar las custom hooks
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('pruebas en el hook useFetchGifs', () => {

    test('Debe retornar el estado inicial ', async() => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        const {data, loading} = result.current;
        await waitForNextUpdate();
        // console.log(data, loading);

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('Debe de retornar un arreglo de imgs y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        await waitForNextUpdate();
        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
    

});