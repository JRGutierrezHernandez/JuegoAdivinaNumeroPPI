// Variables del juego
let randomNumber;
let attemptsLeft;
let attempts;
let gameOver;

// Elementos del DOM
const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const restartBtn = document.getElementById('restart-btn');
const feedback = document.getElementById('feedback');
const attemptsList = document.getElementById('attempts-list');
const attemptsLeftElement = document.getElementById('attempts-left');

// Inicializar el juego
function initGame() {
    // Generar número aleatorio entre 1 y 100
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 10;
    attempts = [];
    gameOver = false;
    
    // Restablecer la interfaz
    guessInput.value = '';
    guessInput.disabled = false;
    guessBtn.disabled = false;
    feedback.textContent = '';
    feedback.className = 'feedback';
    attemptsList.innerHTML = '';
    attemptsLeftElement.textContent = `Intentos restantes: ${attemptsLeft}`;
    restartBtn.style.display = 'none';
    
    // Para debugging (puedes eliminar esta línea en producción)
    console.log('Número a adivinar:', randomNumber);
}

// Comprobar el intento del jugador
function checkGuess() {
    if (gameOver) return;
    
    const userGuess = parseInt(guessInput.value);
    
    // Validar la entrada
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = 'Por favor, introduce un número válido entre 1 y 100.';
        feedback.className = 'feedback error';
        return;
    }
    
    // Comprobar si ya se probó este número
    if (attempts.includes(userGuess)) {
        feedback.textContent = `Ya probaste el número ${userGuess}. Intenta con otro.`;
        feedback.className = 'feedback info';
        guessInput.value = '';
        return;
    }
    
    // Añadir el intento a la lista
    attempts.push(userGuess);
    displayAttempts();
    
    // Reducir los intentos restantes
    attemptsLeft--;
    attemptsLeftElement.textContent = `Intentos restantes: ${attemptsLeft}`;
    
    // Comprobar si el jugador acertó
    if (userGuess === randomNumber) {
        endGame(true);
        return;
    }
    
    // Proporcionar pistas
    if (userGuess < randomNumber) {
        feedback.textContent = `${userGuess} es demasiado bajo. ¡Intenta con un número más alto!`;
        feedback.className = 'feedback info';
    } else {
        feedback.textContent = `${userGuess} es demasiado alto. ¡Intenta con un número más bajo!`;
        feedback.className = 'feedback info';
    }
    
    // Comprobar si se agotaron los intentos
    if (attemptsLeft === 0) {
        endGame(false);
    }
    
    // Limpiar el campo de entrada
    guessInput.value = '';
    guessInput.focus();
}

// Mostrar los números ya probados
function displayAttempts() {
    attemptsList.innerHTML = '';
    attempts.forEach(attempt => {
        const attemptElement = document.createElement('span');
        attemptElement.classList.add('attempt-number');
        attemptElement.textContent = attempt;
        attemptsList.appendChild(attemptElement);
    });
}

// Finalizar el juego
function endGame(isWin) {
    gameOver = true;
    
    if (isWin) {
        feedback.textContent = `¡Felicidades! Adivinaste el número ${randomNumber} en ${10 - attemptsLeft} intentos.`;
        feedback.className = 'feedback success';
    } else {
        feedback.textContent = `¡Game Over! El número era ${randomNumber}. Mejor suerte la próxima vez.`;
        feedback.className = 'feedback error';
    }
    
    guessInput.disabled = true;
    guessBtn.disabled = true;
    restartBtn.style.display = 'inline-block';
}

// Event Listeners
guessBtn.addEventListener('click', checkGuess);
restartBtn.addEventListener('click', initGame);
guessInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

// Iniciar el juego cuando se carga la página
window.onload = initGame;

