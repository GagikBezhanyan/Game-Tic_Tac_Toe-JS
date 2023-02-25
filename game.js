'use strict'; 
let group = document.getElementById('group'); 
let block = document.getElementsByClassName('block'); 
let isWinnerWin = true; 
let player = true; 
let arr = [ 
    ['0','1','2'], 
    ['3','4','5'], 
    ['6','7','8'], 
    ['0','3','6'], 
    ['1','4','7'], 
    ['2','5','8'], 
    ['0','4','8'], 
    ['6','4','2'], 
]; 
 
group.addEventListener('click',(e)=>{ 
    if (e.target.innerText === '' && isWinnerWin) { 
        if (player) { 
            e.target.innerText = 'x'; 
            document.querySelector('h2').innerText = 'Player 2'; 
            player = !player; 
        } else { 
            e.target.innerText = 'o' 
            document.querySelector('h2').innerText = 'Player 1'; 
            player = !player; 
        } 
        checkWinner(); 
    } 
}) 
 
document.getElementById('reset').addEventListener('click', function() { 
    player = true; 
    isWinnerWin = true; 
    document.querySelector('h2').innerText = 'Player 1'; 
    for (let i = 0; i < block.length; i++) { 
        block[i].innerHTML = ''; 
    } 
  }) 
 
function checkWinner() { 
    for (let i = 0; i < arr.length; i++) { 
        if (block[arr[i][0]].innerText === 'x' && block[arr[i][1]].innerText === 'x' && block[arr[i][2]].innerText === 'x') { 
            isWinnerWin = false; 
            alert('Player "X" win'); 
        } 
    }  
    for (let i = 0; i < arr.length; i++) { 
        if (block[arr[i][0]].innerText === 'o' && block[arr[i][1]].innerText === 'o' && block[arr[i][2]].innerText === 'o') { 
            isWinnerWin = false; 
            alert('Player "O" win'); 
        } 
    }    
}