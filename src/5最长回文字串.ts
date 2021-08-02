function longestPalindrome(s: string): string {
  const range = [0, 0]
  let l = s.length
  if (l === 0 || l === 1) return s
  const arr = s.split('')
  for (let i = 1; i < l; i++) {
    helper(arr, l, i, i)
    helper(arr, l, i-1, i)
  }
  return s.substring(range[0], range[1])

  function helper(ss: string[], len: number, start: number, end: number ) {
    while (start >= 0 && end <= len-1) {
      if (ss[start] === ss[end]) {
        start--
        end++
      } else {
        break
      }
    }
    if (end - (start + 1) > range[1] - range[0]) {
      range[0] = start + 1
      range[1] = end
    }
  }
}

// 中心扩散法