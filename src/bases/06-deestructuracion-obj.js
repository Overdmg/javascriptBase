const persona = {
    nombre: 'Elyn',
    edad: 36,
    clave: 'spiderman',
    rango: 'yokai'
};

// console.log(persona.nombre)

// const {} = persona;

//const {nombre, clave, edad, } = persona;

const testest = ({ nombre, edad, rango = 'lord', clave }) => {

    // const {edad, clave, nombre, } = usuario;

    //console.log(nombre, edad, rango)
    //console.log(edad, clave, nombre,)
    //console.log(clave, nombre, edad,)

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 36.75141,
            lng: -13.87451
        }
    }
}
//return
// retornaPersona( persona );

const { nombreClave, anios, latlng:{lat, lng} } = testest(persona);



console.log(nombreClave, anios, lat, lng)



