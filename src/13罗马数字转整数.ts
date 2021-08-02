function romanToInt(s: string): number {
  const reps = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let res = 0
  for (let i = 0; i < 13; i++) {
    while (s.indexOf(reps[i]) === 0) {
      s = s.substr(reps[i].length)
      res += nums[i]
    }  
  }
  return res
}