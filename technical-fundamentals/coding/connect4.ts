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
type Player = number

export class Connect4 {
  #currentPlayer: number
  #rows = 0
  #cols = 0
  #tokenCount: number
  #board: Board

  constructor({
    width = 7,
    height = 6,
    startingPlayer = PLAYER_ONE,
    tokenCount = 4,
  } = {}) {
    this.#rows = height
    this.#cols = width
    this.#currentPlayer = startingPlayer
    this.#tokenCount = tokenCount
    this.#board = Array(this.#cols)
      .fill([])
      .map(() => Array(this.#rows).fill(0))
  }

  // Interface methods
  play(col: number): boolean {
    if (this.winner()) return false // It should not let you play if there's a winner already.

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

  #checkPiece(colIdx: number, rowIdx: number): Player | null {
    const token = this.#board[colIdx][rowIdx]

    if (!token) return 0

    // Here we check the piece connections and tell if there's a winner or just continue checking.

    return null
  }

  winner(): Player | null {
    let winner: Player | null = null

    this.#board.some((col, colIdx) =>
      col.some((_, rowIdx) => {
        const result = this.#checkPiece(colIdx, rowIdx)

        if (result) winner = result

        return result
      })
    )

    return winner
  }

  // Debug methods
  getValue(x: number, y: number) {
    return this.#board[y - 1][x - 1]
  }

  print() {
    console.table(this.#board)
  }
}
