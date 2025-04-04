import { RelativePosition } from "./block"

export default class Piece {
  constructor(blocks, rotateCenter, rotateTable) {
    this.blocks = blocks.sort((a,b) => {
      return b.y - a.y
    })

    this.rotateCenter = rotateCenter
    this.rotateTable = rotateTable
  }

  wannaLeft() {
    const translation = new RelativePosition(-1,0)
    this.#translate(translation)
  }

  wannaRight() {
    const translation = new RelativePosition(1,0)
    this.#translate(translation)    
  }

  #canTranslate(translation) {
    const areValid = this.blocks.every(b => b.canTranslate(translation))
    return areValid    
  }

  #translate(translation) {
    const canMove = this.#canTranslate(translation)
    
    if (!canMove) return

    this.takeSnapshot()
    
    for (const block of this.blocks) {
      block.simpleTranslate(translation)
    }
    this.fixMatrix()
  }

  wannaRotate() {
    if (this.canRotate()) {      
      this.rotate()
    }
  }

  canRotate() {
    throw new Error('must be implemented')
  }

  rotate() {
    throw new Error('must be implemented')
  }

  canDown() {
    const translation = new RelativePosition(0,1)
    return this.#canTranslate(translation)    
  }

  down() {
    const translation = new RelativePosition(0,1)
    this.#translate(translation)
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
}