function getSize(){
  let dimensions = 16
  const btn = document.querySelector("#dimensions")
  btn.addEventListener("click",() => {
    dimensions = prompt("What size should be the grid?")
    if(dimensions > 100) dimensions = prompt("ERROR!!! You can input only dimension lower than 100")
    createPlayGround(dimensions)
  })
}
function createPlayGround(size){
  const container = document.querySelector("#container")
  deleteGridDimensions(container)
  container.style.height = "802px"
  container.style.width = "802px"
  for(let i = 0; i < size*size; i++){
    const square = document.createElement("div")
    square.style.height = `${800/size}px`
    square.style.width = `${800/size}px`
    square.classList = "square"
    container.appendChild(square)
  }
  changeColor()
  }
function changeColor(){
  let colorPicked = ""
  let opacity = 0
    document.addEventListener("click",(e) => {
    let target = e.target
    console.log(target.id)
    switch(target.id){
      case "set-blue":
        colorPicked = "blue"
        opacity = 0
      break;
      case "rgb":
        colorPicked = "rgb"
        opacity = 0
      break;
      case "erase":
        colorPicked = "white"
        opacity = 0
      break;
    }
  })
    document.addEventListener("mouseover", (e) => {
    const target = e.target
    switch(target.classList.value){
      case "square":
        opacity += 0.1
        target.style.opacity = opacity
        if(colorPicked != "rgb"){
          target.style.backgroundColor = colorPicked
        }else{
          target.style.backgroundColor = `rgb(${generateRandomNum()}, ${generateRandomNum()}, ${generateRandomNum()})`
        }
        break;
    }
  })
}
  function generateRandomNum(){
    let randomNum = Math.floor(Math.random() * 255)
    return randomNum
}
function deleteGridDimensions(element){
  while(element.lastChild){
    element.removeChild(container.lastChild)
  }
}
getSize()
