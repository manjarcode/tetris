export class RotateTable {
  constructor(rotations) {
    this.rotations = rotations
  }

  apply(relativePosition) {    
    const found = this.rotations.find(rotation => 
      rotation.from.x === relativePosition.x &&
      rotation.from.y === relativePosition.y
    )
    if (!found) {
      console.log(`Rotation not found (${relativePosition.x},${relativePosition.y})`)
    }
    return found.to
  }
}


export class Rotation {
  constructor(from, to) {
    this.from = from
    this.to = to
  }
}