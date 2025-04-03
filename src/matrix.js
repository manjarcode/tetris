import { COLS, ROWS } from "./constants"
import { nullish } from "./utils"

export default class Matrix {
  constructor() {
    this.matrix = Array.from({ length: COLS }, () => Array(ROWS).fill(0))
  }

  at(x,y) {
    this.x = x
    this.y = y

    return this
  }

  get() {
    this.#guard()
    return this.matrix[this.x][this.y]
  }

  set(value) {
    this.#guard()
    this.matrix[this.x][this.y] = value
  }

  #guard() {
    if (nullish(this.x) || nullish(this.y)) {
      throw new Error(`Coord (x,y) must be set but are (${this.x},${this.y})`)
    }      
  }
}