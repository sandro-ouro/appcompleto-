const textoo = [ 
    

    {
        titulo:`
        Interjeição  `,  
        texto:`
        Interjeição é a palavra que exprime emoções e sentimentos, tais como: <span>Olá! Viva! Psiu!</span> <br><br
        
        Exemplos de frases com interjeição:    <br>
        
        <span>Olá!</span> Sou a Maria. <br>
        <span>Viva!</span> Conseguimos ganhar o campeonato. ?<br>
         <span>Psiu!</span> Não faça barulho aqui.    <br>   
        
        As interjeições são classificadas em: <span>alegria, desejo, dor, surpresa, silêncio, entre outros</span>.  `},  
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


