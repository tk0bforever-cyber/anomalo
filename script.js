// =========================
// REAL HORROR EVENTS
// =========================

const creepyTexts = [

    "NO ESTÁS SOLO",
    "NO VOLTEES",
    "TE ENCONTRAMOS",
    "YA ENTRAMOS",
    "NO APAGUES LA PANTALLA",
    "MÍRALO DETRÁS DE TI",
    "SIGUE OBSERVANDO"
];

// BOTON ENTRAR

function revealMessage(){

    const msg =
        document.getElementById("message");

    msg.classList.add("show");

    msg.innerText =
        "CONEXIÓN ESTABLECIDA";

    document.body.style.background =
        "#120000";

    playDisturbingSound();

    screenDistortion();

    startRandomEvents();

    setTimeout(() => {

        createScaryFace();

    }, 6000);

    setTimeout(() => {

        fakeCrash();

    }, 14000);
}

// SONIDO

function playDisturbingSound(){

    const audio =
        new Audio(
            "https://www.soundjay.com/human/sounds/scream-01.mp3"
        );

    audio.volume = 0.15;

    audio.play();
}

// CAMBIAR MENSAJES

function randomText(){

    const warning =
        document.querySelector(".warning");

    setInterval(() => {

        const random =
            creepyTexts[
                Math.floor(
                    Math.random() *
                    creepyTexts.length
                )
            ];

        warning.innerText = random;

    }, 2500);
}

// GLITCH VISUAL

function screenDistortion(){

    setInterval(() => {

        document.body.style.filter =
            "contrast(180%) brightness(130%) blur(1px)";

        setTimeout(() => {

            document.body.style.filter =
                "none";

        }, 120);

    }, 3500);
}

// PARPADEO ROJO

function redFlash(){

    setInterval(() => {

        if(Math.random() > 0.6){

            document.body.style.background =
                "#250000";

            setTimeout(() => {

                document.body.style.background =
                    "black";

            }, 150);
        }

    }, 3000);
}

// CREAR CARA TERROR

function createScaryFace(){

    const img =
        document.createElement("img");

    img.src =
        "https://i.imgur.com/8Q2QF6B.png";

    img.classList.add("face");

    img.style.left =
        Math.random() *
        (window.innerWidth - 250) + "px";

    img.style.top =
        Math.random() *
        (window.innerHeight - 250) + "px";

    document.body.appendChild(img);

    setTimeout(() => {

        img.remove();

    }, 300);
}

// EVENTOS ALEATORIOS

function startRandomEvents(){

    setInterval(() => {

        if(Math.random() > 0.7){

            createScaryFace();

        }

    }, 5000);

    redFlash();

    randomText();
}

// TITULO CAMBIANDO

function titleCorruption(){

    const titles = [

        "4NOMAL0",
        "RUN",
        "DON'T LOOK",
        "HELP",
        "WATCHING YOU"
    ];

    setInterval(() => {

        document.title =
            titles[
                Math.floor(
                    Math.random() *
                    titles.length
                )
            ];

    }, 1500);
}

// FALSO CRASH

function fakeCrash(){

    const crash =
        document.createElement("div");

    crash.style.position = "fixed";
    crash.style.top = "0";
    crash.style.left = "0";
    crash.style.width = "100%";
    crash.style.height = "100%";

    crash.style.background = "black";

    crash.style.color = "red";

    crash.style.display = "flex";
    crash.style.justifyContent = "center";
    crash.style.alignItems = "center";

    crash.style.fontSize = "2rem";

    crash.style.zIndex = "99999";

    crash.innerHTML =
        "SIGNAL LOST";

    document.body.appendChild(crash);

    setTimeout(() => {

        crash.remove();

    }, 4000);
}

// INICIO GENERAL

titleCorruption();