let position;

document.getElementById("btn-draw").onclick = () => {
    const stair = document.createElement("div");
    stair.setAttribute("id", "stairs");
    document.getElementById("stair-container").append(stair);
    for(let i = 0; i < 10; i++) {
        const step = document.createElement("hr");
        stair.append(step);
    }
    document.getElementById("btn-climb").classList.toggle("hidden");
    document.getElementById("img").classList.toggle("hidden");
    position = -500;
    document.getElementById("img").style.setProperty("bottom", position + "px");
};

document.getElementById("btn-climb").onclick = () => {
    let x = 0;
    let y = 0;
    let interval = setInterval(()=>{
        x++;
        position += 50;
        document.getElementById("img").style.setProperty("bottom", position + "px");
        if(y == 0) {
            document.getElementById("img").src = "images/right.png";
            y = 1;
        }
        else if(y == 1) {
            document.getElementById("img").src = "images/left.png";
            y = 0;
        }
        if(x == 6) {
            clearInterval(interval);
        }
    }, 1000);
}