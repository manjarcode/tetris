import { COLS, NO_COLOR, ROWS } from "./constants"
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

  clear() {
    const lines = this.#findLines()

    for (const line of lines) {
      this.#clearSingleLine(line)
    }
  }

  #findLines() {    
    const lines = []
    for (let i=0; i<ROWS;i++) {
      let hasLine = true
      for (let j=0; j<COLS && hasLine;j++) {   
        hasLine = this.matrix[j][i] > NO_COLOR && hasLine 
      }
      if (hasLine) {
        lines.push(i)
      }
    }

    return lines
  }

  #clearSingleLine(line) {
    for (let i=line; i>0; i--) {
      for (let j=0; j<COLS; j++) {
        const color = this.matrix[j][i-1]
        this.matrix[j][i]=color
      }
    }
  }
}