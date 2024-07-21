import { checkCollisionWithPlatform } from "./player.js";
import { platformHeight } from './player.js';

const ball = document.getElementById("ball");
let isMoving = false;

const moveBall = () => {
    let x = ball.offsetLeft;
    let y = ball.offsetTop;
    const speed = 2;

    let dx = 2 * speed;
    let dy = -2 * speed;

    const ballWidth = 20;
    const ballHeight = 20;

    const updateBallPosition = () => {
    if (!isMoving) return;

    x += dx;
    y += dy;

    if(checkCollisionWithPlatform()) {
        dy = -dy;
    }

    if (x + dx > window.innerWidth - ballWidth || x + dx < 0) {
        dx = -dx;
    }

    if (y + dy > window.innerHeight - ballHeight || y + dy < 0) {
        dy = -dy;
    }

    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;

    requestAnimationFrame(updateBallPosition);
    };

    updateBallPosition();
};

document.addEventListener("keydown", () => {
    if (!isMoving) {
    isMoving = true;
    moveBall();
    }
});

export { moveBall, isMoving };
