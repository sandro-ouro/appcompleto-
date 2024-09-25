const textoo = [ 
    {
        titulo:`Adjetivo`,
        texto:`Adjetivo é a palavra que caracteriza, atribui qualidades aos substantivos, tais como: feliz, superinteressante, amável. <br><br>
        
        Exemplos de frases com adjetivo:  <br> <br>
        A criança ficou <span>feliz</span>. <br>
        O artigo ficou <span>superinteressante</span>. <br>
        Sempre foi <span>amável</span> comigo. <br>
        Os seus olhos são <span>verdes</span>. <br>
        Meus pais são <span>brasileiros</span>.  <br>`},
        {
        titulo:`Os adjetivos são classificados em:   `, 
        texto:` <span>Primitivos:</span> não derivam de outras palavras ( <span>bom, triste, verde</span> ). <br> <br>
        <span>Derivados:</span> derivam de outras palavras ( <span>bondoso, tristonho, esverdeado</span> ).<br> <br>
        <span>Simples:</span> formado por um único radical, que é o elemento básico da palavra ( <span>forte, feliz, bonito</span> ). <br> <br>
        <span>Compostos:</span> formado por mais de um radical, que é o elemento básico da palavra ( <span>azul-marinho, verde-escuro, socioeconômico</span> ). <br> <br>
        <span>Pátrios:</span> indicam a nacionalidade ou local de origem ( <span>brasileiro, paulista, asiático</span> ). `},  

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


