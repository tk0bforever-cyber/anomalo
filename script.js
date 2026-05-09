// =========================
// 4NOMAL0 HORROR SCRIPT
// =========================

// Mensajes perturbadores
const creepyMessages = [
    "NO MIRES DETRÁS DE TI",
    "ALGUIEN ESTÁ OBSERVANDO",
    "LA SEÑAL NO ES HUMANA",
    "NO APAGUES EL MONITOR",
    "YA ENTRAMOS",
    "CORRE",
    "SIGUE MIRANDO"
];

// Sonido glitch falso
function playGlitch() {

    const audio = new Audio(
        "https://www.soundjay.com/button/beep-07.wav"
    );

    audio.volume = 0.2;
    audio.play();
}

// Mostrar mensaje oculto
function revealMessage() {

    const msg = document.getElementById("message");

    msg.classList.add("show");

    document.body.style.background = "#120000";

    playGlitch();

    setTimeout(() => {

        alert("NO DEBISTE ENTRAR");

    }, 2500);
}

// Texto aleatorio creepy
function randomCreepyText() {

    const warning = document.querySelector(".warning");

    setInterval(() => {

        const random =
            creepyMessages[
                Math.floor(
                    Math.random() * creepyMessages.length
                )
            ];

        warning.innerText = random;

    }, 3000);
}

// Efecto de glitch visual
function randomGlitch() {

    setInterval(() => {

        document.body.style.filter =
            "contrast(150%) brightness(120%)";

        setTimeout(() => {

            document.body.style.filter = "none";

        }, 120);

    }, 5000);
}

// Pantalla roja aleatoria
function redFlash() {

    setInterval(() => {

        const randomChance = Math.random();

        if(randomChance > 0.7){

            document.body.style.background = "#300";

            setTimeout(() => {

                document.body.style.background = "black";

            }, 200);
        }

    }, 4000);
}

// Crear caras fantasma
function createGhostFace(){

    const ghost = document.createElement("div");

    ghost.innerHTML = "☠";

    ghost.style.position = "fixed";
    ghost.style.left =
        Math.random() * window.innerWidth + "px";

    ghost.style.top =
        Math.random() * window.innerHeight + "px";

    ghost.style.fontSize = "40px";

    ghost.style.opacity = "0";

    ghost.style.color = "white";

    ghost.style.transition = "0.5s";

    document.body.appendChild(ghost);

    setTimeout(() => {
        ghost.style.opacity = "0.8";
    },100);

    setTimeout(() => {
        ghost.style.opacity = "0";
    },800);

    setTimeout(() => {
        ghost.remove();
    },1200);
}

// Apariciones aleatorias
function ghostEvents(){

    setInterval(() => {

        const chance = Math.random();

        if(chance > 0.8){
            createGhostFace();
            playGlitch();
        }

    }, 3500);
}

// Cambiar título del navegador
function titleDistortion(){

    const titles = [
        "4NOMAL0",
        "RUN",
        "DON'T LOOK",
        "WATCHING YOU",
        "SIGNAL LOST"
    ];

    setInterval(() => {

        document.title =
            titles[
                Math.floor(
                    Math.random() * titles.length
                )
            ];

    }, 2000);
}

// Iniciar efectos
randomCreepyText();
randomGlitch();
redFlash();
ghostEvents();
titleDistortion();