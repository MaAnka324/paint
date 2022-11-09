const board = document.querySelector('#board');
const colors = ['#4040bf', '#19194d', '#2d2d86', '#333399', '#202060'];
const SQUARES_NUMBER = 500;

for(let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => 
    setColor (square))

    square.addEventListener('mouseleave', () => 
    removeColor (square))

    board.append(square);
}

function setColor(element){
    const colors = getColor()
    element.style.backgroundColor = colors;
    element.style.boxShadow =  `0 0 2px ${colors}, 0 0 10px ${colors}` 
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow =  `0 0 2px #000 `
}

function getColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
