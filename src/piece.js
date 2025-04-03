import { RelativePosition } from "./block"
import { gameTooglePause } from "./game"

export default class Piece {
  constructor(blocks, rotateCenter, rotateTable) {
    this.blocks = blocks.sort((a,b) => {
      return b.y - a.y
    })

    this.rotateCenter = rotateCenter
    this.rotateTable = rotateTable
  }

  canTranslate(translation) {
    const virtualBlocks = this.blocks.map(b => {
      b.translate(translation)
    })

    const areValid = virtualBlocks.every(b => b.isValid())

    return areValid    
  }

  wannaLeft() {
    const canMove = this.blocks.every(b => b.canLeft())

    if (!canMove) return

    this.takeSnapshot()
    for (const block of this.blocks) {
      block.left()
    }
    this.fixMatrix()
  }

  // wannaLeft() {

  //   const translation = new RelativePosition(-1,0)

  //   const canMove = this.canTranslate(translation)
    
  //   if (!canMove) return

  //   this.takeSnapshot()
    
  //   for (const block of this.blocks) {
  //     block.left()
  //   }
  //   this.fixMatrix()
  // }

  wannaRight() {
    const canMove = this.blocks.every(b => b.canRight())

    if (!canMove) return

    this.takeSnapshot()
    for (const block of this.blocks) {
      block.right()
    }
    this.fixMatrix()
  }

  canDown() {
    return this.blocks.every(b=> b.canDown())
  }

  down() {
    for (const block of this.blocks) {
      block.down()
    }
  }

  destroy() {
    for (const block of this.blocks) {
      block.destroy()
    }

    for (let block of this.blocks) {
      block = null
    }
  }

  toString() {
    return this.blocks.map(b => b.toString())
  }

  takeSnapshot() {    
    for (const block of this.blocks) {
      block.takeSnapshot()
    }
  }

  fixMatrix() {
    for (const block of this.blocks) {
      block.cleanMatrix()
    }

    for (const block of this.blocks) {
      block.fixMatrix()
    }

    this.blocks = this.blocks.sort((a,b) => {
      return b.y - a.y
    })
  }

  wannaRotate() {
    if (this.canRotate()) {      
      this.rotate()
    }
  }
}