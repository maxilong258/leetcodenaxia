function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return ''
  let s = strs[0]
  for (let item of strs) {
    while (!item.startsWith(s)) {
      if (s.length === 0) return ''
      s = s.substring(0, s.length - 1)
    }
  }
  return s
}