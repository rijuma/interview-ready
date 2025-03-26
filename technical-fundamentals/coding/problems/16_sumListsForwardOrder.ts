// *Sum Lists*: You have two numbers represented by a linked list, where each node contains a single digit.
// The digits are stored in reverse order, such that the Vs digit is at the head of the list.
// Write a function that adds the two numbers and returns the sum as a linked list.
//
// ```
// EXAMPLE
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.
// ```

// 6.  Suppose the digits are stored in forward order. Repeat the above problem.

// ```
// EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).Thatis,617 + 295
// Output:9 -> 1 -> 2,Thatis,912.
// ```

import sumLists from './15_sumLists'
import { LinkedList, type Node } from './10_LinkedList'

export default function sumListsForwardOrder(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined
): Node<number> | undefined {
  // Recursive function to create an inverted list.
  const flipList = (list: Node<number>) => {
    const result = new LinkedList<number>()

    const walk = (node: Node<number>) => {
      if (node.next) walk(node.next)
      result.push(node.value)
    }

    walk(list)

    return result.head
  }

  // We reverse the lists first.
  const num1 = list1 && flipList(list1)
  const num2 = list2 && flipList(list2)
  const sum = sumLists(num1, num2)
  const result = sum && flipList(sum)

  return result
}
