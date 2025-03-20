// 7. *Rotate Matrix*:

// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

type Matrix = number[][]

export default function rotateMatrix(matrix: Matrix) {
  const size = matrix.length

  for (let y = 0; y < Math.floor(size / 2); y++) {
    for (let x = y; x < size - y - 1; x++) {
      const swap = matrix[y][x]
      matrix[y][x] = matrix[size - x - 1][y]
      matrix[size - x - 1][y] = matrix[size - y - 1][size - x - 1]
      matrix[size - y - 1][size - x - 1] = matrix[x][size - y - 1]
      matrix[x][size - y - 1] = swap
    }
  }

  // No return, since it mutates the reference. (Not a fan of that..)
}

export function rotateMatrixWithAux(matrix: Matrix) {
  const size = matrix.length

  // With an auxiliar matrix
  const aux: Matrix = Array(size)
    .fill(0)
    .map(() => Array(size).fill(0))

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      aux[y][x] = matrix[size - x - 1][y]
    }
  }

  Object.assign(matrix, aux)
}
