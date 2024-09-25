const textoo = [
    { 
        titulo:`Definição`, 
        texto:`Os acentos gráficos servem para indicar a sílaba
        tônica de uma palavra ou a pronúncia de uma vogal. De acordo com
        as regras gramaticais vigentes, são quatro os acentos existentes na
        língua portuguesa:  <br> <br>
        Acento agudo (´) <br>
        Acento circunflex (^) <br>
        
        Til  (~)  <br>`
        } ,
        
       
        {
        titulo:`Acento agudo (´) `,
        texto:`Indica que a sílaba tônica da palavra tem som
        aberto. <br> Ex.: área, relógio, pássaro.`}, 
         /*----------------------------------------*/
        {
        titulo:`Acento circunflex (^)`,
        texto:`Empregado acima das vogais “a” e” e
        “o”para indicar sílaba tônica em vogal fechada. <br>Ex.: acadêmico,
        âncora, avô. `},  
        /*--------------------------------------------------------------------*/
      
        /*-------------------------------------------------------------*/
        {
        titulo:`Til  (~) `,
         texto:`Ele serve para indicar a nasalidade , na língua portuguesa, apenas pode acompanhar as vogais <span class="cor">  a  </span>  e  <span class="cor">  o  </span> .`
        },  
        
        
        
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


