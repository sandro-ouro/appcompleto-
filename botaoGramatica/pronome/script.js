const textoo = [ 
    {
        titulo:`Pronome`, 
        texto:`
        Pronome é a palavra que substitui ou acompanha o substantivo, indicando a relação das pessoas do discurso, posse e posições, tais como: eu, meu, aquele. <br><br>
        
        Exemplos de frases com pronome: <br> <br>
        <span>Eu</span> aposto como ele vem. <br>
        <span>Meu</span> caderno é novo. <br>
        <span>Aquele</span> tipo não me sai da cabeça. <br>
        <span>Quem</span> vai contigo? <br>
        Tentei ligar, mas <span>ninguém</span> atendeu.   <br>`},   
        
        {
        titulo:`Os pronomes são classificados em: `, 
        
        texto:`  <span> Pessoais (reto e oblíquo):</span> eu, tu, ele, me, te, se… <br>
        <span>Possessivos:</span> meu, minha, tua... <br>
        <span>Demonstrativos:</span> este, esta, isto... <br>
        <span>Relativos:</span> que, quem, onde... <br>
        <span>Indefinidos:</span> alguém, ninguém, tudo... <br>
        <span>Interrogativos:</span> que, quem, qual... <br> `}, 

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


