const screen = document.getElementById("screen");

const intro = [
"BOOTING...",
"",
"PALE LUNA",
"",
"YOU ARE IN A DARK PLACE.",
"",
"THERE IS A PALE MOON.",
"",
"TYPE: NORTH / SOUTH",
"",
">"
];

let line = 0;

function typeIntro(){
    if(line < intro.length){
        screen.innerHTML += intro[line] + "\n";
        line++;
        setTimeout(typeIntro, 900);
    } else {
        commandInput();
    }
}

typeIntro();

function commandInput(){
    const input = document.createElement("input");
    screen.appendChild(input);
    input.focus();

    input.addEventListener("keydown",(e)=>{
        if(e.key === "Enter"){
            const cmd = input.value.toLowerCase();
            screen.innerHTML += cmd + "\n";
            input.remove();
            process(cmd);
        }
    });
}

function process(cmd){
    if(cmd === "north"){
        north();
    } else if(cmd === "south"){
        south();
    } else {
        screen.innerHTML += "\nUNKNOWN.\n\n>";
        commandInput();
    }
}

function north(){
    setTimeout(()=>screen.innerHTML += "\nYOU WALK NORTH.\n",1000);
    setTimeout(()=>screen.innerHTML += "TREES ARE DEAD.\n",2500);
    setTimeout(()=>document.body.classList.add("glitch"),4000);
    setTimeout(()=>screen.innerHTML += "RUN.\n",6000);
    setTimeout(()=>document.body.classList.add("flash"),7000);
}

function south(){
    setTimeout(()=>screen.innerHTML += "\nNOTHING HERE.\nYOU ARE SAFE.\n",1000);
}