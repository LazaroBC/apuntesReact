import { getHeroeById } from './bases/08-imp-exp';


/* const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {

        // Tarea
        // importar el getHeroeById

        const heroe = getHeroeById(2);
        resolve(heroe);
        reject('No hay heroe');
    }, 2000)
});

promesa.then((heroe) => {
    console.log('Heroe: ', heroe);
})
.catch(err=>console.warn(err)); */


const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            // Tarea
            // importar el getHeroeById
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            } else {/* if (
                heroe === undefined
            ) */ reject('No hay heroe');
            }


        }, 2000)
    });

}


/* getHeroeByIdAsync(25).then(heroe => console.log('Heroe:', heroe))
    .catch(err => console.log(err)); */
    //getHeroeByIdAsync(5)
      //  .then(heroe => console.log('Heroe:', heroe))
      //  .catch(err => console.warn(err));
        getHeroeByIdAsync(5)
            .then(console.log)
            .catch(console.warn);