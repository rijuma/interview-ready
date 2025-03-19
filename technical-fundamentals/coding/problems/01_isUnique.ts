// 1. *Is Unique*:

// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

export default function isUnique(str: string): boolean {
  for (let current = 0; current < str.length - 1; current++) {
    for (let compare = current + 1; compare < str.length; compare++) {
      if (str[current] === str[compare]) return false
    }
  }

  return true
}

export function isUniqueSimple(str: string): boolean {
  const chars = new Set()

  for (let i = 0; i < str.length; i++) {
    const char = str[i]

    if (chars.has(char)) return false

    chars.add(char)
  }

  return true
}
