import {ROWS, COLS, SPEED} from './constants.js'
import Tetris from './tetris.js'
import PieceBuilder from './pieceBuilder.js'
import Matrix from './matrix.js'

const matrix = new Matrix()

let game = null
let error = null
let stopIntervalId = null

function gameStartup() {
  const canvas = document.getElementById("game")
  const ctx = canvas.getContext("2d")

  const pieceBuilder = new PieceBuilder(matrix)

  game = new Tetris(ctx, matrix, pieceBuilder)
  game.render()

  game.iterate()
  stopIntervalId = window.setInterval(() => {
    gameLoop()
  }, SPEED)
}

function gameLoop() {
  try {
    if (!game.isOver && !error && !game.paused) {
      game.iterate()
    }

    if (game.isOver){
      window.clearInterval(stopIntervalId)
      game.over()
    }

  } catch (err) {
    game.status()
    error = err
    console.error(err)
  }
}

const keyMapping = {
  "ArrowLeft": () => game.wannaLeft(),
  "ArrowRight": () => game.wannaRight(),
  "Space": () => game.wannaRotate(),
  "Escape": () => game.tooglePause()
}

document.addEventListener("keyup", ev => {

  const {key,code} = ev
  const index = code ?? key

  const mappedAction = keyMapping[index]

  if (mappedAction) { mappedAction() }
})

window.onload = () => gameStartup()


export const gameTooglePause = () => { game.tooglePause() }