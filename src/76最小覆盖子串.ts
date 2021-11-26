function minWindow(s: string, t: string): string {
  let minLen = s.length + 1
  let start = s.length
  const map: any = new Map()
  let missingType = 0
  for (let c of t) {
    if (!map.has(c)) {
      missingType++
      map.set(c, 1)
    } else {
      map.set(c, map.get(c) + 1)
    }
  }
  let i = 0
  let j = 0
  while (j < s.length) {
    let rightChar = s[j]
    if (map.has(rightChar)) map.set(rightChar, map.get(rightChar) - 1)
    if (map.get(rightChar) === 0) missingType--
    while (missingType === 0) {
      if (j - i + 1 < minLen) {
        minLen = j - i + 1
        start = i
      }
      let leftChar = s[i]
      if (map.has(leftChar)) map.set(leftChar, map.get(leftChar) + 1)
      if (map.get(leftChar) > 0) missingType++
      i++
    }
    j++
  }
  if (start === s.length) return ''
  return s.substring(start, start + minLen)
}