const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');

let score = 0;
let gameSpeed = 1000; // Velocidad inicial (1 segundo)

function moveTarget() {
    // Calculamos posiciones aleatorias dentro del ancho y alto de la ventana
    const maxX = window.innerWidth - 60;
    const maxY = window.innerHeight - 60;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    target.style.left = `${randomX}px`;
    target.style.top = `${randomY}px`;
}

// Evento al hacer clic en el cuadrado
target.addEventListener('click', () => {
    score++;
    scoreDisplay.innerText = score;
    
    // Aumentar dificultad ligeramente cada 5 puntos
    if (score % 5 === 0 && gameSpeed > 400) {
        gameSpeed -= 50;
        clearInterval(gameInterval);
        gameInterval = setInterval(moveTarget, gameSpeed);
    }

    moveTarget();
});

// Iniciar el movimiento automático
let gameInterval = setInterval(moveTarget, gameSpeed);

// Mover por primera vez al cargar
moveTarget();