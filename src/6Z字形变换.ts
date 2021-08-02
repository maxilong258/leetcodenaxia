function convert(s: string, numRows: number): string {
  if (numRows === 1) return s
  let xkey = 0
  let ykey = 0
  let directY = true
  let arr: string[][] = []
  for (let i = 0; i < numRows; i++) {
    arr[i] = []
  }
  for (let i = 0; i < s.length; i++) {
    arr[ykey][xkey] = s[i]
    if (directY) {
      if (ykey < numRows - 1) {
        ykey++
      } else {
        directY = false
        xkey++
        ykey--
      }
    } else {
      if (ykey > 0) {
        ykey--
        xkey++
      } else {
        directY = true
        ykey++
      }
    }
  }
  let res = ''
  for (let i = 0; i < arr.length; i++) {
    res += arr[i].join('')
  }
  return res
};

// 挺没意思的这题