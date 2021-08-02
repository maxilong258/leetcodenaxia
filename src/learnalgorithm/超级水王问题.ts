function waterKing(arr: number[]) {
  if (arr.length === 0) return -1
  let candidate = 0
  let restHP = 0
  for (let item of arr) {
    if (restHP === 0) {
      candidate = item
      restHP = 1
    } else if (item != candidate) {
      restHP--
    } else {
      restHP++
    }
  }
  if (restHP == 0) return -1
  let count = 0
  for (let item of arr) {
    if (item === candidate) count++
  }
  if (count > arr.length / 2) return candidate
  else return -1
}

const arr = [3, 3, 2, 1, 3]
console.log(waterKing(arr))


