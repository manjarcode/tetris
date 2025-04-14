import { BLOCK_SIZE, COLS, ROWS } from './constants.js'
import { getColor, getDarkerColors } from './utils.js'

export default class Drawer {
  constructor(canvas) {
    this.canvas = canvas
  }

  matrix(matrix) {
    for (let i=0; i<COLS; i++) {
      for (let j=0; j<ROWS; j++) {
        const color = matrix.at(i,j).get()
        this.cell(i, j, color)      
      }
    }    
  }

  piece(piece) {
    const blocks = piece.getBlocks()
    for (const block of blocks) {
      const [x,y] = block.getPosition()
      const color = block.getColor()
      this.cell(x,y,color)
    }
  }

  cell(x, y, color) {
    if (color === 0) {
      return
    }
    const posX = x * 40
    const posY = y * 40

    this.canvas.fillStyle = getColor(color)
    this.canvas.fillRect(posX, posY, BLOCK_SIZE, BLOCK_SIZE)
    this.canvas.strokeStyle = getDarkerColors(color)
    this.canvas.strokeRect(posX, posY, BLOCK_SIZE, BLOCK_SIZE)
  }

  clear() {
    this.canvas.fillStyle="white"
    this.canvas.fillRect(0,0, COLS*BLOCK_SIZE, ROWS*BLOCK_SIZE)
  }
  
  gameOver() {
    this.canvas.font = "48px roboto"
    this.canvas.fillStyle="#000000"
    this.canvas.fillText("Game Over!", 85, 376)
  }
}
