function printNumbers(n: number): number[] {
  const res = []
  let max = Math.pow(10, n)
  for (let i = 1; i < max; i++) {
    res.push(i)
  }
  return res
};