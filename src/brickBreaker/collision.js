// Create collision logic for bricks and ball

// Brick collision

const checkCollisionWithBrick = (brick, ball) => {
    const ballX = ball.offsetLeft;
    const ballY = ball.offsetTop;
    const ballWidth = ball.offsetWidth;
    const ballHeight = ball.offsetHeight;

    const brickX = brick.offsetLeft;
    const brickY = brick.offsetTop;
    const brickWidth = brick.offsetWidth;
    const brickHeight = brick.offsetHeight;

    if (
        ballX < brickX + brickWidth &&
        ballX + ballWidth > brickX &&
        ballY < brickY + brickHeight &&
        ballY + ballHeight > brickY
    ) {
        return true;
    }

    return false;
}

export { checkCollisionWithBrick }