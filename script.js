function randomNumber(){
    return Math.floor((Math.random * 255) + 1)
} 


const parentContainer = document.querySelector('#container')
const btnChangeSize = document.querySelector('#btn')



gridBuilder()

function gridBuilder(){

    let numSq = prompt("how many square?")
    sizeOfOneSquare = Math.floor(500/numSq)

    for(let i = 0; i < numSq * numSq; i++){
    
    
        const div = document.createElement('div')
    
        div.setAttribute('style', `border:1px solid black; height: ${sizeOfOneSquare}px; width: ${sizeOfOneSquare}px; background: white;`)
    
        parentContainer.appendChild(div)
    
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = "blue"
        })
    
    }
}

function gridChange(){
    
    var child = parentContainer.lastElementChild

    while(child){
        parentContainer.removeChild(child)
        child = parentContainer.lastElementChild
    }

    gridBuilder()
}


btnChangeSize.addEventListener('click', gridChange)