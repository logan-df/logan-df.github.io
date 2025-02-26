window.onload = () => {
    const titles = [];
    titles["Happy Birthday"] = "images/birthday.jpg";
    titles["Crazy Clown"] = "images/clown.jpg";
    titles["It's Raining"] = "images/rain.jpg";
    titles["Quiet Time"] = "images/read.jpg";
    titles["Working Hard"] = "images/shovel.jpg";
    titles["Work from Home"] = "images/work.jpg";
    const section = document.getElementById("titles");
    const imageHolder = document.getElementById("image-holder");

    for(let title in titles) {
        const p = document.createElement("p");
        section.append(p);
        p.innerHTML = `${title}`;
        p.onclick = () => {
            imageHolder.classList.toggle("hidden");
            document.getElementById("image-title").innerHTML = `${title}`;
            document.getElementById("img").src = `${titles[title]}`
        }
    }
}

document.getElementById("close").onclick = () => {
    document.getElementById("image-holder").classList.toggle("hidden");
}