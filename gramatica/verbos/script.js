const textoo = [ 
    {
        titulo : `Verbo`,
        texto:`Verbo é a palavra que indica ações, estados, processos ou fenômenos da natureza, tais como: <span>sair, estar, correr, chover</span>.  <br> <br>
        
        Exemplos de frases com verbo: <br>
      <span>  Sairemos</span> esta noite? <br>
        <span>Corro</span> todos os dias. <br>
        <span>Chovendo</span>, eu não vou. <br>
        Ele <span>está</span> feliz com a notícia. <br>
        As plantas <span>crescem</span> rapidamente na primavera. `},  
        
        /*--------------------------------------*/
        {
        titulo:`Classificação dos verbos `,
        
        texto:`<span>Regulares:</span> são os conjugados de acordo com modelos de conjugação dos verbos padrões das três conjugações: <span>-ar, -er, -ir</span> ( <span>amar - amo, amas, ama, amamos, amais, amam; vender - vendo, vendes, vende, vendemos, vendeis, vendem; partir - parto, partes, parte, partimos, partis, partem</span> ).<br> <br>
        <span>Irregulares:</span> são os que não seguem os modelos de conjugação dos verbos padrões, apresentando alterações no radical ou nas terminações ( <span>dar - dou, dás, dá, damos, dais, dão; caber - caibo, cabes, cabe, cabemos, cabeis, cabem; cair - caio, cais, cai, caímos, caís, caem</span> ). <br> <br>
        <span>Defectivos:</span> são os que não são conjugados em todas as formas verbais ( <span>falir - não tem a primeira pessoa do singular do presente do indicativo; reaver - não tem muitas formas</span> ). <br> <br>
        <span>Abundantes:</span> possuem mais de uma forma verbal aceita e correta em algumas de suas conjugações. Eles podem apresentar tanto uma forma regular quanto uma irregular ( <span>aceitar - aceitado / aceito; entregar - entregado / entregue</span> ). <br> <br>
        <span>Anômalo:</span> são um subgrupo dos irregulares, com alterações muito significativas ( <span>ser - sou, és, é, somos, sois, são; ir - vou, vais, vai, vamos, vais, vão</span> ).   `},

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


