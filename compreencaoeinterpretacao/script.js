const textoo = [
    
{
    titulo:`Compreensão de Textos`, 
    texto:`Compreensão textual é entender o que o texto diz. <br>
    Identificar as ideias e informações que estão claramente expressas no texto. <br>
    Entender a mensagem de forma clara e objetiva, sem adicionar interpretações pessoais. <br>`}, 
    
    {
    titulo:`INTERPRETAÇÃO DE TEXTO`,
    
     texto:`A partir das informações explícitas no texto, o leitor faz inferências e chega a conclusões que não estão diretamente escritas. <br> <br>
    Interpretação de textos é o processo de entender o conteúdo ao associar ideias e extrair significados subentendidos. Em resumo, interpretar um texto significa decodificar seu sentido por meio da indução. `},    
    {
    titulo:`Diferença entre compreensão e interpretação`,
    texto:`A compreensão de um texto é fazer uma análise objetiva do
    texto e verificar o que realmente está escrito nele. Já a interpretação
    imagina o que as ideias do texto têm a ver com a realidade. O
    leitor tira conclusões subjetivas do texto.`},    
    
    {
    titulo:`Texto narrativo `, 
    texto:`Ele tem uma estrutura que inclui uma introdução, desenvolvimento e conclusão . <br> <br>
    Esses textos se caracterizam
    pela apresentação das ações de personagens em um tempo e
    espaço determinado. Os principais gêneros textuais que pertencem
    ao tipo textual narrativo são: <br >romances, novelas, contos, crônicas
    e fábulas.`},  
    
    /*-----------------------------------------------------------------------*/
    {
    titulo:`Texto descritivo`, 
    texto:`Esse tipo de texto descreve lugares, seres ou acontecimentos e geralmente utiliza adjetivos para expressar as emoções do narrador.  <br>como diários, classificados, cardápios, folhetos turísticos e relatos de viagens.`
    }, 
    /*-----------------------------------------*/
    {
    titulo:`Texto expositivo `,
    texto:`corresponde ao texto cuja função é transmitir
    ideias utilizando recursos de definição, comparação, descrição,
    conceituação e informação. <br>
    Alguns exemplos de textos expositivos são: <br> artigos científicos, enciclopédias, manuais, e informes.`
    },  
    
    /*------------------------------------------------*/
    {
    
    titulo:`Texto argumentativo `, 
    texto:`textos argumentativos têm o objetivo
    de apresentar um assunto recorrendo a argumentações. <br>
    Sua estrutura é
    composta por introdução, desenvolvimento e conclusão. <br>
    Esse tipo de texto é comum em editoriais, ensaios acadêmicos, debates e discursos persuasivos. `
    }, 
    /*---------------------------------------------------------------------*/
    {
    titulo:`Texto injuntivo `,
    texto:`Tem como finalidade de
    orientar o leitor, ou seja, expor instruções, de forma que o emissor
    procure persuadir seu interlocutor. <br>
    exemplo de um texto injutivo: <br> <br>
    bula de remédio. <br>
     receitas culinárias.<br>
     manuais. 
    de instruções. `
    },
    
    /*-------------------------------------------------------------  */
    {
    titulo:`Texto prescritivo `, 
    texto:`Tem a função de instruir
    o leitor em relação ao procedimento. <br>
    exemplo: <br>
    leis. <br>
     cláusulas contratuais. <br>
     edital de concursos públicos. <br>`
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


