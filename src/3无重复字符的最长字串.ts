function lengthOfLongestSubstring(str: string): number {
  const set = new Set()
  let i = 0
  let j = 0
  let maxlength = 0
  if (str.length === 0) return 0
  while (i < str.length) {
    if (!set.has(str[i])) {
      set.add(str[i])
      maxlength = Math.max(maxlength, set.size)
    } else {
      while (set.has(str[i])) {
        set.delete(str[j])
        j++
      }
      set.add(str[i])
    }
    i++
  }
  return maxlength
};