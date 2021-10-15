function findRepeatedDnaSequences(s: string): string[] {
  if (s.length < 11) return []
  const signedstr = new Set<string>()
  const strs = new Set<string>()
  for (let i = 0; i <= s.length - 10; i++) {
    let str = s.substr(i, 10)
    if (!strs.has(str)) strs.add(str)
    else signedstr.add(str)
  }
  return [...signedstr]
}