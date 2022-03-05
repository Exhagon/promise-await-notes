import {buscarHeroeAsync, buscarHeroe} from './promesas';
const heroesIds = ['capi','iron','spider'];
const heroesPromesas = heroesIds.map(buscarHeroe);

export const obtenerHeroesArr = async() =>{
    
    return await Promise.all(heroesIds.map(buscarHeroe));
    
    
    // const heroesArr=[];
    
    // for(const id of heroesIds){
    //     heroesArr.push(buscarHeroe(id));
    // }
    
  
    // return await Promise.all(heroesArr);
}
// export const obtenerHeroesArr = async() =>await Promise.all(heroesIds.map(buscarHeroe)) Función de una linea
export const obtenerHeroesAwait = async (id) =>{
    try{
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    }catch(err){
        console.log("catch");
        return{
            nombre: 'Sin Nombre',
            poder: 'Sin poder'
        }
    }  
}
//para usarse el await siempre debe estar dentro de la función async
export const heroesCiclo = async() =>{
    console.time('HeroesCiclo');
    heroesPromesas.forEach(async(p) =>console.log(await p));
    for await(const heroe of heroesPromesas){
        console.log(heroe);
    }
    console.timeEnd('HeroesCiclo');
    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach(heroe => console.log(heroe));
}

export const heroeIfAwait = async(id) =>{
    if((await buscarHeroeAsync(id)).nombre ==='Tony Stark'){
        console.log("Es el mejor de todos");
    } else{
        console.log("Naaaa");
    }
}