import '../css/components.css';
import webpacklogo from '../assets/img/webpack-logo.png';
export const saludar = (nombre) =>{
    const h1= document.createElement('h1');
    nombre? h1.innerText = `Hola, ${nombre}!`: h1.innerText= 'El Pepe!';
    document.body.append(h1);

    //Img
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append(img);
}