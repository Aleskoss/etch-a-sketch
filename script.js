// Create grid of 16 x 16 divs
// create 1 div and then create more by using loop

function changeGridColor(div){
    let darker = 0.1
    div.addEventListener("mouseover", () =>{
            div.style.backgroundColor = `rgba(${Math.floor(Math.random() * 255)}
            ,${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}
            ,${darker})`
            darker += 0.1
            console.log(darker)
    })
}

function createGrid(squares){
const container = document.querySelector("#container")
for(let i = 0; i < squares ** 2; i++){
    const div = document.createElement("div")
    div.style.width = `${840/squares}px`
    div.style.height = `${700/squares}px`
    div.setAttribute("class", "grid-div")
    container.appendChild(div)
    changeGridColor(div)
}
}

// ask user for number of squares per grid
function getGridSize(){
    const button = document.querySelector("button")
    button.addEventListener("click", () =>{
        container.innerHTML = ""
        let gridSize = prompt("How many squares do you want in your sketch pad")
        while(gridSize >= 100){
            gridSize = prompt("Input a number lower than 100")
        }
        createGrid(gridSize)
    })
}
getGridSize()