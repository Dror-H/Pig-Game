//////////////////////////////
// User Rolls Dice Function //
//////////////////////////////
const rollBtn = document.querySelector(".btn--roll");
const rollImage = document.querySelector(".dice");
const btnhold = document.querySelector(".btn--hold")
const newGame = document.querySelector(".btn--new")

let currentScore = 0;
let activePlayer = 0;


// player--active
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");

// let player1Score = 0
// let player2Score = 0

let playerTotal = [0, 0];


function switchPlayer() {
    // switch player
    currentScore = 0;
    const currentScoreDom = document.querySelector(`#current--${activePlayer}`)
    currentScoreDom.textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;

    // player--active
    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");

}
rollBtn.addEventListener("click", function () {
    // Step - 1: Generate a random dice roll
    const currentScoreDom = document.querySelector(`#current--${activePlayer}`)
    const randomDice = Math.trunc(Math.random() * 6) + 1
    // Step - 2: Display that dice roll

    rollImage.src = `dice-${randomDice}.png`

    // Step - 3: Check if the dice is 1 or not
    if (randomDice === 1) {
        switchPlayer()

    } else {
        // add the dice score to current score
        currentScore += randomDice;

        // Display the current score
        currentScoreDom.textContent = currentScore;
    }

})

// current--0
// current--1

///////////////////////////////
// User Holds Score Function //
///////////////////////////////
btnhold.addEventListener("click", () => {
    playerTotal[activePlayer] += currentScore;

    const playerScoreDOM = document.querySelector(`#score--${activePlayer}`);

    playerScoreDOM.textContent = playerTotal[activePlayer]

    if (playerTotal[activePlayer] >= 10) {
        const playerName = document.querySelector(`#name--${activePlayer}`);
        playerName.textContent = "💯Winner!💐";
        rollBtn.disabled = true;
        btnhold.disabled = true;
    } else {
        switchPlayer()
    }

    // if (activePlayer === 0) {
    //     player1Score += currentScore;
    //     player1ScoreDom.textContent = player1Score;

    //     if (player1Score >= 10) {
    //         console.log("Player 1 Win!");
    //         rollBtn.disabled = true;
    //         btnhold.disabled = true
    //     } else {
    //         switchPlayer()
    //     }


    // } else {
    //     player2Score += currentScore;
    //     player2ScoreDom.textContent = player2Score;

    //     if (player2Score >= 10) {
    //         console.log("Player 2 Win!");
    //         rollBtn.disabled = true;
    //         btnhold.disabled = true
    //     } else {
    //         switchPlayer()
    //     }

    // }
})






////////////////////////////
// User New Game Function //
////////////////////////////
// const newGame = document.querySelector(".btn--new")


newGame.addEventListener("click", () => {
    currentScore = 0;
    activePlayer = 0;
    playerTotal = [0, 0];
    rollBtn.disabled = false;
    btnhold.disabled = false;

    const player1Name = document.querySelector("#name--0");
    const player2Name = document.querySelector("#name--1");

    const player1ScoreDOM = document.querySelector("#score--0");
    const player2ScoreDOM = document.querySelector("#score--1");

    player1ScoreDOM.textContent = 0;
    player2ScoreDOM.textContent = 0;

    const currentScoreDom = document.querySelector(`#current--${activePlayer}`)
    currentScoreDom.textContent = 0;

    rollImage.src = `dice-1.png`

});








// =====================================================================


// // Step - 3: Check if the dice is 1 or not
// if (randomDice === 1) {
//     // Switch player
//     currentScore = 0;
//     const currentPlayer = document.querySelector(`#current--${activePlayer}`);
//     currentPlayer.textContent = 0;

//     activePlayer = activePlayer === "dror" ? "zahid" : "dror";
// } else {
//     // Add the dice score to current score
//     currentScore += randomDice; // 2 - 6
//     // Display the current score
//     const currentPlayer = document.querySelector(`#current--${activePlayer}`);
//     currentPlayer.textContent = currentScore;
// }



















