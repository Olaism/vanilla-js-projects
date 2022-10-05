const questionElement = document.querySelector('.question');
const guessForm = document.querySelector('#your-guess');
const prevGuessesElement = document.querySelector('.prev-guesses');
const numLeft = document.querySelector('.num-left');
const resultElement = document.querySelector('.result');

let countGuess = 0;
const maxGuess = 10;
const prevGuesses = [];
let comGuess = computerGuess(100);
const form = guessForm.elements.guess;

numLeft.textContent = maxGuess;

function runGuess() {
    form.focus();
    guessForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (prevGuesses.length === maxGuess) {
            form.disabled = true;
            form.value = '';
            resultElement.textContent = `The number i'm thinking of is ${comGuess}`;
        } else {
            let yourGuess = form.value;
            prevGuesses.push(yourGuess);
            countGuess = prevGuesses.length;
            displayPrevGuesses(yourGuess);
            HiOrLow(yourGuess);
            displayRemaining(maxGuess - countGuess);
            form.value = '';
            form.focus();
        }
    })
}

function computerGuess(guessNo) {
    return Math.floor(Math.random() * guessNo) + 1;
}

function displayRemaining(num) {
    if (num > 5) {
        numLeft.style.color = 'green';
    } else {
        numLeft.style.color = 'red';
    }

    numLeft.textContent = num;
}

function displayPrevGuesses(guess) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('prev-guess');
    newDiv.textContent = guess;
    if (guess === comGuess) {
        newDiv.style.backgroundColor = 'green';
    }
    prevGuessesElement.appendChild(newDiv);
}

function HiOrLow(guess) {
    if (guess < comGuess) {
        resultElement.textContent = 'Your guess is too low';
        resultElement.style.backgroundColor = '#ff0000';
    } else if (guess > comGuess) {
        resultElement.textContent = 'Your guess is too high';
        resultElement.style.backgroundColor = '#ff0000';
    } else {
        form.disabled = true;
        resultElement.textContent = `You guessed it right at your ${countGuess} attempts.`;
        resultElement.style.backgroundColor = '#00ff00';
    }
}

runGuess();