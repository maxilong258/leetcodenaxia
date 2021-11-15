class MinStack {
  stack: number[]
  constructor() {
    this.stack = new Array()
  }

  push(x: number): void {
    this.stack.push(x)
  }

  pop(): void {
    this.stack.pop()
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  min(): number {
    const arr = Array.from(this.stack)
    let min = Infinity
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) min = arr[i]
    }
    return min
  }
}