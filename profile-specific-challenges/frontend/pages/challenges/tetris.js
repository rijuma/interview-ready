import { useEffect, useState } from "react"

const BOARD_COLS = 10
const BOARD_ROWS = 20

const PIECE_EMPTY = null
const PIECE_BOARD = 1
const PIECE_PLAYER = 2

const PIECE_SIZE = 4

const PIECES = [
  [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],
  [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],
  [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],
  [
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
  ],
  [
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ],
]

class TetrisGame {
  #board = []
  #piece = {
    x: 0,
    y: 0,
    shape: []
  }
  #onUpdate

  newGame() {
    const newBoard = Array(BOARD_ROWS).fill(null).map(() => Array(BOARD_COLS).fill(PIECE_EMPTY))

    this.#board = newBoard

    this.#newPiece()

    this.#render()
  }

  #newPiece() {
    const shape = PIECES[(Math.random() * PIECES.length) | 0]

    const newPiece = {
      y: 0,
      x: ((BOARD_COLS - PIECE_SIZE) / 2) | 0,
      shape,
    }

    this.#piece = newPiece
  }

  #checkLines() {
    const newBoard = this.#board.filter(row => row.some(cell => !cell))

    for (let i = newBoard.length; i < BOARD_ROWS; i++) newBoard.unshift(Array(BOARD_COLS).fill(null))

    this.#board = newBoard
  }

  #merge(piece) {
    this.#draw(piece, this.#board, PIECE_BOARD)

    this.#checkLines()

    this.#newPiece()
  }

  #move(piece) {
    if (!this.#check(piece)) {
      if (piece.y > this.#piece.y) this.#merge(this.#piece)
    } else {
      this.#piece = piece
    }
    this.#render()
  }

  left() {
    const newPiece = {
      ...this.#piece,
      x: this.#piece.x - 1
    }

    this.#move(newPiece)
  }

  right() {
    const newPiece = {
      ...this.#piece,
      x: this.#piece.x + 1
    }

    this.#move(newPiece)
  }

  rotate() {
    const shape = this.#piece.shape
    const newShape = JSON.parse(JSON.stringify(shape))

    for (let row = 0; row < newShape.length; row++) {
      for (let col = 0; col < newShape[row].length; col++) {
        newShape[PIECE_SIZE - col - 1][row] = shape[row][col]
      }
    }

    const newPiece = {
      ...this.#piece,
      shape: newShape,
    }

    this.#move(newPiece)
  }

  down() {
    const newPiece = {
      ...this.#piece,
      y: this.#piece.y + 1
    }

    this.#move(newPiece)
  }

  #check({ x, y, shape }) {
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        const x0 = x + col
        const y0 = y + row

        if (!shape[row][col]) continue

        if (x0 < 0) return false
        if (x0 > BOARD_COLS - 1) return false

        if (y0 < 0) return false
        if (y0 > BOARD_ROWS - 1) return false

        if (this.#board[y0][x0]) return false
      }
    }

    return true
  }


  // This will mutate board.
  #draw({ x, y, shape }, board, type = PIECE_BOARD) {
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        const x0 = x + col
        const y0 = y + row
        if (shape[row][col]) board[y0][x0] = type
      }
    }
  }

  #render() {
    const newBoard = JSON.parse(JSON.stringify(this.#board)) // Deep clone
    this.#draw(this.#piece, newBoard, PIECE_PLAYER)
    this.#onUpdate({ board: newBoard })
  }

  constructor({ onUpdate }) {
    this.#onUpdate = onUpdate

    this.newGame()
  }
}

function useTetris() {
  const [board, setBoard] = useState([])

  let tetris

  const handleUpdate = ({ board }) => setBoard(board)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    tetris = new TetrisGame({ onUpdate: handleUpdate })

    window.addEventListener('keydown', (event) => {
      event.preventDefault()
      const { key } = event

      switch (key) {
        case 'ArrowLeft': return tetris.left()
        case 'ArrowRight': return tetris.right()
        case 'ArrowUp': return tetris.rotate()
        case 'ArrowDown': return tetris.down()
      }
    }, { signal })

    return () => {
      controller.abort()
    }

  }, [])

  return { board }
}

export default function Tetris() {
  const { board } = useTetris()

  return (
    <>
      <h1>
        Tetris
      </h1>

      <div className="tetris">
        {board.map((rows, rowIdx) => (
          <div key={rowIdx} className="row">
            {rows.map((cell, cellIdx) => (
              <div key={cellIdx} className={`cell ${cell ? `cell-${cell}` : ''}`} />
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
