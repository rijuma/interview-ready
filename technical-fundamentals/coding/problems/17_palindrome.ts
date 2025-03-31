// 17. *Palindrome*:

// Implement a function to check if a linked list is a palindrome.

import { type Node } from "./10_LinkedList"

export default function isPalindrome<T>(head: Node<T> | undefined): boolean {
  if (!head) return false

  if (!head.next) return true

  const getPrevious = (node: Node<T>, end?: Node<T>) => {
    if (node.next === end) return node

    return getPrevious(node.next!, end)
  }

  const walk = (from: Node<T>, to: Node<T>) => {
    if (from === to) return true

    if (from.value != to.value) return false

    if (from.next === to && from.next.value === to.value) return true

    const penultimate = getPrevious(from, to)
    return walk(from.next!, penultimate!)
  }

  const tail = getPrevious(head)
  return walk(head, tail)
}
