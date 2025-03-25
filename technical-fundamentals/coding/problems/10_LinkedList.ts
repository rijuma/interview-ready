// 10. *Implement a Linked List*;

// Create the data structure with the corresponding initial functions:

export type Node<T> = {
  next?: Node<T> | undefined
  value: T
}

export class LinkedList<T> {
  #head: Node<T> | undefined
  #tail: Node<T> | undefined
  #length: number

  constructor(head?: Node<T>) {
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

  push(value: T) {}
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

  //find(): Node<T> {}
  //iterator(): LinkedListIterator {}
}

const list = new LinkedList()
