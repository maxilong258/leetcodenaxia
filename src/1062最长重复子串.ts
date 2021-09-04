function longestRepeatingSubstring(s: string) {
  let l = 0
  let r = s.length - 1
  while (l < r) {
    let mid = l + (r - l + 1) / 2
    if (f(s, mid)) {
      l = mid
    } else {
      r = mid - 1
    }
  }
  return l

  function f(s: string, length: number) {
    const seen = new Set()
    for (let i = 0; i <= s.length - length; i++) {
      let j = i + l - 1
      let sub = s.substring(i, j + 1)
      if (seen.has(sub)) return true
      seen.add(sub)
    }
    return false
  }
}

let str = 'aaaaa'
console.log(longestRepeatingSubstring(str));
