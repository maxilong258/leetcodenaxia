function removeDuplicates1047(s: string): string {
  const stack: string[] = []
  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0 || stack[stack.length - 1] !== s[i]) {
      stack.push(s[i])
    } else {
      stack.pop()
    }
  }
  return stack.join('')
};