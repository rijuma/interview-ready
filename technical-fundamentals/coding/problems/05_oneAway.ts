// 5. *One Away*:

// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

export default function isOneAway(str1: string, str2: string): boolean {
  // First, the obvious
  if (str1 === str2) return true

  const diff = str2.length - str1.length

  // First let's check that the length is at most 1 character.
  if (Math.abs(diff) > 1) return false

  // Then we put the longer in stringA, and the equal or shorter in stringB,

  const stringA = diff < 0 ? str1 : str2
  const stringB = diff < 0 ? str2 : str1

  // Find the first difference
  let index = 0
  while (stringA[index] === stringB[index]) index++

  // Then, if the strings are equal, the rest of the strings must be equal.
  // Case: Replace character.
  if (diff === 0)
    return stringA.substring(index + 1) === stringB.substring(index + 1)

  // If not, then we skip one letter from the longer string, and check the rest of the string.
  // Case: Insert / remove character.
  return stringA.substring(index + 1) === stringB.substring(index)
}
