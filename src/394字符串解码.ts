function decodeString(s: string): string {
  const reg = /(\d+)\[([a-zA-Z]+)\]/
  while (reg.test(s)) {
    s = s.replace(reg, (substr, n, str) => {
      return str.repeat(n)
    })
  }
  return s
}