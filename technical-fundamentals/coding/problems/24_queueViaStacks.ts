// 4. *Queue via Stacks*:

// Implement a MyQueue class which implements a queue using two stacks.

export default class MyQueue<T> {
  private heads: T[]
  private tails: T[]

  constructor() {
    this.heads = []
    this.tails = []
  }

  enqueue(value: T): void {
    this.toHeads()
    this.heads.push(value)
  }

  dequeue(): T | undefined {
    this.toTails()
    return this.tails.pop()
  }

  peek(): T | undefined {
    this.toTails()
    return this.tails.at(-1)
  }

  isEmpty(): boolean {
    return this.heads.length + this.tails.length === 0
  }

  // --

  private toHeads() {
    while (this.tails.length) this.heads.push(this.tails.pop()!)
  }

  private toTails() {
    while (this.heads.length) this.tails.push(this.heads.pop()!)
  }
}
