const textoo = [

    {
        titulo:`REESCRITA DE FRASES E PARÁGRAFOS DO TEXTO `, 
        
        texto:` A habilidade de reescrever frases requer diferentes conhecimentos da Língua Portuguesa, como ortografia, acentuação, pontuação, sintaxe, significação das palavras, as classes de palavras e
        interpretação de texto.  <br> <br>
        
        
        Reescrita de Frases  
          
          solicitará uma frase seja reescrita sem que haja alteração em seu sentido e que a correção gramatical seja preservada.  <br>
        
         Uma reescrita é utilizar palavras diferentes para dizer a mesma coisa. <br> <br>
          
        
        
         Exemplos:  <br> <br>
         Texto original: O menino gosta de brincar com bola. Ele joga todos os dias no parque.  <br> 
        Reescrita : Diariamente, o menino se diverte chutando uma bola no parque.  <br> <br>
           
        
        
        
          Exemplo com um parágrafo <br> <br>
         Texto original: A inteligência artificial está avançando rapidamente. Os computadores estão cada vez mais inteligentes. Eles podem realizar tarefas complexas, como dirigir carros e jogar xadrez.  <br> <br>
        
        Reescrita: A inteligência artificial experimenta um avanço exponencial, dotando os computadores de capacidades cada vez mais sofisticadas. Tarefas complexas, como dirigir veículos autônomos e jogar xadrez, já são realidade graças a essa tecnologia.`},
        
    
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


