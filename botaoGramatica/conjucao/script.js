const textoo = [  
    {
        titulo:`Conjunção` ,   
        texto:`Conjunção é a palavra que liga dois termos ou duas orações de mesmo valor gramatical, tais como: <span>mas, portanto, conforme</span>.    <br> <br>
        
        Exemplos de frases com conjunção:<br> <br>
        
        Vou, <span>mas</span> não volto. <br>
        <span>Portanto</span>, não sei o que fazer. <br>
        Dançar <span>conforme</span> a dança.  <br>  `},   
        {
        titulo:`Classificação das conjunções`, 
        texto:`As conjunções são classificadas em: <br> <br>
        
        <span>Coordenativas:</span> aditivas, adversativas, alternativas, conclusivas e explicativas.<br>
        <span>Subordinativas:</span> integrantes, causais, comparativas, concessivas, condicionais, conformativas, consecutivas, temporais, finais e proporcionais.   `},
    
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


