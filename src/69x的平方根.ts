// function mySqrt(x: number): number {
//   return Math.floor(Math.sqrt(x))
// };

// function mySqrt(x: number): number {
//   if (x <= 1) return x
//   for (let i = 0; i < x; i++) {
//     if (i * i === x) return i
//     if (((i * i) < x) && (((i + 1) * (i + 1)) > x)) return i
//   }
// }

function mySqrt(x: number): number {
  let l = 0
  let r = x + 1
  while (l < r) {
    let m = Math.floor(l + (r - l) / 2)
    if (m * m > x) r = m
    else l = m + 1
  }
  return l - 1
}