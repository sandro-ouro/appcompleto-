const textoo = [
    {
        titulo: `Numeral ` ,
        
        
        texto:`Numeral é a palavra que indica a posição ou o número de elementos, tais como: <span> um, primeiro, dezenas</span>. <br> <br>
        
        Exemplos de frases com numeral:   <br> <br>
        <span>Um</span> pastel, por favor! <br>
        <span>Primeiro</span> as damas. <br>
       <span> Dezenas</span> de pessoas estiveram presentes. `}, 
        {
        titulo:`Classificação dos numerais`,
        texto:`Os numerais podem ser :  <br>
        <span>Cardinais:</span> indicam a quantidade exata de seres ou objetos ( <span>um, dois, três...</span> ). <br>
        <span>Ordinais:</span> indicam a posição ou ordem de seres ou objetos numa sequência ( <span>primeiro, segundo, terceiro...</span> ). <br>
        <span>Multiplicativos:</span> indicam a multiplicação de seres ou objetos ( <span>dobro, triplo, quádruplo...</span> ). <br>
        <span>Fracionários:</span> indicam a divisão de seres ou objetos ( <span>meio, terço, quarto...</span> ).  `},       
    
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


