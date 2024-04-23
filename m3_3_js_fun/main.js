document.addEventListener("DOMContentLoaded", function() {
    const triviaButton = document.getElementById('trivia-submit');
    const triviaInput = document.getElementById('trivia-answer');
    const triviaResponse = document.getElementById('trivia-response');

    triviaButton.addEventListener('click', function() {
        checkTriviaAnswer(triviaInput.value);
    });

    triviaInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkTriviaAnswer(triviaInput.value);
        }
    });

    function checkTriviaAnswer(answer) {
        if (answer.toLowerCase() === 'paris') {
            triviaResponse.textContent = `You guessed: ${answer}. That's correct!`;
        } else {
            triviaResponse.textContent = `You guessed: ${answer}. Sorry, that's incorrect.`;
        }
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const numberButton = document.getElementById('number-submit');
    const numberInput = document.getElementById('number-input');
    const numberResponse = document.getElementById('number-response');

    function checkFiveDigitNumber(number) {
        // Check if the input is a string of exactly 5 digits
        if (!/^\d{5}$/.test(number)) {
            numberResponse.textContent = 'Please enter a valid 5-digit integer.';
        } else {
            // Convert the string to an integer to perform arithmetic checks
            const num = parseInt(number, 10);
            const result = num % 2 === 0 ? 'even' : 'odd';
            numberResponse.textContent = `The number ${number} is ${result}.`;
        }
    }

    numberButton.addEventListener('click', function() {
        checkFiveDigitNumber(numberInput.value);
    });
});

