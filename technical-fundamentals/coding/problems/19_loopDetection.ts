// 9. *Loop Detection*:

// Given a circular linked list, implement an algorithm that returns the node
// at the beginning of the loop.

// ```
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node's next pointer
// points to an earlier node, so as to make a loop in the linked list.
// ```

// ```
// EXAMPLE
// Input: A->8->C->D->E-> C[thesameCasearlier] Output: C
// Hints: #50, #69, #83, #90
// ```

import type { Node } from './10_LinkedList'

export default function detectLoop<T>(
  head: Node<T> | undefined
): Node<T> | null {
  const walked = new Set()

  const walk = (node?: Node<T>) => {
    if (!node) return null

    if (walked.has(node)) return node

    walked.add(node)

    return walk(node.next)
  }

  return walk(head)
}
