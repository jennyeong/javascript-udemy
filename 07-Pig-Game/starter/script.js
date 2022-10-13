'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Setting initial values
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true; // State variable for whole game, once someone win, all the functions of clicking should not work

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  diceEl.classList.add('hidden');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0; // Setting score of active player to 0 before switching player
  currentScore = 0; // Next player score set back to 0
  activePlayer = activePlayer === 0 ? 1 : 0; // Switching player
  player0El.classList.toggle('player--active'); // Will check if player0El has the class 'player--active', if have, will remove, if don't have, will add.
  player1El.classList.toggle('player--active'); // Will check if player1El has the class 'player--active', if have, will remove, if don't have, will add.
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1:
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; // Setting the score dynamically based on active player
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

// Click hold functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add currentScore to active player's score
    scores[activePlayer] += currentScore; // This is why we use UI = Player1 / Player2, but in codes we use Player0 / Player1

    // 2. Replace the scores dynamically based on the scores
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 3. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // If true, finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner'); // Adding player-winner class to show a different UI
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active'); // Remove player-active class since win already, and will affect UI
    } else {
      // 4. Switch to the next player
      switchPlayer();
    }
  }
});

// Click new game functionality
btnNew.addEventListener('click', init);
