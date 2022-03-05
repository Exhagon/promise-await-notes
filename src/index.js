import'./styles.css';
// import {promesaLenta,promesaMedia,promesaRapida} from './js/promesas';
import {heroeIfAwait, heroesCiclo, obtenerHeroesArr, obtenerHeroesAwait} from './js/await';
// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Promise.race([promesaLenta,promesaMedia,promesaRapida])
//     .then(console.log).catch(console.warn);
// buscarHeroe('capi').then(console.log);
// buscarHeroeAsync('spider').then(console.log).catch(console.warn);
// obtenerHeroesArr().then(console.table);
// console.time('await');
// obtenerHeroesAwait('capi2')
//     .then(heroe =>{
//         console.log(heroe);
//         console.timeEnd('await');
//     }).catch(err =>console.warn(err));

// heroesCiclo();
heroeIfAwait('iron');