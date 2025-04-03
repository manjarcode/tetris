import Piece from './piece.js' 

import {random} from './utils.js'
import {COLS, ACTIVE_COLOR} from './constants.js'
import Block, {RelativePosition} from './block.js'
import { RotateTable, Rotation } from './rotateTable.js'
import Piece360 from './piece360.js'
import Piece180 from './piece180.js'

export default class PieceBuilder {
  constructor(matrix) {
    this.matrix = matrix
  }

  getRandom() {
    const map = [this.buildSquare, this.buildT, this.buildL, this.buildLPrime, this.buildS, this.buildSPrime, this.buildStick]

    const index = random(map.length)

    const action = map[index].bind(this)

    const piece = action()

    return piece
  }

  buildSquare() {
    const x = random(COLS-1)
    const randomColor = ACTIVE_COLOR + 1
  
    const b1 = new Block(x, 0, randomColor, this.matrix)
    const b2 = new Block(x +1, 0, randomColor, this.matrix)
    const b3 = new Block(x, 1, randomColor, this.matrix)
    const b4 = new Block(x + 1, 1, randomColor, this.matrix)
    
    const piece = new Piece360([ b1, b2, b3, b4], null, null)
  
    return piece
  }
  
  buildT() {
    const x = 4
    const randomColor = ACTIVE_COLOR + 2
  
    const b1 = new Block(x+1, 0, randomColor, this.matrix)
    const b2 = new Block(x+1, 1, randomColor, this.matrix)
    const b3 = new Block(x+1, 2, randomColor, this.matrix)
    const b4 = new Block(x+0, 1, randomColor, this.matrix)
  
    
    const rotateTable = new RotateTable([
      new Rotation(new RelativePosition(0,0), new RelativePosition(0,0)),
      new Rotation(new RelativePosition(-1,0), new RelativePosition(1,-1)),
      new Rotation(new RelativePosition(1,0), new RelativePosition(-1,1)),
      new Rotation(new RelativePosition(0,1), new RelativePosition(-1,-1)),    
      new Rotation(new RelativePosition(0,-1), new RelativePosition(1,1)),
    ])
  
    const piece = new Piece360([ b1, b2, b3, b4], b2, rotateTable)
  
    return piece
  }

  buildL() {
    const x = 4
    const randomColor = ACTIVE_COLOR + 3
  
    const b1 = new Block(x+0, 0, randomColor, this.matrix)
    const b2 = new Block(x+0, 1, randomColor, this.matrix)
    const b3 = new Block(x+0, 2, randomColor, this.matrix)
    const b4 = new Block(x+1, 0, randomColor, this.matrix)
  
    
    const rotateTable = new RotateTable([
      new Rotation(new RelativePosition(0,0), new RelativePosition(0,0)),
      new Rotation(new RelativePosition(-1,0), new RelativePosition(1,-1)),
      new Rotation(new RelativePosition(1,0), new RelativePosition(-1,1)),
      new Rotation(new RelativePosition(0,1), new RelativePosition(-1,-1)),    
      new Rotation(new RelativePosition(0,-1), new RelativePosition(1,1)),
      new Rotation(new RelativePosition(1,-1), new RelativePosition(0,2)),
      new Rotation(new RelativePosition(1,1), new RelativePosition(-2,0)),
      new Rotation(new RelativePosition(-1,1), new RelativePosition(0,-2)),
      new Rotation(new RelativePosition(-1,-1), new RelativePosition(2,0))
    ])
  
    const piece = new Piece360([ b1, b2, b3, b4], b2, rotateTable)
  
    return piece
  }

  buildLPrime() {
    const x = 4
    const randomColor = ACTIVE_COLOR + 4
  
    const b1 = new Block(x+1, 0, randomColor, this.matrix)
    const b2 = new Block(x+1, 1, randomColor, this.matrix)
    const b3 = new Block(x+1, 2, randomColor, this.matrix)
    const b4 = new Block(x+0, 0, randomColor, this.matrix)
  
    
    const rotateTable = new RotateTable([
      new Rotation(new RelativePosition(0,0), new RelativePosition(0,0)),
      new Rotation(new RelativePosition(-1,0), new RelativePosition(1,-1)),
      new Rotation(new RelativePosition(1,0), new RelativePosition(-1,1)),
      new Rotation(new RelativePosition(0,1), new RelativePosition(-1,-1)),    
      new Rotation(new RelativePosition(0,-1), new RelativePosition(1,1)),
      new Rotation(new RelativePosition(1,-1), new RelativePosition(0,2)),
      new Rotation(new RelativePosition(1,1), new RelativePosition(-2,0)),
      new Rotation(new RelativePosition(-1,1), new RelativePosition(0,-2)),
      new Rotation(new RelativePosition(-1,-1), new RelativePosition(2,0))
    ])
  
    const piece = new Piece360([ b1, b2, b3, b4], b2, rotateTable)
  
    return piece
  }

