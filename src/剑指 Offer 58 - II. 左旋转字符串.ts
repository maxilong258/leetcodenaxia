function reverseLeftWords(s: string, n: number): string {
  if (n >= s.length) return s
  let left = s.substring(0, n)
  let right = s.substring(n, s.length)
  return right + left
};

// function reverseLeftWords(s: string, n: number): string {
//   const arr = s.split('')
//   for (let i = 0; i < n; i++) {
//     arr.push(arr.shift())
//   }
//   return arr.join('')
// };