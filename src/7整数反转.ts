function reverse(x: number): number {
  let min = Math.pow(-2, 31)
  let max = Math.pow(2, 31) - 1
  let sign = Math.sign(x)
  x = Math.abs(x)
  let result = x.toString().split('').reverse().join('')
  let resnum = sign * parseInt(result)
  if (resnum > max) return 0
  if (resnum < min) return 0
  return resnum
}