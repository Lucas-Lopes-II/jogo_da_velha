document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {

    handleMove(event.target.id);
    updateSquares()  
}

function updateSquares(){

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {

        let position = square.id;
        let symbol = board[position];

        if(symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })

}