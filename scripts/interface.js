document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {

    if(handleMove(event.target.id)){
        setTimeout(() =>{
            alert(`O jogo acabou, o vencedor foi o ${playerTime}`)
        }, 10);
    };

    updateSquares()  
}

function updateSquares(){

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {

        let symbol = board[square.id];

        if(symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>`;
        }
    })

}