const textoo = [ 
    {
        titulo: `Substantivo` ,
       
       texto: `
       Substantivo é a palavra que nomeia os seres em geral, desde objetos, fenômenos, lugares, qualidades, ações, dentre outros, tais como: Ana, Brasil, beleza. <br> <br>
       
       Exemplos de frases com substantivo:  <br>
       A <span class="cor">Ana</span>  é super inteligente. <br>
       O <span>Brasil</span>  é lindo. <br>
       A tua <span>beleza</span>  me encanta. <br>
       O <span>guarda-chuva</span> do João quebrou. <br>
       A <span>casa</span>  é grande e tem um <span>jardim</span>  bonito. <br>   `}   , 
       
       /*---------------------------------------------------------------------*/
       {
        titulo:`Os substantivos são classificados em: `, 
       texto:` <span>Comum:</span> designam seres de forma genérica <span>(país, cidade, pessoa)</span>. <br> <br>
       <span>Próprio:</span> quando se refere a seres específicos, individualizando-os dentro de uma espécie. Eles são escritos com letra maiúscula <span>(Brasil, Rio de Janeiro, Joana)</span>. <br> <br>
       <span>Simples:</span> são formados por apenas um radical, que é o elemento básico da palavra <span>(casa, flor, gato)</span>. <br> <br>
      <span> Composto:</span> são formados por mais de um radical, que é o elemento básico da palavra <span>(guarda-chuva, beija-flor, girassol)</span>. <br> <br>
       <span>Primitivo:</span> não derivam de outras palavras da língua <span>(pedra, livro, sol)</span>. <br> <br>
       <span>Derivado:</span> derivam de outras palavras da língua <span>(pedreira, livraria, solar)</span>. <br> <br>
       <span>Concreto:</span> designam seres ou coisas com existência própria <span>(cadeira, cachorro, pessoa)</span>. <br> <br>
      <span> Abstrato:</span> designam ações, estados, qualidades ou sentimentos <span>(beleza, felicidade, coragem)</span>. <br> <br>
       <span>Coletivo:</span> designam um conjunto de seres da mesma espécie <span>(cardume, enxame, alcateia)</span>.  `},

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


