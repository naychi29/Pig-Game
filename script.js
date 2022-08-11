'use strict';
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let scores, currentScore, activePlayer, playing ;

let init = () => {
    scores = [0, 0]
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    dice.classList.add('hidden');

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

    score0El.textContent = 0;
    score1El.textContent = 0;

    current0El.textContent = 0;
    current1El.textContent = 0;
};

init();

let switchPlayer = () => {
    currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        activePlayer = activePlayer === 1? 0 : 1;
    //    console.log(activePlayer);     
       player0El.classList.toggle('player--active');
       player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function(){
    if(playing){
        const randomNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(randomNumber);
    dice.src = (`dice-${randomNumber}.png`);
    if(randomNumber !== 1){
        dice.classList.remove("hidden");
        currentScore += randomNumber;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
        switchPlayer();
    }
    // console.log(currentValue)
    }
});

btnHold.addEventListener('click', () => {
    // State Principle
    if(playing){
        scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
    if(scores[activePlayer] >= 50){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('active--player');

        dice.classList.add('hidden');

        playing = false;
    }else{
        switchPlayer();
    }
    }
});

btnNew.addEventListener('click', () => {
    init();
    
})