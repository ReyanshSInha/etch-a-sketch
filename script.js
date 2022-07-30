function randomNumber(){
    return Math.floor((Math.random * 255) + 1)
} 


const parentContainer = document.querySelector('#container')

numofsquares = 399

for(let i = 0; i <= numofsquares; i++){


    const div = document.createElement('div')

    div.setAttribute('style', `border:1px solid black; height: 25px; width: 25px; background: white;`)

    parentContainer.appendChild(div)

    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = "blue"
    })

}

