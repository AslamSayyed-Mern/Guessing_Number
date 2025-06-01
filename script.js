        let random_num = Math.floor(Math.random() * 10);
        let chances = 3;
        const resultDiv = document.getElementById('result');
        const attemptsSpan = document.getElementById('attempts');
        const guessInput = document.getElementById('guessInput');
        const guessButton = document.getElementById('guessButton');

        function updateAttempts() {
            attemptsSpan.textContent = chances;
        }

        function showResult(message, isSuccess) {
            resultDiv.style.display = 'block';
            resultDiv.textContent = message;
            resultDiv.className = 'result-message ' + (isSuccess ? 'success' : 'error');
        }

        function checkGuess() {
            const userGuess = parseInt(guessInput.value);
            
            if (isNaN(userGuess) || userGuess < 0 || userGuess > 9) {
                showResult("Please enter a valid number between 0 and 9", false);
                return;
            }

            if (userGuess === random_num) {
                showResult("🎉 Congratulations! You won!", true);
                guessButton.disabled = true;
                guessInput.disabled = true;
                return;
            }

            chances--;
            updateAttempts();

            if (chances === 0) {
                showResult(`Game Over! The correct number was ${random_num}`, false);
                guessButton.disabled = true;
                guessInput.disabled = true;
            } else {
                showResult(`Wrong guess! Try again. ${chances} attempts remaining.`, false);
            }

            guessInput.value = '';
            guessInput.focus();
        }

        guessButton.addEventListener('click', checkGuess);
        guessInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkGuess();
            }
        });