import { gameTooglePause } from "./game"
import Piece from "./piece"

export default class Piece360 extends Piece {
  constructor(blocks, rotateCenter, rotateTable) {
    super(blocks,rotateCenter,rotateTable)
  }

  canRotate() {
    if (!this.rotateTable) {
      return false
    }

    const rotationBlocks = this.getRotatingBlocks()

    const virtuallyRotatedBlocks = rotationBlocks.map(block => {
      const relativePosition = block.relativeTo(this.rotateCenter)
      const translation = this.rotateTable.apply(relativePosition)
      return block.translate(translation)
    })

    const areValid = virtuallyRotatedBlocks.every(b => b.isValid())

    console.log('areValid??', areValid, virtuallyRotatedBlocks.map(b=>b.isValid()))
    return areValid
  }

  getRotatingBlocks() {
    return this.blocks.filter(b => b !== this.rotateCenter)
  }

  rotate() {
    this.takeSnapshot()

    const rotationBlocks = this.getRotatingBlocks()

    this.blocks = rotationBlocks.map(block => {
      const relativePosition = block.relativeTo(this.rotateCenter)
      const translation = this.rotateTable.apply(relativePosition)
      return block.translate(translation)
    })

    this.blocks.push(this.rotateCenter)
    
    this.fixMatrix()
  }
}