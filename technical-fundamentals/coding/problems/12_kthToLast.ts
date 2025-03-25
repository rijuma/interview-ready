// 2.  *Return Kth to Last*:

// Implement an algorithm to find the kth to last element of a singly linked list.

import { LinkedList, type Node } from './10_LinkedList'

export default function kthToLast<T>(
  head: Node<T>,
  k: number
): Node<T> | undefined {
  const ll = new LinkedList(head)
  const index = ll.length - k
  const node = ll.get(index)

  return node
}
