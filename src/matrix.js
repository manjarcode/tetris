import { NO_COLOR} from "./constants"
import { nullish } from "./utils"

export default class Matrix {
  constructor(columns, rows) {
    this.columns = columns
    this.rows = rows
    this.matrix = Array.from({ length: columns }, () => Array(rows).fill(0))
  }

  getColumns() {
    return this.columns
  }

  getRows() {
    return this.rows
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

  clearLines() {
    const lines = this.#findLines()

    for (const line of lines) {
      this.#clearSingleLine(line)
    }
  }

  #findLines() {    
    const lines = []
    for (let i=0; i<this.rows;i++) {
      let hasLine = true
      for (let j=0; j<this.columns && hasLine;j++) {   
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
      for (let j=0; j<this.columns; j++) {
        const color = this.matrix[j][i-1]
        this.matrix[j][i]=color
      }
    }
  }
}