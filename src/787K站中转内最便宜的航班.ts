function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
  const graph = new Map()
  for (let edge of flights) {
    if (graph.has(edge[0])) graph.get(edge[0]).push([edge[1], k, edge[2]])
    else graph.set(edge[0], [[edge[1], k, edge[2]]])
  }
  const heap = new MinHeap787((a: number[], b: number[]) => {return a[2] - b[2]})
  heap.offer([src, k, 0])
  while (heap.size()) {
    const cur = heap.poll()
    if (cur[0] === dst) return cur[2]
    if (cur[1] >= 0 && graph.has(cur[0])) {
      for (let next of graph.get(cur[0])) {
        heap.offer([next[0], cur[1] - 1, next[2] + cur[2]])
      }
    }
  }
  return -1
};

class MinHeap787 {
  data: number[] | any
  comparator: Function
  constructor(comparator: Function = (a: any, b: any) => a - b, data = [] ) {
    this.data = data;
    this.comparator = comparator
    this.heapify();
  }

  heapify() {
    if (this.size() < 2) return;
    for (let i = 1; i < this.size(); i++) {
    this.bubbleUp(i);
    }
  }

  peek() {
    if (this.size() === 0) return null;
    return this.data[0];
  }

  offer(value: any) {
    this.data.push(value);
    this.bubbleUp(this.size() - 1);
  }

  poll() {
    if (this.size() === 0) {
        return null;
    }
    const result = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
        this.data[0] = last;
        this.bubbleDown(0);
    }
    return result;
  }

  bubbleUp(index: any) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  bubbleDown(index: any) {
    const lastIndex = this.size() - 1;
      while (true) {
        const leftIndex = index * 2 + 1;
        const rightIndex = index * 2 + 2;
        let findIndex = index;
        if (
          leftIndex <= lastIndex &&
          this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
        ) {
          findIndex = leftIndex;
        }
        if (
          rightIndex <= lastIndex &&
          this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
        ) {
          findIndex = rightIndex;
        }
        if (index !== findIndex) {
          this.swap(index, findIndex);
          index = findIndex;
        } else {
          break;
        }
      }
  }

  swap (index1: any, index2: any) {
    [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
  }

  size() {
    return this.data.length;
  }
}