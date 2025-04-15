let title = document.querySelector('.title');
let turn = "X";

let square = [];
function winner()
{
    for(let i = 1; i<10; i++){
        square[i] = document.getElementById('item' + 1).innerHTML;
    }
    if(square[1] == square[2] && square[2] == square[3] && square != '')



}
function game(id){
    let element = document.getElementById(id);
    if(turn === 'X' && element.innerHTML == ''){
        element.innerHTML = 'X';
        turn = 'O';
        title.innerHTML = 'O';
    }
    else if(turn === 'O' && element.innerHTML == ''){
        element.innerHTML = 'O';
        turn = 'X';
        title.innerHTML = 'X';
    }
}