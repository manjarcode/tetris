import {X_AXIS_LOWER_BOUND, X_AXIS_HIGHER_BOUND, Y_AXIS_LOWER_BOUND, Y_AXIS_HIGHER_BOUND, EMPTY_CELL} from './constants.js'

export default class Block {
  constructor(x, y, color, matrix, snapshot) {
    this.x = x
    this.y = y
    this.color = color
    this.matrix = matrix
    this.snapshot = snapshot
  }

  getPosition() {
    return new Vector(this.x, this.y)
  }

  getColor() {
    return this.color
  }

  canTranslate(translation) {
    const nextX = this.x + translation.x
    const nextY = this.y + translation.y
    
    const next = new Block(nextX, nextY, this.color, this.matrix, this.snapshot)
    return next.isValid()
  }

  translate(translation) {
    this.x = this.x + translation.x
    this.y = this.y + translation.y
  }

  consolidate() {
    // Esta dependencia con matrix creo que se puede eliminar
    this.matrix.at(this.x,this.y).set(this.color)
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

  isValid() {
    const isValidX = this.x >= X_AXIS_LOWER_BOUND && this.x < X_AXIS_HIGHER_BOUND
    const isValidY = this.y >= Y_AXIS_LOWER_BOUND && this.y < Y_AXIS_HIGHER_BOUND

    if (!isValidX || ! isValidY)
      return false

    const cell = this.matrix.at(this.x,this.y).get()

    const isCellEmpty = cell === EMPTY_CELL 

    return isCellEmpty
  }
}

export class Vector {
  constructor(x,y) {
    this.x = x
    this.y = y
  }

  *[Symbol.iterator]() {
    yield this.x
    yield this.y
  }


  toString() {
    return `${String(this.x)}${String(this.y)}`
  }
}
