import Piece from "./piece"

export default class Piece180 extends Piece {
  constructor(blocks, rotateCenter, rotateTable, reverseRotateTable, image) {
    super(blocks, rotateCenter, rotateTable, image)
    this.isInverted = false
    this.reverseRotateTable = reverseRotateTable
  }

  canRotate() {
    if (!this.rotateTable) {
      return false
    }

    const table = this.isInverted ? this.reverseRotateTable : this.rotateTable

    const areValid = this.getBlocks().reduce((result, block) => {
      const relativePosition = block.relativeTo(this.rotateCenter)
      const translation = table.apply(relativePosition)
      return result && block.canTranslate(translation)
    }, true)

    return areValid
  }

  rotate() {
    const table = this.isInverted ? this.reverseRotateTable : this.rotateTable

    for (const block of this.getBlocks()) {
      const relativePosition = block.relativeTo(this.rotateCenter)
      const translation = table.apply(relativePosition)
      block.translate(translation)
    }
    
    this.isInverted = ! this.isInverted
  }
}