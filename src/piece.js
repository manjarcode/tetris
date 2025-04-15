import { Vector } from "./block"

export default class Piece {
  #blocks;

  constructor(blocks, rotateCenter, rotateTable) {
    this.#blocks = blocks.sort((a,b) => {
      return b.y - a.y
    })

    this.rotateCenter = rotateCenter
    this.rotateTable = rotateTable
  }

  getBlocks() {
    return this.#blocks
  }

  wannaLeft() {
    const translation = new Vector(-1,0)
    this.translate(translation)
  }

  wannaRight() {
    const translation = new Vector(1,0)
    this.translate(translation)    
  }

  #canTranslate(translation) {
    const areValid = this.#blocks.every(b => b.canTranslate(translation))
    return areValid    
  }

  translate(translation) {
    const canMove = this.#canTranslate(translation)
    
    if (!canMove) return

    for (const block of this.#blocks) {
      block.translate(translation)
    }
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
    const translation = new Vector(0,1)
    return this.#canTranslate(translation)    
  }

  down() {
    const translation = new Vector(0,1)
    this.translate(translation)
  }

  destroy() {
    for (const block of this.#blocks) {
      block.consolidate()
    }

    for (let block of this.#blocks) {
      block = null
    }
  }

  toString() {
    return this.#blocks.map(b => b.toString())
  }
}