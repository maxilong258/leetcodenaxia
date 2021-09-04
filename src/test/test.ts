class MedianFinder {
  data: number[]
  constructor() {
    this.data = []
  }

  addNum(num: number): void {
    let l = 0
    let r = this.data.length
    while (l < r) {
      let mid = l + (r - l) / 2
      if (this.data[mid] < num) l = mid + 1
      else r = mid
    }
    this.data.splice(l, 0, num)
  }

  findMedian(): number {
    if (this.data.length % 2 === 0) return (this.data[this.data.length / 2] + (this.data[(this.data.length / 2) - 1])) / 2
    else return this.data[Math.floor(this.data.length / 2)]
  }
}