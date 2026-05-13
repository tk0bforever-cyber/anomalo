const screen = document.getElementById("screen");

let estado = {
    fase: 1,
    cordura: 100,
    ubicacion: "inicio",
    tiempo: 0
};

// ---------------- INTRO ----------------

const intro = [
"INICIANDO SISTEMA...",
"CARGANDO ENTORNO...",
"",
"ESTÁS EN UN LUGAR OSCURO.",
"",
"HAY UNA LUNA PÁLIDA EN EL CIELO.",
"",
"COMANDOS: norte / sur / mirar",
"",
">"
];

let i = 0;

function escribirIntro(){
    if(i < intro.length){
        screen.innerHTML += intro[i] + "\n";
        i++;
        setTimeout(escribirIntro, 900);
    } else {
        entrada();
        eventosGlobales();
    }
}

escribirIntro();

// ---------------- ENTRADA ----------------

function entrada(){
    const input = document.createElement("input");
    screen.appendChild(input);
    input.focus();

    input.addEventListener("keydown",(e)=>{
        if(e.key === "Enter"){
            const cmd = input.value.toLowerCase();
            screen.innerHTML += cmd + "\n";
            input.remove();
            procesar(cmd);
        }
    });
}

// ---------------- LÓGICA ----------------

function procesar(cmd){

    if(cmd === "norte"){
        norte();
    }
    else if(cmd === "sur"){
        sur();
    }
    else if(cmd === "mirar"){
        mirar();
    }
    else{
        screen.innerHTML += "\nCOMANDO DESCONOCIDO.\n";
    }

    entrada();
}

// ---------------- ACCIONES ----------------

function norte(){
    estado.ubicacion = "bosque";
    estado.cordura -= 3;

    screen.innerHTML += "\nAVANZAS HACIA EL NORTE...\n";

    comprobarFase();
}

function sur(){
    estado.ubicacion = "vacío";
    estado.cordura -= 6;

    screen.innerHTML += "\nVAS HACIA EL SUR...\n";

    comprobarFase();
}

function mirar(){
    estado.cordura -= 1;

    screen.innerHTML += "\nLA LUNA TE ESTÁ MIRANDO.\n";
}

// ---------------- SISTEMA DE FASES ----------------

function comprobarFase(){

    if(estado.cordura < 80 && estado.fase === 1){
        estado.fase = 2;
        screen.innerHTML += "\nLOS ÁRBOLES SE MUEVEN...\n";
    }

    if(estado.cordura < 60 && estado.fase === 2){
        estado.fase = 3;
        document.body.classList.add("glitch");
        screen.innerHTML += "\nALGO NO ES REAL...\n";
    }

    if(estado.cordura < 40 && estado.fase === 3){
        estado.fase = 4;
        screen.innerHTML += "\nESTÁ CERCA...\n";
    }

    if(estado.cordura < 20 && estado.fase === 4){
        estado.fase = 5;
        document.body.classList.add("flash");
        screen.innerHTML += "\nCORRE.\n";
    }
}

// ---------------- EVENTOS 30 MIN ----------------

function eventosGlobales(){

    setInterval(()=>{

        estado.tiempo++;

        if(Math.random() > 0.65){
            eventoAleatorio();
        }

        estado.cordura -= 0.25;

    }, 3000);
}

// ---------------- EVENTOS ALEATORIOS ----------------

function eventoAleatorio(){

    const eventos = [
        "ESCUCHAS RESPIRACIÓN DETRÁS DE TI.",
        "LA LUNA SE ACERCA.",
        "ALGO TE SIGUE ENTRE LOS ÁRBOLES.",
        "EL ENTORNO SE CORROMPE.",
        "NO CONFÍES EN TU MEMORIA."
    ];

    const e = eventos[Math.floor(Math.random()*eventos.length)];

    screen.innerHTML += "\n" + e + "\n";
}

// ---------------- FINAL ----------------

setInterval(()=>{

    if(estado.cordura <= 0){
        screen.innerHTML += "\nFINAL: YA FUISTE REGISTRADO.\n";
        document.body.classList.add("glitch");
    }

},2000);