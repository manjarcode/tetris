import Drawer from './drawer.js'
import {COLS, ROWS, MOVE, DOWN_ITERATIONS} from './constants.js'

export default class Tetris {
  constructor(canvas, matrix, pieceBuilder) {
    this.matrix = matrix
    this.drawer = new Drawer(canvas)
    this.pieceBuilder = pieceBuilder

    this.iteration = 0
    this.isOver = false

    this.rotate = false

    this.paused = false
    this.buildActive()
  }

  iterate() {
    this.moveActive()

    if (this.rotate) {
      this.active.wannaRotate()
      this.rotate = false
    }

    if (this.mustDown()) {
      this.down()
    }

    this.render()
  }

  // TODO: Class Matrix
  hasTetrisLines() {    
    const lines = []
    for (let i=0; i<ROWS;i++) {
      let hasLine = true
      for (let j=0; j<COLS && hasLine;j++) {  
        hasLine = this.matrix.at(j,i).get() > 0 && hasLine //TODO: igual se rompe en ciertas situaciones
      }
      if (hasLine) {
        lines.push(i)
      }
    }

    return lines
  }

  applyTetris(lines) {
    console.log('LINES', lines)
    for (const line of lines) {
      this.applyLine(line)
    }
  }

  applyLine(line) {
    for (let i=line; i>0; i--) {
      for (let j=0; j<COLS; j++) {
        const color = this.matrix.at(j,i-1).get()
        this.matrix.at(j,i).set(color)
      }
    }
  }

  tooglePause() {
    this.paused = !this.paused
  }

  draw(x, y) {
    const color = this.matrix.at(x,y).get()
    if (color > 0) {
      this.drawer.cell(x, y, color)
    }
  }

  render() {
    this.table()

    this.drawer.clear()
    for (let i=0; i<COLS; i++) {
      for (let j=0; j<ROWS; j++) {
        this.draw(i, j)
      }
    }

    for (const block of this.active.blocks) {
      this.drawer.block(block)
    }
  }

  table() {
    const table = document.getElementById('matrix')
    table.innerHTML=""
    for (let i=0; i<COLS; i++) {
      const row = document.createElement('tr')
      for (let j=0; j<ROWS; j++) {
        const cell = document.createElement('td')
        cell.textContent = this.matrix.at(i,j).get()
        
        row.appendChild(cell)
      }

      table.appendChild(row)
    }
  }

  down() {
    if (this.active.canDown()) {
      this.active.down()
    } else {
      this.active.destroy()
      this.active = null
      this.buildActive()

      const lines = this.hasTetrisLines()
      if (lines.length > 0) {
        this.applyTetris(lines)
      }

      this.updateGameOver()
    }
  } 

  updateGameOver() { 
    this.isOver = !this.active.canDown()
  }

  mustDown() {
    return this.iteration++ % DOWN_ITERATIONS === 0
  }

  moveActive() {
    if (this.move === MOVE.LEFT) {
      console.log('moving left')
      this.active.wannaLeft()
    }

    if (this.move === MOVE.RIGHT) {
      console.log('moving right')
      this.active.wannaRight()
    }

    this.move = MOVE.NONE
  }

  buildActive() {
    this.active = this.pieceBuilder.getRandom()
  }

  wannaLeft() {
    console.log ('wanna left')
    this.move = MOVE.LEFT
  }

  wannaRight() {
    console.log('wanna right')
    this.move = MOVE.RIGHT
  }

  wannaRotate() {
    console.log('wanna rotate')
    this.rotate = true
  }

  status() {
    console.log('active', this.active)
    console.log('game', this.game)
    console.log('matrix', this.matrix)
  }


  over() {
    this.drawer.gameOver()
  }
}