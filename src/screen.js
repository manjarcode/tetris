import Drawer from './drawer.js'

export default class Screen {
  #matrix
  #drawer
  #nextContainer

  constructor(matrix, drawer, nextContainerId) {
    this.#matrix = matrix
    this.#drawer = drawer
    this.#nextContainer = document.getElementById(nextContainerId)
  }

  render(piece) {
    this.#drawer.clear()
    this.#drawer.matrix(this.#matrix)
    this.#drawer.piece(piece)
  }

  clearLines() {
    this.#matrix.clearLines()
  }

  gameOver() {
    this.#drawer.gameOver()
  }

  drawNext(image) {
    const img = document.createElement("img")
    img.src = image

    this.#nextContainer.innerHTML = ""
    this.#nextContainer.appendChild(img)
  }

  static create(canvasId, matrix, nextContainerId) {
    const canvas = document.getElementById(canvasId)
    const ctx = canvas.getContext("2d")

    const drawer = new Drawer(ctx)
    return new Screen(matrix, drawer, nextContainerId)
  }
}

