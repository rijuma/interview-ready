// 1. *Remove Dups*:

// Write code to remove duplicates from an unsorted linked list. FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?
//
// 1 -> 2 -> 2 -> 2 -> 4

import type { Node } from './10_LinkedList'

export default function removeDups<T>(head?: Node<T>): Node<T> | undefined {
  if (!head) return

  let curr = head

  while (curr?.next) {
    let prev = curr
    let find: Node<T> | undefined = curr

    while (find) {
      prev = find
      find = find.next

      while (find && find.value === curr.value) {
        // If we find a duplicate, we remove it from the list and check the next one.
        prev.next = find.next
        find = find.next
      }
    }

    curr = curr.next
  }

  return head
}