  buildStick() {
    const x = 4
    const randomColor = ACTIVE_COLOR + 5
  
    const b1 = new Block(x, 0, randomColor, this.matrix)
    const b2 = new Block(x, 1, randomColor, this.matrix)
    const b3 = new Block(x, 2, randomColor, this.matrix)
    const b4 = new Block(x, 3, randomColor, this.matrix)


    const rotateTable = new RotateTable([
      new Rotation(new RelativePosition(0,0), new RelativePosition(0,0)),
      new Rotation(new RelativePosition(0,-1), new RelativePosition(-1,1)),
      new Rotation(new RelativePosition(0,1), new RelativePosition(1,-1)),
      new Rotation(new RelativePosition(0,2), new RelativePosition(2,-2)),    
    ])

    const inverseRotateTable = new RotateTable([
      new Rotation(new RelativePosition(0,0), new RelativePosition(0,0)),
      new Rotation(new RelativePosition(-1,0), new RelativePosition(1,-1)),
      new Rotation(new RelativePosition(1,0), new RelativePosition(-1,1)),
      new Rotation(new RelativePosition(2,0), new RelativePosition(-2,2)),  
    ])


    const piece = new Piece180([ b1, b2, b3, b4], b2, rotateTable, inverseRotateTable)

    return piece
  }


  buildS() {
    const x = 4
    const randomColor = ACTIVE_COLOR + 6
  
    const b1 = new Block(x-1, 0, randomColor, this.matrix)
    const b2 = new Block(x+0, 0, randomColor, this.matrix)
    const b3 = new Block(x+0, 1, randomColor, this.matrix)
    const b4 = new Block(x+1, 1, randomColor, this.matrix)

    const rotateTable = new RotateTable([
      new Rotation(new RelativePosition(0,0), new RelativePosition(0,0)),
      new Rotation(new RelativePosition(-1,-1), new RelativePosition(2,0)), 
      new Rotation(new RelativePosition(0,-1), new RelativePosition(1,1)), 
      new Rotation(new RelativePosition(1,0), new RelativePosition(-1,1)), 
    ])

    const inverseRotateTable = new RotateTable([
      new Rotation(new RelativePosition(0,0), new RelativePosition(0,0)),
      new Rotation(new RelativePosition(1,-1), new RelativePosition(-2,0)), 
      new Rotation(new RelativePosition(1,0), new RelativePosition(-1,-1)), 
      new Rotation(new RelativePosition(0,1), new RelativePosition(1,-1)), 
    ])

    const piece = new Piece180([ b1, b2, b3, b4], b3, rotateTable, inverseRotateTable)

    return piece
  }


  buildSPrime() {
    const x = 4
    const randomColor = ACTIVE_COLOR + 7
  
    const b1 = new Block(x+1, 0, randomColor, this.matrix)
    const b2 = new Block(x+0, 0, randomColor, this.matrix)
    const b3 = new Block(x+0, 1, randomColor, this.matrix)
    const b4 = new Block(x-1, 1, randomColor, this.matrix)

    const rotateTable = new RotateTable([
      new Rotation(new RelativePosition(0,0), new RelativePosition(0,0)),
      new Rotation(new RelativePosition(1,-1), new RelativePosition(-2,0)),     
      new Rotation(new RelativePosition(0,-1), new RelativePosition(-1,1)),
      new Rotation(new RelativePosition(-1,0), new RelativePosition(1,1)), 
    ])

    const inverseRotateTable = new RotateTable([
      new Rotation(new RelativePosition(0,0), new RelativePosition(0,0)),    
      new Rotation(new RelativePosition(-1,-1), new RelativePosition(2,0)), 
      new Rotation(new RelativePosition(-1,0), new RelativePosition(1,-1)),
      new Rotation(new RelativePosition(0,1), new RelativePosition(-1,-1)), 
    ])

    const piece = new Piece180([ b1, b2, b3, b4], b3, rotateTable, inverseRotateTable)

    return piece
  }
}