const canvas1 = document.getElementById('gameCanvas1');
const canvas2 = document.getElementById('gameCanvas2');
const ctx1 = canvas1.getContext('2d');
const ctx2 = canvas2.getContext('2d');
const gridSize = 20;
const tileSize = canvas1.width / gridSize;

let snake1 = [
    {x: 3, y: 10},
    {x: 2, y: 10},
    {x: 1, y: 10}
];

let snake2 = [
    {x: 3, y: 10},
    {x: 2, y: 10},
    {x: 1, y: 10}
];

let direction1 = 'right';
let direction2 = 'right';
let food1 = generateFood(snake1);
let food2 = generateFood(snake2);
let gameOver1 = false;
let gameOver2 = false;

let baseSpeed = 150;
let speedMultiplier = 1;
const scoreThresholds = [10, 20, 50, 100];

function generateFood(snake) {
    let position;
    do {
        position = {
            x: Math.floor(Math.random() * gridSize),
            y: Math.floor(Math.random() * gridSize)
        };
    } while (snake.some(segment => segment.x === position.x && segment.y === position.y));
    return position;
}

function resetGame() {
    snake1 = [
        {x: 3, y: 10},
        {x: 2, y: 10},
        {x: 1, y: 10}
    ];
    snake2 = [
        {x: 3, y: 10},
        {x: 2, y: 10},
        {x: 1, y: 10}
    ];
    direction1 = 'right';
    direction2 = 'right';
    food1 = generateFood(snake1);
    food2 = generateFood(snake2);
    gameOver1 = false;
    gameOver2 = false;
    speedMultiplier = 1;
}

function drawGame(ctx, snake, food, gameOver, score, isPlayer1) {
    ctx.clearRect(0, 0, canvas1.width, canvas1.width);

    // Draw snake
    snake.forEach((segment, index) => {
        ctx.fillStyle = isPlayer1 ? 
            (index === 0 ? '#2c3e50' : '#3498db') : 
            (index === 0 ? '#27ae60' : '#2ecc71');
        ctx.fillRect(segment.x * tileSize, segment.y * tileSize, tileSize - 1, tileSize - 1);
    });

    // Draw food
    ctx.fillStyle = '#e74c3c';
    ctx.fillRect(food.x * tileSize, food.y * tileSize, tileSize - 1, tileSize - 1);

    document.getElementById(score).textContent = 
        `Score: ${snake.length - 3} ${gameOver ? '(DEAD)' : ''}`;

    if (gameOver) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, canvas1.width, canvas1.width);
        ctx.fillStyle = '#fff';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Game Over!', canvas1.width/2, canvas1.width/2);
    }
}

function updateSnake(snake, direction, food, gameOver) {
    if (gameOver) return { snake, food, gameOver: true };

    const head = {x: snake[0].x, y: snake[0].y};
    switch (direction) {
        case 'up': head.y--; break;
        case 'down': head.y++; break;
        case 'left': head.x--; break;
        case 'right': head.x++; break;
    }

    if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize ||
        snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        return { snake, food, gameOver: true };
    }

    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        food = generateFood(snake);
        const score = snake.length - 2; // Current score after eating
        
        // Check if we've hit any threshold
        scoreThresholds.forEach(threshold => {
            if (score === threshold) {
                speedMultiplier *= 0.9; // Increase speed by 10%
                console.log(`Speed increased! Current multiplier: ${speedMultiplier}`);
            }
        });
    } else {
        snake.pop();
    }

    return { snake, food, gameOver: false };
}

function update() {
    if (!(gameOver1 && gameOver2)) {
        let result1 = updateSnake(snake1, direction1, food1, gameOver1);
        let result2 = updateSnake(snake2, direction2, food2, gameOver2);

        snake1 = result1.snake;
        food1 = result1.food;
        gameOver1 = result1.gameOver;

        snake2 = result2.snake;
        food2 = result2.food;
        gameOver2 = result2.gameOver;
    }
}

function draw() {
    drawGame(ctx1, snake1, food1, gameOver1, 'score1', true);
    drawGame(ctx2, snake2, food2, gameOver2, 'score2', false);
}

document.addEventListener('keydown', (event) => {
    if (gameOver1 && gameOver2 && event.code === 'Space') {
        resetGame();
        return;
    }
    
    switch (event.key) {
        // Player 1 controls (Arrow keys) - only if player 1 is alive
        case 'ArrowUp': if (!gameOver1 && direction1 !== 'down') direction1 = 'up'; break;
        case 'ArrowDown': if (!gameOver1 && direction1 !== 'up') direction1 = 'down'; break;
        case 'ArrowLeft': if (!gameOver1 && direction1 !== 'right') direction1 = 'left'; break;
        case 'ArrowRight': if (!gameOver1 && direction1 !== 'left') direction1 = 'right'; break;
        
        // Player 2 controls (WASD) - only if player 2 is alive
        case 'w': if (!gameOver2 && direction2 !== 'down') direction2 = 'up'; break;
        case 's': if (!gameOver2 && direction2 !== 'up') direction2 = 'down'; break;
        case 'a': if (!gameOver2 && direction2 !== 'right') direction2 = 'left'; break;
        case 'd': if (!gameOver2 && direction2 !== 'left') direction2 = 'right'; break;
    }
});

// Add click handler for mobile devices
canvas1.addEventListener('click', () => {
    if (gameOver1 && gameOver2) {
        resetGame();
    }
});

canvas2.addEventListener('click', () => {
    if (gameOver1 && gameOver2) {
        resetGame();
    }
});

function gameLoop() {
    update();
    draw();
    setTimeout(gameLoop, baseSpeed * speedMultiplier);
}

gameLoop();
