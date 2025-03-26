// 5. *Sum Lists*: You have two numbers represented by a linked list,
// where each node contains a single digit. The digits are stored in reverse order,
// such that the Vs digit is at the head of the list.
// Write a function that adds the two numbers and returns the sum as a linked list.

// ```
// EXAMPLE
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.
// ```

import { LinkedList, type Node } from './10_LinkedList'

export default function sumLists(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined
): Node<number> | undefined {
  const result = new LinkedList<number>()

  let num1 = list1
  let num2 = list2
  let carryOver = 0
  while (num1 || num2 || carryOver > 0) {
    const digit1 = num1?.value || 0
    const digit2 = num2?.value || 0
    const sum = digit1 + digit2 + carryOver

    if (sum < 10) {
      result.push(sum)
      carryOver = 0
    } else {
      result.push(sum % 10)
      carryOver = (sum / 10) | 0 // Truncate
    }

    num1 = num1?.next
    num2 = num2?.next
  }

  return result.head
}
