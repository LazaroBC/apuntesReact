
// import {heroes} from './data/heroes';
// import {heroes, owners} from './data/heroes';
// import { default as heroes, owners } from "./data/heroes";
// const { default: heroes, owners } = require("./data/heroes");
// import heroes, {owners} from './data/heroes';
const { default: heroes, owners } = require("../data/heroes");




/* const getHeroeById = (id) => {
    return heroes.find((heroe) => {
        if (heroe.id === id) {
            return true;
        }else {
            return false;
        }
    });
} */

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

console.log(getHeroeById(2));

export const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroeByOwner('DC'));
console.log(owners);

