function longestConsecutive(nums: number[]): number {
  const set: Set<number> = new Set()
  for (let num of nums) set.add(num)
  let res = 0
  for (let num of set) {
    if (!set.has(num - 1)) {
      let curr = num
      let len = 1
      while (set.has(curr + 1)) {
        curr += 1
        len += 1
      }
      res = Math.max(res, len)
    }
  }
  return res
}