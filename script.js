const player = document.getElementById("player");
const shadow = document.getElementById("shadow");
const finalText = document.getElementById("finalText");
const game = document.getElementById("game");

let x = 120;
let stage = 0;

// MOVIMIENTO
document.addEventListener("keydown", (e)=>{

    if(e.key === "ArrowRight"){
        x += 20;
    }

    if(e.key === "ArrowLeft"){
        x -= 20;
    }

    // LIMITE
    if(x < 0){
        x = 0;
    }

    if(x > window.innerWidth - 50){
        x = window.innerWidth - 50;
    }

    player.style.left = x + "px";

    // EVENTO 1
    if(x > 400 && stage === 0){

        stage = 1;

        setTimeout(()=>{

            document.getElementById("message").innerHTML =
            "No deberías estar aquí...";

        },1000);
    }

    // EVENTO 2
    if(x > 700 && stage === 1){

        stage = 2;

        shadow.style.opacity = 1;

        setTimeout(()=>{

            shadow.style.right = "500px";

        },500);

        setTimeout(()=>{

            document.getElementById("message").innerHTML =
            "Míralo.";

        },2000);
    }

    // FINAL
    if(x > 1000 && stage === 2){

        stage = 3;

        game.classList.add("flash");

        setTimeout(()=>{

            finalText.style.opacity = 1;

        },1000);

        setTimeout(()=>{

            document.getElementById("message").innerHTML =
            "PALE LUNA";

        },2000);

        setTimeout(()=>{

            alert("No hay regreso.");

        },4000);
    }

});

// PARPADEO DE LA LUNA
setInterval(()=>{

    const moon = document.getElementById("moon");

    moon.style.opacity =
    Math.random() > 0.5 ? "1" : "0.6";

},800);

// SONIDO AMBIENTE FALSO
setInterval(()=>{

    console.log("...algo te observa...");

},5000);