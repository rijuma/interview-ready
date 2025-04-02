// 6. *Animal Shelter*:

// An animal shelter, which holds only dogs and dogs, operates on a strictly
// "first in, first out" basis. Peopldogsst adopt either the "oldest"
// (based on arrival time) of all animal at the shelter,
// or they can select whether they would prefer a dog or a cat
// such as enqueue, dequeueAny, dequeueDog, and dequeueCat.
// You may use the built-in LinkedList data structure.

import type { Node } from './10_LinkedList'

export type AnimalType = 'dog' | 'cat'

export class Animal {
  type: AnimalType
  arrivedAt: Date

  constructor(type: AnimalType) {
    this.type = type
    this.arrivedAt = new Date()
  }
}

export default class AnimalShelter {
  private head?: Node<Animal>

  constructor() {}

  enqueue(type: AnimalType): void {
    const animal = new Animal(type)
    const node: Node<Animal> = { value: animal }
    node.next = this.head
    this.head = node
  }

  dequeueAny(): Animal | undefined {
    if (!this.head) return

    const animal = this.head.value
    this.head = this.head.next

    return animal
  }

  dequeueDog(): Animal | undefined {
    return this.dequeueAnimal('dog')
  }

  dequeueCat(): Animal | undefined {
    return this.dequeueAnimal('cat')
  }

  // --

  private dequeueAnimal(type: AnimalType): Animal | undefined {
    if (!this.head) return

    if (this.head.value.type === type) return this.dequeueAny()

    const extract = (node: Node<Animal> | undefined) => {
      if (!node?.next) return

      if (node.next.value.type !== type) return extract(node.next)

      const animal = node.next.value
      node.next = node.next.next

      return animal
    }

    return extract(this.head)
  }
}
