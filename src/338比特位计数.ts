function countBits(n: number): number[] {
  let res = []
  for (let i = 0; i <= n; i++) {
    let str = i.toString(2)
    let count = 0
    for (let s of str) {
      if (s === '1') count++
    }
    res.push(count)
  }
  return res
};

// function countBits(n: number): number[] {
//   let res = []
//   res[0] = 0
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 1) res[i] = res[i - 1] + 1
//     else res[i] = res[i / 2]
//   }
//   return res
// }