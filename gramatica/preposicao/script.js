const textoo = [
    {
        titulo:`Preposição  `, 
    texto:`Preposição é a palavra que liga dois elementos da oração, tais como: <span>a, após, para</span>. <br><br>
    
    Exemplos de frases com preposição:   <br> <br>
    Entreguei a carta <span>a</span> ele. <br>
    As portas abrem <span>após</span> as 18h. <br>
    Isto é <span>para</span> você.   <br>`},  
    {
    titulo:`Classificação das preposições`, 
    texto:`As preposições são classificadas em: <br> <br>
    
    <span>Preposições essenciais:</span> são palavras que só funcionam como preposições e não desempenham nenhuma outra função na língua ( <span>a, ante, após, até, com...</span> ). <br>
    <span>Preposições acidentais:</span> palavras que, além de funcionarem como preposições, podem desempenhar outras funções gramaticais, como advérbios, conjunções, etc. ( <span>como, conforme, durante, exceto...</span> ).    `},   
    
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


