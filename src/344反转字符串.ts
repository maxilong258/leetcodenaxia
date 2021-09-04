function reverseString(s: string[]): void {
  let i = 0
  let j = s.length - 1
  let temp: string
  while (i < j) {
    temp = s[i]
    s[i] = s[j]
    s[j] = temp
    i++
    j--
  }
};