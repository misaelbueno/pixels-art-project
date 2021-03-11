let pixelBoard = document.getElementById("pixel-board");
for (let cont = 1; cont <= 5; cont+=1) {
  let div = document.createElement("div");
  div.classList.add("tr")
  for (let cont2 = 1; cont2 <= 5; cont2+=1){
    let div2 = document.createElement("div");
    div2.classList.add("pixel");
    div.appendChild(div2);
  }  
  pixelBoard.appendChild(div);
}


let selected = document.querySelectorAll(".color");
for (let index = 0; index < selected.length; index+=1) {
  selected[index].addEventListener("click", changeSelected)
} 

let pixelSelected = document.querySelectorAll(".pixel");
for (let index = 0; index < pixelSelected.length; index += 1) {
  pixelSelected[index].addEventListener("click", changeColor);
}



function changeSelected(event) {
  let selectElement = document.querySelector(".selected")
  selectElement.classList.remove("selected")
  event.target.classList.add("selected")
}

function changeColor(event) {
  let selectElement = document.querySelector(".selected")
  let color = window.getComputedStyle(selectElement).backgroundColor
  event.target.style.backgroundColor = color    
}


let buttonClear = document.getElementById("clear-board");
buttonClear.addEventListener("click", clearPixels);

function clearPixels() {
  for (index = 0; index < pixelSelected.length; index+=1) {
    pixelSelected[index].style.backgroundColor = "white";
  }
}