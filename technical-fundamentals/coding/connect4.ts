/**
Connect4

Connect4 is a game where two players take turns placing a token on columns that drop to the bottom.
When a player forms 4 of his tokens in a line - horizontally, vertically,or diagonally - the player wins.

[Visualization](https://i.ebayimg.com/images/g/DzMAAOSwSjxj6m0e/s-l1600.jpg)

Implement Connect 4 with the class below.
*/

export const PLAYER_ONE = 1
export const PLAYER_TWO = 2

type Board = number[][] // [col][row]

export class Connect4 {
  #currentPlayer: number
  #rows = 0
  #cols = 0
  #board: Board

  constructor({ width = 7, height = 6, startingPlayer = PLAYER_ONE } = {}) {
    this.#rows = height
    this.#cols = width
    this.#currentPlayer = startingPlayer
    this.#board = Array(this.#cols)
      .fill([])
      .map(() => Array(this.#rows).fill(0))
  }

  // Interface methods
  play(col: number): boolean {
    const colIdx = col - 1
    if (this.#board[colIdx] === undefined) return false // Invalid move - Out of bounds

    const result = this.#board[colIdx].findIndex((row) => row !== 0)
    const rowIdx = result !== -1 ? result - 1 : this.#rows - 1

    if (rowIdx < 0) return false // Invalid move - Out of bounds

    this.#board[colIdx][rowIdx] = this.#currentPlayer
    this.#currentPlayer =
      this.#currentPlayer === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE

    return true
  }

  winner() {}

  // Debug methods
  getValue(x: number, y: number) {
    return this.#board[y - 1][x - 1]
  }

  print() {
    console.table(this.#board)
  }
}
