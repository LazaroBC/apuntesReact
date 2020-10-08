
describe('Pruebas en el archivo demo.test.js', () => {
    
    test('deben de ser iguales los strings', () => {

        // 1. Inicialización
        const mensaje = 'Hola mundo';
    
        // 2. Estímulo
        const mensaje2 = "Hola mundo";
    
        // 3. Obsevar el comportamiento
        expect(mensaje).toBe(mensaje2);
    })

    test('deben de ser iguales los number', () => {

        // 1. Inicialización
        const mensaje = 15*2;
    
        // 2. Estímulo
        const mensaje2 = 30;
    
        // 3. Obsevar el comportamiento
        expect(mensaje).toBe(mensaje2);
    })
})





