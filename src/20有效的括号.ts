function isValid(s: string): boolean {
  const st = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') st.push(')')
    else if (s[i] === '{') st.push('}')
    else if (s[i] === '[') st.push(']')
    else if (st.length === 0 || st.pop() !== s[i]) return false
  }
  return st.length === 0
}