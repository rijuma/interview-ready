// 3. *Stack of Plates*:

// Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
// Therefore, in real life, we would likely start a new stack when the previous stack
// exceeds some threshold. Implement a data structure SetOfStacks that mimics this.
// SetOfStacks should be composed of several stacks and should create a new stack once
// the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave
// identically to a single stack (that is, pop() should return the same values as it would if
// there were just a single stack).

// FOLLOW UP: Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.

export default class StackOfPlates<T> {
  stacked: T[][]
  private capacity: number

  constructor(capacity: number) {
    this.capacity = capacity
    this.stacked = []
  }

  push(value: T): void {
    const current = this.currentStack()

    if (current && current.length < this.capacity) {
      current.push(value)
      return
    }

    this.stacked.push([value])
  }

  pop(): T | undefined {
    const current = this.currentStack()

    if (!current) return

    // If it's the only element, we remove the stack
    if (current.length === 1) {
      const output = current.at(-1)
      this.stacked.pop()
      return output
    }

    // Else, we just pop the value
    return current.pop()
  }

  private currentStack() {
    return this.stacked.at(-1)
  }
}
