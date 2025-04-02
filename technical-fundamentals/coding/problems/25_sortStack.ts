// 5. *Sort Stack*:

// Write a program to sort a stack such that the smallest items are on the top.
// You can use an additional temporary stack, but you may not copy the elements
// into any other data structure (such as an array).
// The stack supports the following operations: push, pop, peek, and isEmpty.

export default class SortStack<T> {
  private stack: T[]
  private aux: T[]

  constructor() {
    this.stack = []
    this.aux = []
  }

  push(value: T): void {
    if (!this.stack.length) {
      this.stack.push(value)
      return
    }

    while (this.stack.length && this.stack.at(-1)! < value)
      this.aux.push(this.stack.pop()!)

    this.stack.push(value)

    while (this.aux.length) this.stack.push(this.aux.pop()!)
  }

  pop(): T | undefined {
    return this.stack.pop()
  }

  peek(): T | undefined {
    return this.stack.at(-1)
  }

  isEmpty(): boolean {
    return this.stack.length === 0
  }
}
