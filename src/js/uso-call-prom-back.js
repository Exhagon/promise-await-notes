import'./styles.css';
import {buscarHeroe as buscarHeroeCallback} from './js/callbacks';
import {buscarHeroe} from './js/promesas';
const heroeID = 'iron';
const heroeId2 = 'capi';
const heroeId3 = 'spider';

//PROMISE HELL
// buscarHeroe(heroeID).then(heroe =>{
//     // console.log(`Enviando a ${heroe.nombre} a la mision (promise)`);
//     buscarHeroe(heroeId2).then(heroe2 =>{
//         console.log(`Enviando a ${heroe.nombre} y ${heroe2.nombre} a la mision (promise)`);
//     });
// });
// CALLBACK
//buscarHeroe(heroeID, (err,heroe1) =>{
//     if(err){return console.error(err);}
//     buscarHeroe(heroeId2, (err,heroe2) =>{
//         if(err){return console.error(err);}
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión.`)
//     });
// });

Promise.all([buscarHeroe(heroeID),buscarHeroe(heroeId2)])
    .then(([heroe1,heroe2])=>{
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión.`)
}).catch(err =>{
    alert(err);
}).finally(()=>{
    console.log('Se terminó el promise.all')
});
console.log("Fin de Programa ;)");