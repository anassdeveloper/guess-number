'use strict';
//Math.trunc(Math.random() * 20) + 1
let secretNumber = 11;
let score = 20;
let hightscore = 0;

const displayMessage = message => {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check')
.addEventListener('click', function(){
    //-----> RANDOM Number :
    const guess = Number(document.querySelector('.guess').value)
    
    // if user dont enter input :
    if(!guess) displayMessage('⛔️ No number!')
    
    // if input of user == random number:
    else if(guess === secretNumber){
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number')
        .textContent = secretNumber;
        document.querySelector('body')
        .style.backgroundColor = '#60b347';
        document.querySelector('.number')
        .style.width = '30rem';
    }
    // condition between score and hightscore
    if(score > hightscore){
        hightscore = score;
        document.querySelector('.hightscore')
        .textContent = hightscore;
    }else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!')
            score--;
            document.querySelector('.score')
            .textContent = score;
        }else{
            displayMessage('💥 You lost the game!');
            document.querySelector('.score')
            .textContent = 0;
        }
    }
});

// TRY AGAIN MORE CHANCE FOR USER 
document.querySelector('.again')
.addEventListener('click', function(){
    score = 20;
    
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...')
    document.querySelector('.score')
    .textContent = score;

    document.querySelector('.number')
    .textContent = '?';

    document.querySelector('.guess').value = '';

    document.querySelector('body')
    .style.backgroundColor = '#222';

    document.querySelector('.number')
    .style.width = '15rem';

    
})