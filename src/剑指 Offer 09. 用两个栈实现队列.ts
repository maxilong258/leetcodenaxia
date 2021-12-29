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

// class CQueue {
//   a: number[]
//   b: number[]
//   constructor() {
//     this.a = []
//     this.b = []
//   }

//   appendTail(value: number): void {
//     this.a.push(value)
//   }

//   deleteHead(): number {
//     while (this.a.length) this.b.push(this.a.pop())
//     let res = this.b.length ? this.b.pop() : -1
//     while (this.b.length) this.a.push(this.b.pop())
//     return res
//   }
// }