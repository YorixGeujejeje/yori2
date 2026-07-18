const start=document.getElementById("start");

const intro=document.getElementById("intro");

const story=document.getElementById("storyScreen");

const text=document.getElementById("storyText");

const waves=document.getElementById("waves");

const frases=[

"Siempre me ha encantado el mar...",

"Porque siempre me hacía sentir libre.",

"Curiosamente...",

"A ti también te encanta el mar.",

"Y sin darme cuenta...",

"Cada playa comenzó a recordarme a ti.",

"Cada vez que veo un atardecer...",

"Pienso en ti.",

"Yori...",

"Hay algo que llevo muchísimo tiempo queriéndote preguntar."

];

start.onclick=()=>{

waves.play().catch(()=>{});

intro.classList.add("hide");

setTimeout(()=>{

intro.style.display="none";

story.classList.add("show");

historia(0);

},1000);

}

async function historia(i){

if(i>=frases.length){

pregunta();

return;

}

await escribir(frases[i]);

await esperar(2200);

await desaparecer();

historia(i+1);

}

function escribir(frase){

return new Promise(resolve=>{

let i=0;

text.innerHTML="";

const cursor='<span class="cursor"></span>';

const escribir=setInterval(()=>{

text.innerHTML=frase.substring(0,i)+cursor;

i++;

if(i>frase.length){

clearInterval(escribir);

text.innerHTML=frase;

resolve();

}

},45);

});

}

function desaparecer(){

return new Promise(resolve=>{

text.animate([

{opacity:1},

{opacity:0}

],{

duration:900,

fill:"forwards"

});

setTimeout(()=>{

text.innerHTML="";

text.style.opacity=1;

resolve();

},900);

});

}

function esperar(ms){

return new Promise(resolve=>setTimeout(resolve,ms));

}

function pregunta(){

text.innerHTML=`

<h1 style="font-size:64px;font-family:'Cormorant Garamond',serif;">Yori...</h1>

<p style="font-size:32px;margin-top:20px;">

¿Me darías otra oportunidad?

</p>

<div style="margin-top:45px;">

<button id="si">Sí 💜</button>

<button id="no" style="margin-left:20px;">No</button>

</div>

`;

iniciarBotonNo();

}
