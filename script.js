// ===============================
// PARA YORI 💜
// Motor principal
// ===============================

const intro = document.getElementById("intro");
const start = document.getElementById("start");

const storyScreen = document.getElementById("storyScreen");
const chapter = document.getElementById("chapter");
const storyText = document.getElementById("storyText");

const waves = document.getElementById("waves");

// ===============================
// Historia
// ===============================

const historia = [

{

capitulo:"I",

titulo:"El mar",

texto:[

"Siempre me ha encantado el mar...",

"Porque siempre me hizo sentir libre.",

"Curiosamente...",

"A ti también te encanta.",

"Y desde entonces...",

"Cada playa terminó recordándome a ti."

]

},

{

capitulo:"II",

titulo:"Michael Jackson",

texto:[

"Después apareció alguien más.",

"Un hombre que seguramente ya sabes quién es.",

"Michael Jackson.",

"Y curiosamente...",

"Cada vez que lo escucho también termino pensando en ti."

]

}

];

// ===============================

let capituloActual = 0;
let fraseActual = 0;

// ===============================

start.addEventListener("click", iniciar);

// ===============================

function iniciar(){

waves.play().catch(()=>{});

intro.style.opacity="0";

setTimeout(()=>{

intro.style.display="none";

storyScreen.style.opacity="1";

storyScreen.style.pointerEvents="auto";

mostrarCapitulo();

},1200);

}

// ===============================

function mostrarCapitulo(){

const actual = historia[capituloActual];

chapter.innerHTML = actual.capitulo + "<br>" + actual.titulo;

chapter.style.opacity = 1;

storyText.innerHTML = "";

setTimeout(()=>{

chapter.style.opacity = 0;

setTimeout(()=>{

mostrarFrase();

},900);

},2200);

}

// ===============================

function mostrarFrase(){

const actual = historia[capituloActual];

if(fraseActual >= actual.texto.length){

capituloActual++;

fraseActual=0;

if(capituloActual>=historia.length){

finHistoria();

return;

}

mostrarCapitulo();

return;

}

escribir(actual.texto[fraseActual]);

}

// ===============================

function escribir(texto){

storyText.innerHTML="";

let i=0;

const cursor="<span class='cursor'></span>";

const maquina=setInterval(()=>{

storyText.innerHTML = texto.substring(0,i)+cursor;

i++;

if(i>texto.length){

clearInterval(maquina);

storyText.innerHTML = texto;

setTimeout(()=>{

desaparecer();

},2400);

}

},42);

}

// ===============================

function desaparecer(){

storyText.animate([

{opacity:1},

{opacity:0}

],{

duration:900,

fill:"forwards"

});

setTimeout(()=>{

storyText.style.opacity=1;

fraseActual++;

mostrarFrase();

},900);

}

// ===============================

function finHistoria(){

storyText.innerHTML="";

chapter.innerHTML="";

chapter.style.opacity=0;

storyText.innerHTML="Continúa...";

}
