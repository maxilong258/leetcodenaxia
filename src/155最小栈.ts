// class MinStack {
//   stack: number[]
//   constructor() {
//     this.stack = new Array()
//   }

//   push(x: number): void {
//     this.stack.push(x)
//   }

//   pop(): void {
//     this.stack.pop()
//   }

//   top(): number {
//     return this.stack[this.stack.length - 1]
//   }

//   min(): number {
//     const arr = Array.from(this.stack)
//     let min = Infinity
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < min) min = arr[i]
//     }
//     return min
//   }
// }

class MinStack {
  a: number[]
  b: number[]
  constructor() {
    this.a = new Array()
    this.b = new Array()
  }

  push(x: number): void {
    this.a.push(x)
    if (this.b.length) this.b[this.b.length - 1] > x ? this.b.push(x) : this.b.push(this.b[this.b.length - 1])
    else this.b.push(x)
  }

  pop(): void {
    this.a.pop()
    this.b.pop()
  }

  top(): number {
    return this.a[this.a.length - 1]
  }

  min(): number {
    return this.b[this.b.length - 1]
  }
}
