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
    document.addEventListener("click",(e) => {
    let target = e.target
    console.log(target.id)
    switch(target.id){
      case "set-blue":
        colorPicked = "set-blue"
      break;
      case "rgb":
        colorPicked = ""
      break;
    }
  })
    document.addEventListener("mouseover", (e) => {
    const target = e.target
    switch(target.classList.value){
      case "square":
        if(colorPicked === "set-blue"){
        target.classList.toggle("change-color")
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
