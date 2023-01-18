let moviesList = ["Lord of the Rings", "Harry Potter", "Avatar","Inception"];

let theMovieName = document.getElementById("movieName");
let btn = document.getElementById("button");
let theResult = document.getElementById("result");


btn.addEventListener("click", function() {
  let inputValue = theMovieName.value;
  let a =0;
  for (let i = 0; i < moviesList.length; i++) {
    if (inputValue.toLowerCase() === moviesList[i].toLowerCase()) {

    inputValue = document.createElement("h1");   
    inputValue.innerText = "The movie can be rented";
    inputValue.style.color = "green";
    theResult.appendChild(inputValue);
    theMovieName.value = "";  
    a++
    break
    } 
  } 
  
  if(a===0) {
     inputValue = document.createElement("h1");  
     inputValue.innerText = "The movie can't be rented";
     inputValue.style.color = "red";
     theResult.appendChild(inputValue);
     theMovieName.value = "";  
  }
})

