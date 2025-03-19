// 4. *Palindrome Permutation*:

// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// ```
// EXAMPLE
// Input: Tact Coa
// Output True (permutations: "taco cat", "atco cta", etc.)
// ```

export default function palindromePermutation(str: string): boolean {
  // First we make an array of letters removing spaces
  const stripped = str
    .toLowerCase()
    .split('')
    .filter((letter) => letter !== ' ')

  // We count each letter
  const sum = new Map<string, number>()

  stripped.forEach((letter) => {
    const count = sum.get(letter) || 0
    sum.set(letter, count + 1)
  })

  // If the char length is odd, we can have one group of letters to be off (or to be a single letter).
  const even = !(stripped.length % 2)

  // let's get the even letter counts
  const evens = Array.from(sum.values()).filter(
    (count) => count % 2 === 1
  ).length

  // If the char length is even, evens must be zero to be a palindrome
  if (even) return evens === 0

  // If it's odd, then the even count must be 1, otherwise is not a palindrome
  return evens === 1
}
