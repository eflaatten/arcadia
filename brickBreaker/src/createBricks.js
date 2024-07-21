const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const brickRowCount = 5
const brickColumnCount = window.innerWidth / 85
const brickWidth = 70
const brickHeight = 20
const brickPadding = 10
const brickOffsetTop = 30
const brickOffsetLeft = 30

let bricks = []

const createBricks = () => {
    for(let c = 0; c < brickColumnCount; c++){
        bricks[c] = []
        for(let r = 0; r < brickRowCount; r++){
            const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
            const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
            bricks[c][r] = { x: brickX, y: brickY, status: 1 };
        }
    }
}

const drawBricks = () => {
    for(let c = 0; c < brickColumnCount; c++){
        for(let r = 0; r < brickRowCount; r++){
            if(bricks[c][r].status == 1){
                const brickX = bricks[c][r].x
                const brickY = bricks[c][r].y
                ctx.beginPath()
                ctx.rect(brickX, brickY, brickWidth, brickHeight)
                ctx.fillStyle = getRandomColor()
                ctx.fill()
                ctx.closePath()
            }
        }
    }
}

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256); 
  const g = Math.floor(Math.random() * 256); 
  const b = Math.floor(Math.random() * 256); 
  return `rgb(${r},${g},${b})`; // Return RGB color string
}


createBricks()
drawBricks()

