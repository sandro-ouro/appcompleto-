const textoo = [
    
    {
        titulo:`Artigo `,
        texto:`Artigo é a palavra que antecede o substantivo para dar um sentido determinado ou indeterminado, tais como: <span>o, as, uns, uma</span>. <br> <br>
        
        Exemplos de frases com artigo:   <br>
        <span>O</span> menino saiu. <br>
        <span>As</span> meninas saíram. <br>
        <span>Uns</span> meninos tocaram a campainha. <br>
        <span>Uma</span> chance é o que preciso.  <br>`},  
        
        {
        titulo:`Classificação dos artigos `,
        texto:`Os artigos são classificados em: <br> <br>
        
        <span>Definidos:</span> o, a, os, as, os. <br>
        <span>Indefinidos:</span> um, uma, uns, umas.  <br>`},  

];



const titulo = document.querySelector('.titulo');
const paragrafo = document.querySelector('.texto');

const next = document.querySelector('.next');
const preview = document.querySelector('.preview'); 
const home = document.querySelector('.home'); 

let currentItem = 0; 

window.addEventListener('DOMContentLoaded', ()=>{
    start();
});

function start(){
    const itemArray = textoo[currentItem]; 
    
    titulo.innerHTML = itemArray.titulo; 
    paragrafo.innerHTML = itemArray.texto; 
     

}

next.addEventListener('click',() =>{
    currentItem++;

    if(currentItem > textoo.length -1){
        currentItem = 0;
    }
    start();
});

preview.addEventListener('click',()=>{
    currentItem--;
    if(currentItem < 0){
        currentItem = textoo.length -1;
    }
    start();
}); 


