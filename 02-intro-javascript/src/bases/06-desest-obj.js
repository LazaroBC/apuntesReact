// Desestructuración
// Asignación desestructurante

const persona = {

    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

/* console.log(persona.nombre);
const {nombre} = persona;
console.log(nombre);

console.log(persona.clave);
const {clave: clave2} = persona;
console.log(clave2);


console.log(persona.edad);
const {edad} = persona;
console.log(edad); */

/* const retornaPersona = (usuario) => {
    const {nombre, edad, clave} = usuario;
    console.log(edad,clave, nombre);
} */

const retornaPersona = ({ nombre, edad, rango = 'Capitan', clave }) => {

    /* console.log(nombre, edad, rango); */
    return {
        nombreClave: clave,
        anios: edad
    }
}

const avenger = retornaPersona(persona);

console.log('retornaPersona', avenger);

const useContext = ({ nombre, edad, rango = 'Capitan', clave }) => {

    /* console.log(nombre, edad, rango); */
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat:143,
            lng: 534
        }
    }
}

const { nombreClave, anios, latlng: {lat, lng} } = useContext(persona);;
// esto es más común 
// const {lat, lng } = latlng;
console.log('useContext', nombreClave, anios);
console.log(lat,lng);
