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

// class MaxQueue {
//   queue: number[]
//   deque: number[]
//   constructor() {
//     this.queue = new Array()
//     this.deque = new Array()
//   }

//   max_value(): number {
//     return this.queue.length ? this.deque[0] : -1
//   }

//   push_back(value: number): void {
//     this.queue.push(value)
//     while (this.deque.length && this.deque[this.deque.length - 1] < value) this.deque.pop()
//     this.deque.push(value)
//   }

//   pop_front(): number {
//     if (!this.queue.length) return -1
//     if (this.deque[0] === this.queue[0]) this.deque.shift()
//     return this.queue.shift()
//   }
// }