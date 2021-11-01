// 中心扩散
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

//动态规划
// function longestPalindrome(s: string): string {
//   let n = s.length
//   const memo = new Array(n).fill(null).map(item => new Array(n).fill(null))
//   let lps = ''
//   dfs(0, n - 1)
//   return lps
//   function dfs(i: number, j: number) {
//     if (i >= j) {
//       if (lps.length < j - i + 1) {
//         lps = s.substring(i, j + 1)
//       }
//       return true
//     }
//     if (memo[i][j] !== null) return memo[i][j]
//     let res = false
//     if (s.charAt(i) === s.charAt(j) && dfs(i + 1, j - 1)) {
//       res = true
//       if (lps.length < j - i + 1) {
//         lps = s.substring(i, j + 1)
//       }
//     } else {
//       dfs(i + 1, j)
//       dfs(i, j - 1)
//     }
//     return memo[i][j] = res
//   }
// };