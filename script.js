alert("JavaScript cargó");

const start=document.getElementById("start");

const intro=document.getElementById("intro");

const story=document.getElementById("story");

const storyText=document.getElementById("storyText");

const waves=document.getElementById("waves");

const frases=[

"Siempre me ha encantado el mar...",

"Porque siempre me hizo sentir libre.",

"Curiosamente...",

"A ti también te encanta el mar.",

"Y sin darme cuenta...",

"Cada playa comenzó a recordarme a ti."

];

start.onclick=()=>{

waves.play().catch(()=>{});

start.style.display="none";

story.classList.remove("hidden");

mostrarFrase(0);

}

function mostrarFrase(i){

if(i>=frases.length){

storyText.innerHTML="";

return;

}

storyText.style.opacity=0;

setTimeout(()=>{

escribir(frases[i],()=>{

storyText.style.opacity=1;

setTimeout(()=>{

mostrarFrase(i+1);

},2600);

});

},700);

}

function escribir(texto,fin){

storyText.innerHTML="";

let x=0;

const intervalo=setInterval(()=>{

storyText.innerHTML+=texto.charAt(x);

x++;

if(x===texto.length){

clearInterval(intervalo);

fin();

}

},45);

}
