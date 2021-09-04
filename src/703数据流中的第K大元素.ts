class KthLargest {
  k: number
  heap: any
  constructor(k: number, nums: number[]) {
    this.k = k;
    this.heap = new MinHeap();
    for (const x of nums) {
      this.add(x);
    }
  }

  add(val: number): number {
    if (this.heap.size() < this.k || val >= this.heap.peek()) {
      this.heap.offer(val)
    }
    if (this.heap.size() > this.k) {
        this.heap.poll();
    }
    return this.heap.peek();
  }
}
class MinHeap703{}