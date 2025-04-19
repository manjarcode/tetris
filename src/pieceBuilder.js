import {random} from './utils.js'
import Block, {Vector} from './block.js'
import { RotateTable, Rotation } from './rotateTable.js'
import Piece360 from './piece360.js'
import Piece180 from './piece180.js'

export default class PieceBuilder {
  constructor(matrix) {
    this.matrix = matrix
  }

  getRandom() {
    const map = [
      this.buildSquare, 
      this.buildT,
      this.buildSeven,
      this.buildL,
      this.buildZ,
      this.buildS,
      this.buildStick
    ]

    const index = random(map.length)

    const action = map[index].bind(this)

    const piece = action(4, 0)

    return piece
  }

  buildSquare(x,y) {

    const randomColor = 1
  
    const b1 = new Block(x+0, y+0, randomColor, this.matrix)
    const b2 = new Block(x+1, y+0, randomColor, this.matrix)
    const b3 = new Block(x+0, y+1, randomColor, this.matrix)
    const b4 = new Block(x+1, y+1, randomColor, this.matrix)

    const imageUrl = new URL('./img/square.png', import.meta.url).href

    const piece = new Piece360([ b1, b2, b3, b4], null, null, imageUrl)
  
    return piece
  }
  
  buildT(x, y) {
    const randomColor = 2
  
    const b1 = new Block(x+1, y+0, randomColor, this.matrix)
    const b2 = new Block(x+1, y+1, randomColor, this.matrix)
    const b3 = new Block(x+1, y+2, randomColor, this.matrix)
    const b4 = new Block(x+0, y+1, randomColor, this.matrix)
  
    const rotateTable = new RotateTable([
      new Rotation(new Vector(0,0), new Vector(0,0)),
      new Rotation(new Vector(-1,0), new Vector(1,-1)),
      new Rotation(new Vector(1,0), new Vector(-1,1)),
      new Rotation(new Vector(0,1), new Vector(-1,-1)),    
      new Rotation(new Vector(0,-1), new Vector(1,1)),
    ])
  
    const imageUrl = new URL('./img/t.png', import.meta.url).href

    const piece = new Piece360([ b1, b2, b3, b4], b2, rotateTable, imageUrl)
  
    return piece
  }

  buildSeven(x, y) {
    const randomColor = 3
  
    const b1 = new Block(x+0, y+0, randomColor, this.matrix)
    const b2 = new Block(x+0, y+1, randomColor, this.matrix)
    const b3 = new Block(x+0, y+2, randomColor, this.matrix)
    const b4 = new Block(x+1, y+0, randomColor, this.matrix)
  
    
    const rotateTable = new RotateTable([
      new Rotation(new Vector(0,0), new Vector(0,0)),
      new Rotation(new Vector(-1,0), new Vector(1,-1)),
      new Rotation(new Vector(1,0), new Vector(-1,1)),
      new Rotation(new Vector(0,1), new Vector(-1,-1)),    
      new Rotation(new Vector(0,-1), new Vector(1,1)),
      new Rotation(new Vector(1,-1), new Vector(0,2)),
      new Rotation(new Vector(1,1), new Vector(-2,0)),
      new Rotation(new Vector(-1,1), new Vector(0,-2)),
      new Rotation(new Vector(-1,-1), new Vector(2,0))
    ])
  
    const imageUrl = new URL('./img/seven.png', import.meta.url).href

    const piece = new Piece360([ b1, b2, b3, b4], b2, rotateTable, imageUrl)
  
    return piece
  }

  buildL(x, y) {
    const randomColor = 4
  
    const b1 = new Block(x+1, y+0, randomColor, this.matrix)
    const b2 = new Block(x+1, y+1, randomColor, this.matrix)
    const b3 = new Block(x+1, y+2, randomColor, this.matrix)
    const b4 = new Block(x+0, y+0, randomColor, this.matrix)
  
    
    const rotateTable = new RotateTable([
      new Rotation(new Vector(0,0), new Vector(0,0)),
      new Rotation(new Vector(-1,0), new Vector(1,-1)),
      new Rotation(new Vector(1,0), new Vector(-1,1)),
      new Rotation(new Vector(0,1), new Vector(-1,-1)),    
      new Rotation(new Vector(0,-1), new Vector(1,1)),
      new Rotation(new Vector(1,-1), new Vector(0,2)),
      new Rotation(new Vector(1,1), new Vector(-2,0)),
      new Rotation(new Vector(-1,1), new Vector(0,-2)),
      new Rotation(new Vector(-1,-1), new Vector(2,0))
    ])
  
    const imageUrl = new URL('./img/l.png', import.meta.url).href

    const piece = new Piece360([ b1, b2, b3, b4], b2, rotateTable, imageUrl)
  
    return piece
  }

