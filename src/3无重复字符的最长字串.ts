function lengthOfLongestSubstring(s: string): number {
  let res = 0
  let i = 0
  let j = 0
  const set = new Set()
  while (j < s.length) {
    while (set.has(s[j])) {
      set.delete(s[i])
      i++
    }
    set.add(s[j])
    if (res < set.size) res = set.size
    j++
  }
  return res
};