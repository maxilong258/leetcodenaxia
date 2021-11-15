class CQueue {
  queue: number[]
  constructor() {
    this.queue = new Array()
  }

  appendTail(value: number): void {
    this.queue.push(value)
  }

  deleteHead(): number | any{
    if (this.queue.length !== 0) return this.queue.shift()
    else return -1
  }
}