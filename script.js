const continueBtn = document.getElementById("continueBtn");
const container = document.querySelector(".container");
const question = document.getElementById("question");
const success = document.getElementById("success");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const music = document.getElementById("music");
const message = document.getElementById("message");

const frases = [

"¿Segurita? 🥹",
"Piensa un poquito más. 💜",
"Michael Jackson estaría triste. 🎤",
"El mar todavía pregunta por ti. 🌊",
"Una oportunidad más... por favor. 🤍",
"Yoriiii 😭",
"No seas malita JSJSJS.",
"Prometo esforzarme muchísimo.",
"¿Y si mejor le das a 'Sí'? 👀",
"Eso duele... 💔"

];

continueBtn.onclick = ()=>{

container.classList.add("hidden");
question.classList.remove("hidden");

music.play().catch(()=>{});

crearEstrellas();

}

let contador = 0;

no.addEventListener("mouseover",mover);

no.addEventListener("click",mover);

function mover(){

const ancho = window.innerWidth-150;
const alto = window.innerHeight-100;

const x = Math.random()*ancho;
const y = Math.random()*alto;

no.style.left=x+"px";
no.style.top=y+"px";

message.innerHTML=frases[contador%frases.length];

contador++;

}

yes.onclick=()=>{

question.classList.add("hidden");
success.classList.remove("hidden");

lluviaCorazones();

}

function crearEstrellas(){

const stars=document.getElementById("stars");

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*3+"s";

star.style.opacity=Math.random();

stars.appendChild(star);

}

}

function lluviaCorazones(){

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="💜";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-50px";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.transition="5s linear";

heart.style.pointerEvents="none";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.top="110vh";

},50);

setTimeout(()=>{

heart.remove();

},5200);

},250);

}