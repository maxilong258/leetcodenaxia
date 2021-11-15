function sumNums(n: number): number {
  if (n === 1) return 1
  n += sumNums(n - 1)
  return n
};