let getTextSize = document.getElementById("textSize");
let heading = document.getElementById("heading");
let getColor = document.getElementById("color");
let button = document.getElementById("button");


let changeColor = (element, color) => color ? element.style.color = color : element.style.color = "black";
let changeTextSize = (element, textSize) => textSize ? element.style.fontSize = textSize + "px" : element.style.fontSize = 24 + "px";

button.addEventListener("click", () => {
    
return `${changeColor(heading, getColor.value)}, ${changeTextSize(heading, getTextSize.value)} `
    
})

















