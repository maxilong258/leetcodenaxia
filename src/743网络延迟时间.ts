function networkDelayTime(times: number[][], n: number, k: number): number {
  const graph = new Map()
  for (let time of times) {
    if (graph.get(time[0])) graph.get(time[0]).push([time[1], time[2]])
    else graph.set(time[0], [[time[1], time[2]]])
  }
  const costs = new Map()
  const heap = new MinHeap743((a: any, b: any) => a[1] - b[1])
  heap.offer([k, 0])
  while (heap.size()) {
    const cur = heap.poll()
    if (costs.has(cur[0])) continue
    costs.set(cur[0], cur[1])
    if (graph.has(cur[0])) {
      for (let nei of graph.get(cur[0])) {
        if (!costs.has(nei[0])) heap.offer([nei[0], nei[1] + cur[1]])
      }
    }
  }
  if (costs.size !== n) return -1
  let res = 0
  for (let x of costs.values()) res = Math.max(res, x)
  return res
};

class MinHeap743 {
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