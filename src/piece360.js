import Piece from "./piece"

export default class Piece360 extends Piece {
  constructor(blocks, rotateCenter, rotateTable, image) {
    super(blocks,rotateCenter,rotateTable, image)
  }

  canRotate() {
    if (!this.rotateTable) {
      return false
    }

    const areValid = this.getBlocks().reduce((result, block) => {
      const relativePosition = block.relativeTo(this.rotateCenter)
      const translation = this.rotateTable.apply(relativePosition)
      return result && block.canTranslate(translation)
    }, true)

    return areValid
  }

  rotate() {
    for (const block of this.getBlocks()) {
      const relativePosition = block.relativeTo(this.rotateCenter)
      const translation = this.rotateTable.apply(relativePosition)
      block.translate(translation)
    }    
  }
}