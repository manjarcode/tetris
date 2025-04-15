import { Vector } from './block.js'
import {MOVE, DOWN_ITERATIONS} from './constants.js'

export default class Tetris {
  #isRotating
  #isPaused
  #next

  constructor(mainScreen, nextScreen, pieceBuilder) {
    this.mainScreen = mainScreen
    this.nextScreen = nextScreen
    this.pieceBuilder = pieceBuilder

    this.iteration = 0
    this.isOver = false

    this.#isRotating = false
    this.#isPaused = false

    this.active = this.pieceBuilder.getRandom(4, 0)
    this.#next = this.pieceBuilder.getRandom(0, 0)

    nextScreen.render(this.#next)
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

  tooglePause() {
    this.#isPaused = !this.#isPaused
  }

  over() {
    this.mainScreen.gameOver()
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
    this.mainScreen.clearLines()
    this.#checkForGameOver()
  }

  #swapActive() {
    this.active.destroy()
    this.active = null    
    this.active = this.#next
    this.active.translate(new Vector(4, 0))
    this.#next = null
    this.#next = this.pieceBuilder.getRandom(1, 1)
    this.nextScreen.render(this.#next)
  }

  #checkForGameOver() { 
    this.isOver = !this.active.canDown()
  }

  #render() {
    this.mainScreen.render(this.active)    
  }
}