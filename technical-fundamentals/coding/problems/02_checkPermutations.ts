// 2. *Check Permutation*:

// Given two strings, write a method to decide if one is a permutation of the other.
export default function checkPermutations(s1: string, s2: string): boolean {
  // I'm assuming the intention is to have the cleanest understandable code to solve the problem
  // instead of the most optimized.

  const s1Sorted = s1.split('').sort().join('')
  const s2Sorted = s2.split('').sort().join('')

  return s1Sorted === s2Sorted
}
