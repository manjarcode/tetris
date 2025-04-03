import { BLOCK_SIZE, COLS, ROWS } from './constants.js'

export default class Drawer {
  constructor(canvas) {
    this.canvas = canvas
  }

  block(x, y, color) {
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

function getColor(number) {
  const colors = [
    "#FF6B6B",
    "#FF9F1C",
    "#FFD23F",
    "#17C3B2",
    "#227C9D",
    "#8B5CF6",
    "#E6E6EA"
  ]

  return colors[number % colors.length]
}

function getDarkerColors(number) {
  const borders = [
    "#C34C4C", 
    "#B36D14", 
    "#B8962E", 
    "#0F8175", 
    "#165166", 
    "#5A3EAB", 
    "#A1A1A5"
  ]
  return borders[number % borders.length]
}