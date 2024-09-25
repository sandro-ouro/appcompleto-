const textoo = [
    {
        titulo:`Coesão Textual`,
        
        texto:`Consiste no efeito da ordenação e do emprego adequado
        das palavras que proporcionam a ligação entre frases, períodos e
        parágrafos de um texto. A coesão auxilia na sua organização e se
        realiza por meio de palavras denominadas conectivos. `
        },
        /*----------------------------------------------------------------------*/
        {
        titulo:`Coerência Textual`,
        texto:`A coerência é a conexão  entre ideias em um texto, baseada na argumentação do autor. Textos redundantes ou contraditórios, ou que não apresentam conclusões claras, são incoerentes e prejudicam a fluência e clareza. Isso ocorre não apenas por falta de conhecimento, mas também por ideias contraditórias e uso inadequado dos tempos verbais.`
        },
        
        /*------------------------------------------------------------------------------------------*/
        {
        titulo:`CONECTORES`, 
        texto:`Conectores são palavras ou expressões que ligam frases, orações e parágrafos, permitindo a conexão de ideias e estabelecendo uma sequência coerente do texto.  <br> <br>
        Ex: <br>
        Adição <br> <br> primeiramente, <br>
        da mesma forma, de igual forma, ultimamente, opostamente, <br>
        de modo oposto, de maneira oposta, por último…  <br> <br>
        Alternativa <br> <br>
         ou, ou...ou, ora…ora, já...já, seja...seja, quer… <br>
        quer, talvez...talvez, não...nem, em alternativa.  <br> <br>
        Certeza / afirmação <br> <br>
         certamente, é evidente que, com certeza, <br>
        decerto, naturalmente, que, sem dúvida, sem dúvida que, de certo, <br>
        é óbvio que, evidentemente, obviamente... <br> `
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


