function myPow(x: number, n: number): number {
  if (n < 0) return 1 / quick(x, -n)
  else return quick(x, n)
  function quick(x: number, n: number): number {
    if (n === 0) return 1
    let res = quick(x, Math.floor(n / 2))
    if (n % 2 === 1) return res * res * x
    else return res * res
  }
};