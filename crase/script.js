const textoo = [
    {
        titulo:`Crase é o nome dado à contração de duas letras “A” em uma  só:` ,  
        texto: `preposição “a” + artigo “a” em palavras femininas. Ela é demarcada com o uso do acento grave (à), de modo que crase não
        é considerada um acento em si, mas sim o fenômeno dessa fusão. <br> <br>
        
        Sendo a única exceção os pronomes demonstrativos
        aquilo e aquele, que recebem a crase por terem “a” como sua vogal
        inicial.  <br> <br>
        
        A crase pode ser a contração da preposição a com: <br> <br>
        
        O artigo feminino definido a/as: “Foi à escola, mas não
        assistiu às aulas.” <br> <br>
        
         O pronome demonstrativo a/as: “Vá à paróquia central.”  <br> <br>
        
        Os pronomes demonstrativos aquele(s), aquela(s), aquilo:  <br>
        “Retorne àquele mesmo local.”  <br> <br>
        
         O a dos pronomes relativos a  qual e as quais: <br>
        “São pessoas às
        quais devemos o maior respeito e consideração”. `}, 
        
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


