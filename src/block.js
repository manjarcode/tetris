import {NO_COLOR, COLS, ROWS, ACTIVE_COLOR, X_AXIS_LOWER_BOUND, X_AXIS_HIGHER_BOUND, Y_AXIS_LOWER_BOUND, Y_AXIS_HIGHER_BOUND, EMPTY_CELL, BOUND_COLOR} from './constants.js'

export default class Block {
  constructor(x, y, color, matrix, snapshot) {
    this.x = x
    this.y = y
    this.color = color
    this.matrix = matrix
    this.snapshot = snapshot
  }

  canTranslate(translation) {
    const nextX = this.x + translation.x
    const nextY = this.y + translation.y
    
    const next = new Block(nextX, nextY, this.color, this.matrix, this.snapshot)
    return next.isValid()
  }

  canDown() {
    const nextY = this.y+1
    const isOutOfBound = nextY >= ROWS

    let hasBlockBelow= false
    try {
      const below = this.matrix.at(this.x,this.y+1).get()
      hasBlockBelow = below > 0 && below < BOUND_COLOR
      console.log('hasBlockBelow', hasBlockBelow)
    } catch(err) {
      console.log('ojito error', this.x, nextY, err)
    }

    return !isOutOfBound && !hasBlockBelow
  }

  down() {
    const nextY = this.y + 1

    this.moveInMatrix(this.x, nextY)
  }

  canLeft() {
    const nextX = this.x - 1
    return nextX >= 0   
  }

  left() {
    this.moveInMatrix(this.x-1, this.y)
  }

  canRight() {
    const nextX = this.x + 1
    return nextX < COLS

  }
  right() {
    this.moveInMatrix(this.x+1, this.y)
  }

  moveInMatrix(nextX, nextY) {
    const currentX = this.x
    const currentY = this.y

    this.matrix.at(currentX,currentY).set(NO_COLOR)
    this.matrix.at(nextX,nextY).set(this.color)

    this.x = nextX
    this.y = nextY
  }

  destroy() {
    if (this.color > ACTIVE_COLOR) { 
      this.color -= ACTIVE_COLOR
      this.matrix.at(this.x,this.y).set(this.color)
    }
  }

  toString() {
    return `(${this.x},${this.y})`
  }

  relativeTo(block) {
    return new Vector(
      this.x - block.x,
      this.y - block.y 
    )
  }

  takeSnapshot() {
    this.snapshot = [this.x, this.y]
  }

  translate(translation) {
    this.x = this.x + translation.x
    this.y = this.y + translation.y
  }

  cleanMatrix() {
    const [x,y] = this.snapshot
    this.matrix.at(x,y).set(NO_COLOR)
  }

  fixMatrix() {
    this.matrix.at(this.x,this.y).set(this.color)
  }

  isValid() {
    const isValidX = this.x >= X_AXIS_LOWER_BOUND && this.x < X_AXIS_HIGHER_BOUND
    const isValidY = this.y >= Y_AXIS_LOWER_BOUND && this.y < Y_AXIS_HIGHER_BOUND

    if (!isValidX || ! isValidY)
      return false

    const cell = this.matrix.at(this.x,this.y).get()

    const isCellEmpty = cell === EMPTY_CELL 
    const isCellActive = cell > ACTIVE_COLOR

    const isValidCell = isCellEmpty || isCellActive 

    return isValidCell
  }
}

export class Vector {
  constructor(x,y) {
    this.x = x
    this.y = y
  }

  toString() {
    return `${String(this.x)}${String(this.y)}`
  }
}
