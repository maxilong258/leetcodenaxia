function countAndSay(n: number): string {
  let prev = '1'
  for (let i = 2; i <= n; i++) {
    let curr = ''
    let i = 0
    let j = 0
    while (j < prev.length) {
      while (j < prev.length && prev[i] === prev[j]) j++
      curr += String(j - i) + prev[i]
      i = j
    }
    prev = curr
  }
  return prev
}