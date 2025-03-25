// 10. *Implement a Linked List*;

// Create the data structure with the corresponding initial functions:

export type Node<T> = {
  next?: Node<T> | undefined
  value: T
}

export class LinkedList<T> {
  #head: Node<T> | undefined = undefined
  #tail: Node<T> | undefined = undefined
  #length: number = 0

  constructor(head?: Node<T>) {
    if (!head) return

    let curr = (this.#head = head)
    let count = 1

    while (curr?.next) {
      curr = curr.next
      count++
    }

    this.#tail = curr
    this.#length = count
  }

  // Methods

  push(value: T) {
    const newNode = { value }

    if (!this.#tail) {
      this.#head = this.#tail = newNode
    } else {
      this.#tail.next = newNode
      this.#tail = this.#tail.next
    }

    this.#length++

    return this
  }

  filter() {}
  visit() {}
  remove() {}
  merge() {}
  print() {}

  // Props

  get head() {
    return this.#head
  }

  get tail() {
    return this.#tail
  }

  get length() {
    return this.#length
  }

  // extra

  /**
   * Returns the nth node in the linked list (zero-based).
   */
  get(index: number): Node<T> | undefined {
    if (index < 0 || index >= this.length) return

    let count = 0
    let curr = this.head

    while (count < index && curr) {
      curr = curr.next
      count++
    }

    return curr
  }

  /**
   * Finds the next node that matches the search value.
   */
  find(value: T, from?: Node<T>): Node<T> | undefined {
    let current = from ? from : this.head

    while (current && current.value !== value) current = current.next

    return current
  }

  //iterator(): LinkedListIterator {}
}

const list = new LinkedList()
