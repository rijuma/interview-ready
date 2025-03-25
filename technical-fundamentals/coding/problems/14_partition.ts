// 4. *Partition*:

// Write code to partition a linked list around a value x,
// such that all nodes less than x come before all nodes greater than or equal to x.
// If x is contained within the list, the values of x only need to be after the elements
// less than x (see below). The partition element x can appear anywhere in the
// "right partition"; it does not need to appear between the left and right partitions.

// ```
// EXAMPLE
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1[partition=5]
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
// ```

// Note from the solver, in the tests, the actual expected output is:
// 3 -> 2 -> 1 -> 5 -> 8 -> 5 -> 10
// Not the one listed above.

import { LinkedList, type Node } from './10_LinkedList'

export default function partition<T>(
  head: Node<T> | undefined,
  x: T
): Node<T> | undefined {
  if (!head) return head

  const lower = new LinkedList<T>()
  const rest = new LinkedList<T>()

  let curr: Node<T> | undefined = head

  while (curr) {
    if (curr.value < x) {
      lower.push(curr.value)
    } else {
      rest.push(curr.value)
    }
    curr = curr.next
  }

  // We append the result lists
  let concat = rest.head

  while (concat) {
    lower.push(concat.value)
    concat = concat.next
  }

  return lower.head
}
