// function strStr(haystack: string, needle: string): number {
//   return haystack.indexOf(needle)
// };

function strStr(haystack: string, needle: string): number {
  if (needle === '') return 0
  let n = haystack.length
  let m = needle.length
  const s = haystack.split('')
  const p = needle.split('')
  for (let i = 0; i <= n - m; i++) {
    let a = i
    let b = 0
    while (b < m && s[a] === p[b]) {
      a++
      b++
    }
    if (b === m) return i
  }
  return -1
}