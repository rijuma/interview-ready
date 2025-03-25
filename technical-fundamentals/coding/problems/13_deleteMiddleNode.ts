// 3. *Delete Middle Node*:

// Implement an algorithm to delete a node in the middle
// (i.e., any node but the first and last node, not necessarily the exact middle)
// of a singly linked list, given only access to that node.

// ```
// EXAMPLE
// Input: the node c from the linked list a - >b- >c - >d - >e- >f
// Result: nothing is returned, but the new linked list looks like a->b->d->e->f Hints: #72
// ```

// Note from solver: The tests do actually expect the function to return the head node.

import { LinkedList, type Node } from './10_LinkedList'

export default function deleteMiddleNode<T>(
  head: Node<T>,
  position: number
): Node<T> | undefined {
  const ll = new LinkedList(head)

  if (ll.length < 3) return head

  if (position < 1 || position > ll.length - 2) return head

  const prev = ll.get(position - 1)

  prev!.next = prev?.next?.next

  return head
}
