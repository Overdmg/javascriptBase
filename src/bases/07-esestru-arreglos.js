const personajes = ['Goku', 'Vegeta','Frizzer'];
const [ p1 ] = personajes;
console.log( p1 )


const retornaArreglo = () => {
    return ['ABC', 123];
}
// como una varaible que recibe un argumento
//const arr = retornaArreglo();
//console.log(arr);

// desestructurando y recibiendo 2 parametros
const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);



// - Tarea (practica)
// 1. el primer valor del arr se llamara "nombre".
// 2. el segundo valor se llamara "setNombre".

const xState = ( valor ) => {
        return [ valor, ()=>{ console.log('Hola Mundo') } ];
}

const [ nombre, setNombre] = xState( 'Goku' );



console.log( nombre );
setNombre();
