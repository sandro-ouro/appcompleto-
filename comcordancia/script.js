const textoo = [ 
    {
        titulo:`Concordância Verbal e Nominal `, 
        
        texto:`Concordância verbal e nominal é relação que garante que as palavras concordem umas com as outras. <br> <br>
        
        A concordância verbal garante que os verbos concordem com os sujeitos, enquanto a concordância nominal garante que os substantivos concordem com adjetivos, artigos, numerais e pronomes. <br> <br>  
        
        
        
        <span>Regras de concordância verbal </span>   <br> <br>
        
        Para garantir a concordância verbal, precisamos respeitar as relações de número e pessoa entre verbo e sujeito. Vejamos algumas regras. <br> <br>
         
        
        
        <span>Concordância de sujeito composto antes do verbo</span>   <br> <br>
        
        Quando o sujeito é composto e vem antes do verbo, esse verbo deve estar sempre no plural. Exemplos: <br> <br>
        
        Maria e José conversaram até de madrugada. <br>
        Construção e pintura ficarão prontas amanhã.   <br> 
          
        
        
        
        
        <span>Concordância de sujeito composto depois do verbo </span> <br> <br>
        
        Quando o sujeito composto vem depois do verbo, o verbo tanto pode ficar no plural como pode concordar com o sujeito mais próximo. Exemplos:   <br> <br>
        
        Discursaram diretor e professores. <br>
        Discursou diretor e professores. <br> <br> 
        
        
        
        
         <span>Concordância de sujeito formado por pessoas gramaticais diferentes </span>  <br> <br>
        
        Quando o sujeito é composto, mas as pessoas gramaticais são diferentes, o verbo deve ficar no plural. No entanto, ele concordará com a pessoa que, a nível gramatical, tem prioridade.  <br> <br>
        
        Isso quer dizer que 1.ª pessoa (eu, nós) tem prioridade em relação à 2.ª (tu, vós) e a 2.ª tem prioridade em relação à 3.ª (ele, eles). Exemplos:  <br> <br>
        
        Nós, vós e eles vamos à festa. <br>
        Tu e ele falais outra língua?  <br>`
        },  
        
        
        
        
        
      
        {
        titulo: `Regras de concordância nominal   `,  
        
        texto:`Para garantir a concordância nominal, precisamos respeitar as relações de gênero e número entre substantivos, adjetivos, artigos, numerais e pronomes. Vejamos algumas regras.  <br> <br>
        
        
        
        Concordância entre substantivo e mais do que um adjetivo. <br>
        
        Quando há mais do que um adjetivo para um substantivo, há duas formas de concordar: <br> <br>
        
        Colocar o artigo antes do último adjetivo. Exemplos:  <br> <br>
        
        A língua francesa e a italiana são encantadoras. <br>
        A música clássica e a popular são manifestações artísticas.    <br>  <br>
       
        
        Colocar o substantivo e o artigo que o acompanha no plural. Exemplos:   <br> <br>
        
        As línguas francesa e italiana são encantadoras. <br>
        As músicas clássica e popular são manifestações artísticas.   <br>  <br>
        
       
        Concordância entre substantivos e um adjetivo  . <br>
        Quando há mais do que um substantivo e apenas um adjetivo, há duas formas de concordar: <br> <br>
        
        Se o adjetivo vem ANTES dos substantivos, o adjetivo deve concordar com o substantivo mais próximo. Exemplos: <br> <br>
        Linda filha e bebê. <br>
        Querido filho e filha.  <br>  <br>
        
        Se o adjetivo vem DEPOIS dos substantivos, o adjetivo deve concordar com o substantivo mais próximo ou com todos os substantivos. Exemplos:  <br> <br>
        Pronúncia e vocabulário perfeito. <br>
        Vocabulário e pronúncia perfeita. <br>
        Pronúncia e vocabulário perfeitos. <br>
        Vocabulário e pronúncia perfeitos. <br> `},
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


