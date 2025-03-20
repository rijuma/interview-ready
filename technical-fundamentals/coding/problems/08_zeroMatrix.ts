// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

type Matrix = number[][]

export default function zeroMatrix(matrix: Matrix) {
  const aux = matrix

  const height = matrix.length
  const width = matrix[0].length

  type Coord = {
    x: number
    y: number
  }
  const zeroes: Coord[] = []

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // add the zeroes to a list.
      if (matrix[y][x] === 0) zeroes.push({ y, x })
    }
  }

  zeroes.forEach(({ x, y }) => {
    // Then we clear each column and row for each zero coordinates.
    for (let yy = 0; yy < height; yy++) matrix[yy][x] = 0
    for (let xx = 0; xx < height; xx++) matrix[y][xx] = 0
  })

  // No return, since it mutates the reference. (same as previous excersise.)
}

// Note: I've changed the tests for this excercise so it expects the orignal matrix to be mutated, since it wasn't indicated on the function header.
//       The discrepancy between the function header and the tests made me take a decision, which it was to keep the same criteria from the previous exercise.
