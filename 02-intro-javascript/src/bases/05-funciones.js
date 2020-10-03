
// Funciones en JS

// No se deben usar esta forma de crear funciones
function saludar(nombre) {
    return `Hola ${nombre}`;
}

// Lo corecto es

const saludar2 = function (nombre) {
    return `Función en constante ${nombre}`;
}
console.log(saludar('Lázaro'));
console.log(saludar2('Lázaro'));

// Funciones de flecha

const saludar3 = (nombre) => {
    return `Función de flecha ${nombre}`;
}
console.log(saludar3('Lázaro'));

// cuando solo se tiene un return

const saludar4 = (nombre) => `Función de 1 solo return ${nombre}`;
console.log(saludar4('Lázaro'));

const saludar5 = () => `Función sin argumentos`;
console.log(saludar5());

// Objetos en funciones
const getUser = () => {
    return {
        uid: 'abcd1234',
        userName: 'PapiChulo'
    }
};

console.log(getUser());

// Forma implicita con parentesis
const getUser2 = () => ({
    uid: 'ABC321',
    userName: 'MamiChula'
});

console.log(getUser2());

const user = getUser2();
console.log(user);

// Tarea


// 3.- Pruebas

function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC567',
        unserName: nombre,
    }
};

const usuarioActivo = getUsuarioActivo('Lázaro');
console.log("Usuario Activo:", usuarioActivo);

// 1.- Transformar a una función de flecha

const getUsuarioActivo1 = (nombre) => {
    return {
        uid: 'ABC567',
        unserName: nombre,
    }
}
const usuarioActivo1 = getUsuarioActivo1('Lázaro');
console.log("Usuario Activo1:",usuarioActivo1);

// 2.- Tiene que retornar un objeto implicito

const getUsuarioActivo2 = (nombre) => 
    ({
        uid: 'ABC567',
        unserName: nombre,
    });

const usuarioActivo2 = getUsuarioActivo2('Lázaro');
console.log("Usuario Activo2:",usuarioActivo2);

