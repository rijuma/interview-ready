// 2. *Stack Min*: How would you design a stack which,
// in addition to push and pop,
// has a function min which returns the minimum element?
// Push, pop, and min should all operate in O(1) time.
//

export default class StackMin<T extends number | string> {
  private stack: T[]
  private mins: number[]

  constructor() {
    this.stack = []
    this.mins = []
  }

  push(value: T): void {
    const idx = this.stack.length
    this.stack.push(value)

    if (!this.mins.length) {
      this.mins.push(idx)
      return
    }

    const currentMinIdx = this.mins.at(-1)
    const min = this.stack[currentMinIdx!]

    if (value < min) this.mins.push(idx)
  }

  pop(): T | undefined {
    const idx = this.stack.length - 1

    if (idx < 0) return

    const output = this.stack.pop()

    if (this.mins?.at(-1) === idx) this.mins.pop()

    return output
  }

  min(): T | undefined {
    if (!this.mins.length) return

    const minIdx = this.mins.at(-1)

    return this.stack[minIdx!]
  }
}
