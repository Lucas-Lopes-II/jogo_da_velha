//depois de carregar a página execulta a função que acontecerá na interface
document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

//Função que ao clicar no card execulta a jogada lança menssagem se houver vencedor
function handleClick(event) {

    let position = event.target.id;

    if(handleMove(position)){
        setTimeout(() =>{
            alert(`O jogo acabou, o vencedor foi o ${playerTime}`)
        }, 10);
    };

    updateSquare(position);
}

//Função que define e coloca o simbolo no card de acordo com o jogador da vez
function updateSquare(position){

    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}

//Função que reinicia o jogo quando botão recomeçar é clicado
document.getElementById('btn').addEventListener('click', () => {

    board = ['', '', '', '', '', '', '', '', '',];
    playerTime = 0;
    gameOver = false;

    let squares = document.querySelectorAll('.square')

    for (let i = 0; i < squares.length; i++) {
        squares[i].innerHTML = ''
    }
   
});

