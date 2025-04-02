// 8.  *Intersection*;

// Given two (singly) linked lists, determine if the two lists intersect.
// Return the first intersecting node. Note that the intersection is defined
// based on reference, not value.

import type { Node } from './10_LinkedList'

export default function intersection<T>(
  list1: Node<T> | undefined,
  list2: Node<T> | undefined
): Node<T> | undefined {
  if (!list1 || !list2) return

  const find = (needle?: Node<T>, haystack?: Node<T>): Node<T> | undefined => {
    if (!needle || !haystack) return

    if (needle === haystack) return needle

    return find(needle, haystack.next)
  }

  const walk = (current?: Node<T>): Node<T> | undefined => {
    if (!current) return

    const link = find(current, list2)

    return link || walk(current.next)
  }

  const link = walk(list1)

  return link
}
