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
    const areValid = this.blocks.every(b => b.canTranslate(translation))
    return areValid    
  }

  translate(translation) {
    const canMove = this.canTranslate(translation)
    
    if (!canMove) return

    this.takeSnapshot()
    
    for (const block of this.blocks) {
      block.simpleTranslate(translation)
    }
    this.fixMatrix()
  }

  wannaLeft() {
    const translation = new RelativePosition(-1,0)
    this.translate(translation)
  }

  wannaRight() {
    const translation = new RelativePosition(1,0)
    this.translate(translation)    
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