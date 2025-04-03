import { gameTooglePause } from "./game"
import Piece from "./piece"

export default class Piece180 extends Piece {
  constructor(blocks, rotateCenter, rotateTable, reverseRotateTable) {
    super(blocks, rotateCenter, rotateTable)
    this.isInverted = false
    this.reverseRotateTable = reverseRotateTable
  }

  canRotate() {
    if (!this.rotateTable) {
      return false
    }

    const rotationBlocks = this.getRotatingBlocks()

    const table = this.isInverted ? this.reverseRotateTable : this.rotateTable

    const virtuallyRotatedBlocks = rotationBlocks.map(block => {
      const relativePosition = block.relativeTo(this.rotateCenter)
      const translation = table.apply(relativePosition)
      return block.translate(translation)
    })

    const areValid = virtuallyRotatedBlocks.every(b => b.isValid())
    return areValid
  }

  getRotatingBlocks() {
    return this.blocks.filter(b => b !== this.rotateCenter)
  }

  rotate() {
    this.takeSnapshot()

    const rotationBlocks = this.getRotatingBlocks()

    const table = this.isInverted ? this.reverseRotateTable : this.rotateTable

    this.blocks = rotationBlocks.map(block => {
      const relativePosition = block.relativeTo(this.rotateCenter)
      const translation = table.apply(relativePosition)
      return block.translate(translation)
    })

    this.blocks.push(this.rotateCenter)
    
    this.fixMatrix()

    this.isInverted = ! this.isInverted
  }
}