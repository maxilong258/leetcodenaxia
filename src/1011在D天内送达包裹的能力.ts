function shipWithinDays(weights: number[], days: number): number {
  let l = 0
  let r = 1
  for (let i = 0; i < weights.length; i++) {
    l = Math.max(l, weights[i])
    r += weights[i]
  }
  while (l < r) {
    let m = Math.floor(l + (r - l) / 2)
    if (check1011(weights, days, m)) {
      r = m
    } else {
      l = m + 1
    }
  }
  return l
};

function check1011(weights: number[], days: number, mid: number) {
  let cut = 1
  let sum = 0
  for (let num of weights) {
    if (sum + num > mid) {
      sum = num
      cut++
    } else {
      sum += num
    }
  }
  return cut <= days
}