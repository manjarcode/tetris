import Drawer from './drawer.js'

export default class Screen {
  constructor(matrix,  drawer) {
    this.matrix = matrix
    this.drawer = drawer
  }

  render(piece) {
    this.drawer.clear()
    this.drawer.matrix(this.matrix)
    this.drawer.piece(piece)
  }

  clearLines() {
    this.matrix.clearLines()
  }

  gameOver() {
    this.drawer.gameOver()
  }

  static create(canvasId, matrix) {
    const canvas = document.getElementById(canvasId)
    const ctx = canvas.getContext("2d")

    const drawer = new Drawer(ctx)
    return new Screen(matrix, drawer)
  }
}

