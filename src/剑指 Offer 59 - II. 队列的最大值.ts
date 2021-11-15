class MaxQueue {
  queue: number[]
  constructor() {
    this.queue = new Array()
  }

  max_value(): number {
    if (this.queue.length) return Math.max(...this.queue)
    else return -1
  }

  push_back(value: number): void {
    this.queue.push(value)
  }

  pop_front(): number | any {
    if (this.queue.length) return this.queue.shift()
    else return -1
  }
}
