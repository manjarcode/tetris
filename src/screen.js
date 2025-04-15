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
}