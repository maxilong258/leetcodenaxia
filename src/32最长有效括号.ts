function longestValidParentheses(s: string): number {
  let res = 0
  const stack = []
  stack.push(-1)
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else {
      stack.pop()
      if (stack.length === 0) {
        stack.push(i)
      } else {
        res = Math.max(res, i - stack[stack.length - 1])
      }
    }
  }
  return res
}