function reverseLeftWords(s: string, n: number): string {
  if (n >= s.length) return s
  let left = s.substring(0, n)
  let right = s.substring(n, s.length)
  return right + left
};