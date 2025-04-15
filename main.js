let title = document.querySelector('.title');
let turn = 'X';
let square = [];
function gameEnd(num1,num2,num3)
{
    title.innerHTML = `${square[num1]} winner`; // Show who is the winner
    document.getElementById('item' + num1).style.background = '#000';
    document.getElementById('item' + num2).style.background = '#000';
    document.getElementById('item' + num3).style.background = '#000';

    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){location.reload();},4000);
}



function winner()
{
    for(let i = 1; i<10; i++)
        {
        square[i] = document.getElementById('item' + i).innerHTML;
    }

    if(square[1] == square[2] && square[2] == square[3] && square[1] != ''){
        gameEnd(1,2,3);
    }

    if(square[4] == square[5] && square[5] == square[6] && square[5] != ''){
        gameEnd(4,5,6);
    }

    if(square[7] == square[8] && square[8] == square[9] && square[7] != ''){
        gameEnd(7,8,9);
    }

    if(square[1] == square[4] && square[4] == square[7] && square[4] != ''){
        gameEnd(1,4,7);
    }

    if(square[2] == square[5] && square[5] == square[8] && square[8] != ''){
        gameEnd(2,5,8);
    }

    if(square[3] == square[6] && square[6] == square[9] && square[6] != ''){
        gameEnd(3,6,9);
    }

    if(square[1] == square[5] && square[5] == square[9] && square[5] != ''){
        gameEnd(1,5,9);
    }

    if(square[3] == square[5] && square[5] == square[7] && square[5] != ''){
        gameEnd(3,5,7);
    }


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
    winner();
}