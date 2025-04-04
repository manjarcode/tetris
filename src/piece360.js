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

    const areValid = this.blocks.reduce((result, block) => {
      const relativePosition = block.relativeTo(this.rotateCenter)
      const translation = this.rotateTable.apply(relativePosition)
      return result && block.canTranslate(translation)
    }, true)

    return areValid
  }

  rotate() {
    this.takeSnapshot()

    for (const block of this.blocks) {
      const relativePosition = block.relativeTo(this.rotateCenter)
      const translation = this.rotateTable.apply(relativePosition)
      block.simpleTranslate(translation)
    }
    
    this.fixMatrix()
  }
}