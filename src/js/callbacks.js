const heroes = {
    capi:{
        nombre: 'Capitan America',
        poder: "Aguantar inyecciones sin morir"
    },
    iron:{
        nombre: "Tony Stark",
        poder: "Tener plata"
    },
    spider:{
        nombre: "Peter Parker",
        poder: "tirar weas"
    }
}
//callback retorna...
export const buscarHeroe = (id, callback) =>{
    const heroe = heroes[id];
    if(heroe){
        callback(null,heroe);
    }else{
        callback(`No existe un héroe con el id ${id}`);
    }
    //callback(heroe);
}