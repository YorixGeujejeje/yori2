const start = document.getElementById("start");
const intro = document.getElementById("intro");
const storyScreen = document.getElementById("storyScreen");
const storyText = document.getElementById("storyText");
const waves = document.getElementById("waves");

const frases = [

"Siempre me ha encantado el mar...",

"Porque siempre me hacía sentir libre.",

"Curiosamente...",

"A ti también te encanta el mar.",

"Y sin darme cuenta...",

"Cada playa comenzó a recordarme a ti.",

"Y desde entonces...",

"Cada atardecer sobre el océano termina llevándome hasta tu recuerdo."

];

start.addEventListener("click", iniciarHistoria);

function iniciarHistoria(){

    waves.play().catch(()=>{});

    intro.classList.add("hide");

    setTimeout(()=>{

        intro.style.display="none";

        storyScreen.classList.add("show");

        mostrarFrase(0);

    },1000);

}

function mostrarFrase(indice){

    if(indice>=frases.length){

        return;

    }

    escribir(frases[indice],()=>{

        setTimeout(()=>{

            desaparecer(()=>{

                mostrarFrase(indice+1);

            });

        },2500);

    });

}

function escribir(texto,fin){

    storyText.style.opacity=1;

    storyText.innerHTML="";

    let i=0;

    const velocidad=45;

    const maquina=setInterval(()=>{

        storyText.innerHTML+=texto.charAt(i);

        i++;

        if(i>=texto.length){

            clearInterval(maquina);

            fin();

        }

    },velocidad);

}

function desaparecer(fin){

    storyText.style.transition="opacity .8s";

    storyText.style.opacity=0;

    setTimeout(()=>{

        storyText.innerHTML="";

        storyText.style.opacity=1;

        fin();

    },800);

}
