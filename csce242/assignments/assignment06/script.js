let x = 1;

document.getElementById("triangle-box").onclick = () => {
    document.getElementById("nav").classList.toggle("hidden");
    if(x%2 == 0) {
        document.getElementById("yolo").classList.remove("triangle-down");
        document.getElementById("yolo").classList.add("triangle-up");
    }
    else {
        document.getElementById("yolo").classList.remove("triangle-up");
        document.getElementById("yolo").classList.add("triangle-down");
    }
    x = x+1;
};

document.getElementById("exercise-1").onclick = () => {
    document.getElementById("content-1").classList.remove("hidden");
    document.getElementById("content-2").classList.add("hidden");
}

document.getElementById("exercise-2").onclick = () => {
    document.getElementById("content-2").classList.remove("hidden");
    document.getElementById("content-1").classList.add("hidden");
}

document.getElementById("txt-transport").onkeyup = (event) => {
    const transport = document.getElementById("txt-transport").value;
    if(transport == "bike") {
        document.getElementById("img").src = "images/bikeresize.jpg";
    }
    else if(transport == "scooter") {
        document.getElementById("img").src = "images/scooterresize.jpg";
    }
    else if(transport == "car") {
        document.getElementById("img").src = "images/carresize.jpg";
    }
    else if(transport == "skateboard") {
        document.getElementById("img").src = "images/skateboardresize.jpg";
    }
    else {
        document.getElementById("img").src = "";
    }
}

document.getElementById("btn-red").onclick = () => {
    heartColor("red");
}
document.getElementById("btn-green").onclick = () => {
    heartColor("green");
}
document.getElementById("btn-blue").onclick = () => {
    heartColor("blue");
}

function heartColor(color) {
    document.documentElement.style.setProperty("--custom-color", color);
}