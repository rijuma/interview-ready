// 6. *String Compression*:

// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2blc5a3,
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

export default function stringCompression(str: string): string {
  let compressed = ''

  // Less than three chars is "uncompressible".
  if (str.length < 3) return str

  let i = 1
  let current = str[0]
  let count = 1
  while (i < str.length) {
    if (str[i] !== current) {
      compressed = `${compressed}${current}${count}`
      count = 1
      current = str[i]
    } else {
      count++
    }
    i++
  }
  compressed = `${compressed}${current}${count}`

  return compressed.length < str.length ? compressed : str
}
