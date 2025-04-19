import {COLS, ROWS, SPEED} from './constants.js'
import Tetris from './tetris.js'
import PieceBuilder from './pieceBuilder.js'
import Matrix from './matrix.js'
import Screen from './screen.js'

let tetris = null
let error = null
let stopIntervalId = null

function gameStartup() {
  const matrix = new Matrix(COLS, ROWS)
  const mainScreen = Screen.create("game", matrix, "next")
  const pieceBuilder = new PieceBuilder(matrix)

  tetris = new Tetris(mainScreen, pieceBuilder)
  tetris.iterate()
  stopIntervalId = window.setInterval(() => {
    gameLoop()
  }, SPEED)
}

function gameLoop() {
  try {
    if (!tetris.isOver && !error && !tetris.paused) {
      tetris.iterate()
    }

    if (tetris.isOver){
      window.clearInterval(stopIntervalId)
      tetris.over()
    }

  } catch (err) {
    window.clearInterval(stopIntervalId)
    console.error(err)
  }
}

const keyMapping = {
  "ArrowLeft": () => tetris.wannaLeft(),
  "ArrowRight": () => tetris.wannaRight(),
  "Space": () => tetris.wannaRotate(),
  "Escape": () => tetris.togglePause()
}

document.addEventListener("keyup", ev => {
  const {key,code} = ev
  const index = code ?? key

  const mappedAction = keyMapping[index]

  if (mappedAction) { mappedAction() }
})

window.onload = () => gameStartup()