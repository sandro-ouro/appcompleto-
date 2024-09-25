const textoo = [  
    {
        titulo: `Pronomes Átonos : `,
        texto:`
                <span class="cor">  me,te, se, o, os ,as,lhe, lhes, nos.vos.  </span>   <br> <br>
        O que são pronomes Átonos?     <br >  <br>
        Os pronomes Átonos são pronomes que servem como complemento de um verbo no enunciado. <br>
        
        Veja: <br>  <br>
        
        Nossos pais trouxeram comida para  <span class="cor">   nós.</span>  <br> <br>
        
        Nesse enunciado, há um sujeito que executa uma ação: “Nossos pais” executam a ação “trazer”. A palavra “nós” é um pronome, já que representa uma pessoa do discurso (a 1ª pessoa, aquela que fala). No entanto, como esse pronome é um complemento da ação “trazer”, ele é Átono.
        `},  
        {
        
        titulo:` Próclise `,
        texto:`Na próclise, o pronome é colocado antes do verbo.  <br>
        Usa-se:  <br> <br>
        Nas orações negativas : <br> <br>
        Não me abandone.  <br>
        Não veio nem me telefonou. <br> <br>
        Orações exclamativas : <br> <br>
        Macacos me mordam! <br> <br>
        
        Orações optativas: <br>
        Deus nos ajude! <br> <br>
        
        Orações interrogativas iniciadas por pronomes ou advérbios interrogativos: <br> <br>
        Quem me chamou? <br>
        Onde me viste? <br> <br>
        
        Orações subordinadas: <br> <br>
        Quando me viu, sorriu para mim.  <br> <br>
        
        Verbo no gerúndio, regido de preposição em:   <br> <br>
        Em se plantando, 
        tudo dá. `},   
        
        
        
        
        
        
        
        
        
        
        
        
        
        {
        titulo:`Ênclise `,
        texto: `Na ênclise, o pronome é colocado depois do verbo. <br>
        Usa-se:  <br> <br>
        Com verbos no infinitivo: <br>
        Viver é adaptar-se. <br> <br>
        
        Com verbos que iniciam oração:  <br>  <br>
        Mostrou-me o livro, retirou-se calado, deixando-me só na sala.`},
        
        
        
        
        
        {
        titulo:`Mesóclise `,
        texto:`Na mesóclise, o pronome é colocado no meio do verbo. <br> <br>
        
        Usa-se com verbos no futuro do presente ou futuro do pretérito: <br> <br>
        Devolver-me-á o livro amanhã. <br>
        Deixar-te-ia sozinha se você pedisse... <br>`},  
        /*-----------------------------------------------------------------------*/
        {
        titulo:`Caso especial `, 
        texto:`Com verbo no infinitivo, precedido de preposição ou palavra negativa, usa-se próclise ou ênclise : <br> <br>
        Estou aqui para te servir. <br>
        Estou aqui para servir-te. <br>
        
        Meu desejo era não o incomodar.  <br>
        Meu desejo era não incomodá-lo. <br> `},
        
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


