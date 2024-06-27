import { moveBall, isMoving } from "./ball.js";

let lastRenderTime = 0

const gameLoop = (currentTime) => {
    requestAnimationFrame(gameLoop)

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

    if(secondsSinceLastRender < 1 / 60) return;

    lastRenderTime = currentTime

    if(isMoving){
        moveBall()
    }
}

requestAnimationFrame(gameLoop)