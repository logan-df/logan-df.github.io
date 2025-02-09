/*Creating a paragraph element with content: hello*/
document.getElementById("text-generator").onclick = () => {
    const paragraph = document.createElement("p");
    paragraph.textContent = "hello";
    document.getElementById("text-generator").appendChild(paragraph);
}

/*Setting the initial color*/
document.getElementById("star").style.backgroundColor = document.getElementById("color-picker").value;

/*JS code found on: https://www.geeksforgeeks.org/how-to-change-an-element-color-based-on-value-of-the-color-picker-value-using-onclick/ */
document.getElementById("color-picker").onchange = () => {
    document.getElementById("star").style.backgroundColor = document.getElementById("color-picker").value;
}

/*Change image on click*/
document.getElementById("image").onclick = () => {
    document.getElementById("image").src = 'https://picsum.photos/id/'+Math.floor(Math.random() * 100)+'/200';
}