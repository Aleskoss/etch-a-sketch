function getSize(){
  let dimensions = 16
  const btn = document.querySelector("#dimensions")
  btn.addEventListener("click",() => {
    dimensions = prompt("What size should be the grid?")
    createPlayGround(dimensions)
  })
}
function createPlayGround(size){
  const container = document.querySelector("#container")
  while(container.lastChild){
    container.removeChild(container.lastChild)
  }
  container.style.height = "802px"
  container.style.width = "802px"
  for(let i = 0; i < size*size; i++){
    const square = document.createElement("div")
    square.style.height = `${800/size}px`
    square.style.width = `${800/size}px`
    square.classList = "square"
    container.appendChild(square)
  }
  document.addEventListener("mouseover", (e) => {
    const target = e.target
    switch(target.classList.value){
      case "square":
        changeColor(target)
        break;
    }
  })
  function changeColor(item){
    item.classList.toggle("change-color")
  }
}
getSize()
