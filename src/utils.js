import { colors, borders } from './constants.js'

export function random(number) {
  return Math.floor(Math.random()*number)
}

export function nullish(value){
  return value === null || value === undefined
} 


export function getColor(number) {
  return colors[number % colors.length]
}

export function getDarkerColors(number) {
  return borders[number % borders.length]
}