  buildStick(x, y) {
    const randomColor = 5
  
    const b1 = new Block(x+0, y+0, randomColor, this.matrix)
    const b2 = new Block(x+0, y+1, randomColor, this.matrix)
    const b3 = new Block(x+0, y+2, randomColor, this.matrix)
    const b4 = new Block(x+0, y+3, randomColor, this.matrix)


    const rotateTable = new RotateTable([
      new Rotation(new Vector(0,0), new Vector(0,0)),
      new Rotation(new Vector(0,-1), new Vector(-1,1)),
      new Rotation(new Vector(0,1), new Vector(1,-1)),
      new Rotation(new Vector(0,2), new Vector(2,-2)),    
    ])

    const inverseRotateTable = new RotateTable([
      new Rotation(new Vector(0,0), new Vector(0,0)),
      new Rotation(new Vector(-1,0), new Vector(1,-1)),
      new Rotation(new Vector(1,0), new Vector(-1,1)),
      new Rotation(new Vector(2,0), new Vector(-2,2)),  
    ])

    const imageUrl = new URL('./img/stick.png', import.meta.url).href

    const piece = new Piece180([ b1, b2, b3, b4], b2, rotateTable, inverseRotateTable, imageUrl)

    return piece
  }


  buildZ(x, y) {
    const randomColor = 6
  
    const b1 = new Block(x-1, y+0, randomColor, this.matrix)
    const b2 = new Block(x+0, y+0, randomColor, this.matrix)
    const b3 = new Block(x+0, y+1, randomColor, this.matrix)
    const b4 = new Block(x+1, y+1, randomColor, this.matrix)

    const rotateTable = new RotateTable([
      new Rotation(new Vector(0,0), new Vector(0,0)),
      new Rotation(new Vector(-1,-1), new Vector(2,0)), 
      new Rotation(new Vector(0,-1), new Vector(1,1)), 
      new Rotation(new Vector(1,0), new Vector(-1,1)), 
    ])

    const inverseRotateTable = new RotateTable([
      new Rotation(new Vector(0,0), new Vector(0,0)),
      new Rotation(new Vector(1,-1), new Vector(-2,0)), 
      new Rotation(new Vector(1,0), new Vector(-1,-1)), 
      new Rotation(new Vector(0,1), new Vector(1,-1)), 
    ])

    const imageUrl = new URL('./img/z.png', import.meta.url).href

    const piece = new Piece180([ b1, b2, b3, b4], b3, rotateTable, inverseRotateTable, imageUrl)
    return piece
  }


  buildS(x, y) {
    const randomColor = 7
  
    const b1 = new Block(x+1, y+0, randomColor, this.matrix)
    const b2 = new Block(x+0, y+0, randomColor, this.matrix)
    const b3 = new Block(x+0, y+1, randomColor, this.matrix)
    const b4 = new Block(x-1, y+1, randomColor, this.matrix)

    const rotateTable = new RotateTable([
      new Rotation(new Vector(0,0), new Vector(0,0)),
      new Rotation(new Vector(1,-1), new Vector(-2,0)),     
      new Rotation(new Vector(0,-1), new Vector(-1,1)),
      new Rotation(new Vector(-1,0), new Vector(1,1)), 
    ])

    const inverseRotateTable = new RotateTable([
      new Rotation(new Vector(0,0), new Vector(0,0)),    
      new Rotation(new Vector(-1,-1), new Vector(2,0)), 
      new Rotation(new Vector(-1,0), new Vector(1,-1)),
      new Rotation(new Vector(0,1), new Vector(-1,-1)), 
    ])

    const imageUrl = new URL('./img/s.png', import.meta.url).href

    const piece = new Piece180([ b1, b2, b3, b4], b3, rotateTable, inverseRotateTable, imageUrl)

    return piece
  }
}