document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})


function handleClick(event) {

    let position = event.target.id;

    if(handleMove(position)){
        setTimeout(() =>{
            alert(`O jogo acabou, o vencedor foi o ${playerTime}`)
        }, 10);
    };

    updateSquare(position);
}


function updateSquare(position){

    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}


document.getElementById('btn').addEventListener('click', () => {

    board = ['', '', '', '', '', '', '', '', '',];
    playerTime = 0;
    gameOver = false;

    let squares = document.querySelectorAll('.square')

    for (let i = 0; i < squares.length; i++) {
        squares[i].innerHTML = ''
    }
   
});

