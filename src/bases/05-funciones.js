// Funciones en JS

// const { isElementOfType } = require("react-dom/test-utils");

// const saludar = function(nombre) {
//    return `Hola, ${nombre}`;
// }

// console.log(saludar('Elyn'))

// Funcion de flecha //
// const saludar2 = ( nombre ) => {
  //  return `Hola, ${nombre}`;
// }

// const saludar3 = ( nombre ) => `Hola, ${nombre}`;
//const saludar4 = () => `Hola Mundo`;

// console.log(saludar)
// console.log(saludar2('Elyn'));
// console.log(saludar3('PEPE'));
// console.log(saludar4());


// mas formas
/*
const getUser = () => ({
    useId: 'abc1234',
    userName: 'etaveras'
})

const user = getUser();
console.log(user)
*/

// - Tarea - //
// 1. Transformen a una funcion de flecha.
// 2. Tiene que retornar un objeto implicito.
// 3. pruebas

// antes:
/*
function getUsuarioActivo ( nombre ) {
    return {
        uid: 'ABC567',
        userName: nombre
    }
}

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(getUsuarioActivo);
*/




// ahora:

let nombre = 'Elyn';

const getUsuarioActivo = () => ({
    uid: 'ABC567',
    userName: nombre
})

const usuarioActivo = getUsuarioActivo();
console.log(usuarioActivo); 