function isPalindrome(x: number): boolean {
  const arr = x.toString().split('')
  let len = arr.length
  let res: boolean
  if (len % 2 === 0) res = helper(arr, len, len/2-1, len/2)
  else res = helper(arr, len, Math.floor(len/2), Math.floor(len/2))
  return res
};
function helper(ss: string[], len: number, start: number, end: number): boolean {
  while (start >= 0 && end <= len-1) {
    if (ss[start] === ss[end]) {
      start--
      end++
    } else {
      return false
    }
  }
  return true
}

// reverse性能不好
// 使用中心扩散