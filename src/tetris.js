import {MOVE, DOWN_ITERATIONS} from './constants.js'

export default class Tetris {
  #isRotating
  #isPaused

  constructor(drawer, matrix, pieceBuilder) {
    this.matrix = matrix
    this.drawer = drawer
    this.pieceBuilder = pieceBuilder

    this.iteration = 0
    this.isOver = false

    this.#isRotating = false
    this.#isPaused = false

    this.active = this.pieceBuilder.getRandom()
  }

  iterate() {
    this.#moveActive()

    if (this.#isRotating) {
      this.active.wannaRotate()
      this.#isRotating = false
    }

    if (this.#isDownIteration()) {
      this.#consolidateDown()
    }

    this.#render()
  }

  #moveActive() {
    if (this.move === MOVE.LEFT) {
      this.active.wannaLeft()
    }

    if (this.move === MOVE.RIGHT) {
      this.active.wannaRight()
    }

    this.move = MOVE.NONE
  }

  #isDownIteration() {
    return this.iteration++ % DOWN_ITERATIONS === 0
  }

  #consolidateDown() {
    if (this.active.canDown()) {
      this.active.down()
    } else {
      this.#touchGround()
    }
  }

  #touchGround() {
    this.#swapActive()
    this.matrix.clear()    
    this.#checkForGameOver()
  }

  #swapActive() {
    this.active.destroy()
    this.active = null
    this.active = this.pieceBuilder.getRandom()
  }

  #checkForGameOver() { 
    this.isOver = !this.active.canDown()
  }

  #render() {
    this.drawer.clear()
    this.drawer.matrix(this.matrix)
    this.drawer.piece(this.active)
  }

  tooglePause() {
    this.#isPaused = !this.#isPaused
  }

  wannaLeft() {
    this.move = MOVE.LEFT
  }

  wannaRight() {
    this.move = MOVE.RIGHT
  }

  wannaRotate() {
    this.#isRotating = true
  }

  over() {
    this.drawer.gameOver()
  }
}