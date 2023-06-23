import { heroes } from './data/heroes';

const getHeroesById = (id) => {
    return heroes.find( callBack => callBack.id ===(id) );

}

console.log (getHeroesById(2) );

// con filter

const getHeroesByOwner = ( owner ) => {
    return heroes.filter ( callBack => callBack.owner ===(owner) );
}

console.log( getHeroesByOwner('DC'));