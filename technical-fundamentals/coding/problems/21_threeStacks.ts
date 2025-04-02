// 1. *Three in One*: Describe how you could use a single array to implement three stacks.

// Implementation notes:
// The proposed solution is to alternate each stack on each consecutive index, having the 3 first values for each index head.
//
//  Example
//
// Storing the following stacks:
// 0: 1, 2, 3, 4, 5
// 1: 10, 20, 30
// 3: 15, 25,
//
// Would be stored in the array as:
//
// 00: 4  <-- Tip of 0
// 01: 3  <-- Tip of 1
// 03: 2  <-- Tip of 2
//
// 04: 1  <-- 0[0]
// 05: 10 <-- 1[0]
// 06: 15 <-- 2[0]
//
// 07: 2  <-- 0[1]
// 08: 10 <-- 1[2]
// 09: 15 <-- 2[3]
//
// 10: 3
// 11: 20
// 12: 25
//
// 13: 4
// 14: 30
// 15: -
//
// 16: 5
// 17: -
// 18: -
//
// Total array length = arrayLength * (stacks + 1)

const STACKS = 3
type StackIndex = 0 | 1 | 2

export default class ThreeStacks<T> {
  private array: [number, number, number, ...T[]]

  constructor(stackLength: number) {
    const totalLength = stackLength * STACKS
    this.array = [0, 0, 0, ...Array(totalLength).fill(undefined)]
  }

  push(stackNum: number, value: T): void {
    if (!this.allowedStack(stackNum)) return

    this.array[stackNum]++
    const idx = this.stackIndex(stackNum, this.array[stackNum])
    this.array[idx] = value

    console.log({ array: this.array })
  }

  pop(stackNum: number): T | undefined {
    if (!this.allowedStack(stackNum)) return

    if (this.array[stackNum] < 1) return

    const output = this.peek(stackNum)

    this.array[stackNum]--

    return output
  }

  peek(stackNum: number): T | undefined {
    if (!this.allowedStack(stackNum)) return

    if (this.array[stackNum] < 1) return

    const idx = this.stackIndex(stackNum, this.array[stackNum])

    return this.array[idx] as T
  }

  // ---

  private allowedStack(stackNum: number): stackNum is StackIndex {
    return stackNum >= 0 && stackNum < STACKS
  }

  private stackIndex(stackNum: number, index: number) {
    return STACKS + index * (stackNum + 1)
  }
}
