// Generate a random number between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1);

// Get the necessary DOM elements
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

// Create a new paragraph element
const p = document.createElement("p");

// Initialize variables
let previousGuesses = [];
let numGuesses = 0;
let playGame = true;

// Check if the game is still ongoing
if (playGame) {
    // Add event listener to the submit button
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess); // Validate the user's guess
    });
}

// Function to validate the user's guess
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1) {
        alert("Please enter a number greater than zero");
    } else if (guess > 100) {
        alert("Please enter a number less than 100");
    } else {
        previousGuesses.push(guess);
        if (numGuesses == 10) {
            displayGuesses(guess);
            displayMessage(`Game Over! Number was ${randomNumber}`);
            endGame(); // End the game
        } else {
            displayGuesses(guess); // Display the user's guess
            checkGuess(guess); // Check if the guess is correct
        }
    }
}

// Function to check if the guess is correct
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right!`);
        endGame(); // End the game
    } else if (guess < randomNumber) {
        displayMessage(`Your guess is too low`);
    } else if (guess > randomNumber) {
        displayMessage(`Your guess is too high`);
    }
}

// Function to display the user's guesses
function displayGuesses(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess}, `;
    numGuesses++;
    remaining.innerHTML = `${10 - numGuesses}`;
    
}

// Function to display a message
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// Function to end the game
function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;

    startOver.appendChild(p); // Append the new game button
    playGame = false;
    newGame(); // Start a new game
}

// Function to start a new game
function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", () => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        previousGuesses = [];
        numGuesses = 0;

        guessSlot.innerHTML = "";
        lowOrHi.innerHTML = "";
        remaining.innerHTML = `${10 - numGuesses}`;
        userInput.removeAttribute("disabled");
        p.parentNode.removeChild(p);
        playGame = true;
    });
}
