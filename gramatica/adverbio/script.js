const textoo = [
    {
        titulo:`
        Advérbio    `, 
        texto:`
        Advérbio é a palavra que modifica o verbo, o adjetivo ou outro advérbio, exprimindo circunstâncias de tempo, modo, intensidade, entre outros, tais como: <span>melhor, demais, ali</span>.  <br> <br>
        
        Exemplos de frases com advérbio: <br>
        Escrevia <span>melhor</span> quando tinha o hábito de ler.<br> 
        Não acha que trouxe folhas <span>demais?</span> <br>
        O restaurante é <span>ali</span>.   <br> <br>
        
        Os advérbios são classificados em: <span> modo, intensidade, lugar, tempo, negação, afirmação, dúvida, entre outros </span>.
           `},
    
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


