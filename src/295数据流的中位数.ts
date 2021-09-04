// 满足两个特性：
// 1.大顶堆中最大的数值小于等于小顶堆中的最小数，也就是小于小顶堆的堆顶
// 2.两个堆中元素相差为0，或者为1,不能>1

// 然后，我们观察可以发现，如果，数据总数是偶数，那么大顶堆，和小顶堆，
// 一边占一半元素，而且，还是有序的，很像二分法，这时，中位数为两堆顶平均值
// 如果数据个数为奇数，则，中位数出现在元素个数多的堆的堆顶中


// 憨批法
// class MedianFinder {
//   arr: number[]
//   constructor() {
//     this.arr = []
//   }

//   addNum(num: number): void {
//     this.arr.push(num)
//   }

//   findMedian(): number {
//     this.arr.sort((a, b) => {return a - b})
//     if (this.arr.length % 2 === 0) return (this.arr[this.arr.length / 2] + (this.arr[(this.arr.length / 2) - 1])) / 2
//     else return this.arr[Math.floor(this.arr.length / 2)]
//   }
// }

// 二分法
class MedianFinder {
  arr: number[]
  constructor() {
    this.arr = []
  }

  addNum(num: number): void {
    let l = 0
    let r = this.arr.length
    while (l < r) {
      let mid = Math.floor(l + (r - l) / 2)
      if (this.arr[mid] < num) l = mid + 1
      else r = mid
    }
    this.arr.splice(l, 0, num)
  }

  findMedian(): number {
    if (this.arr.length % 2 === 0) return (this.arr[this.arr.length / 2] + (this.arr[(this.arr.length / 2) - 1])) / 2
    else return this.arr[Math.floor(this.arr.length / 2)]
  }
}

// 堆排序
// class MedianFinder {
//   PriorityQueue<Integer> min ;
//   PriorityQueue<Integer> max ;
//   /** initialize your data structure here. */
//   public MedianFinder() {
//       min = new PriorityQueue<>();
//       max = new PriorityQueue<>((a,b) -> {return  b - a ;});
//   }
  
//   public void addNum(int num) {
//       max.add(num);
//       min.add(max.remove());
//       if (min.size() > max.size())
//           max.add(min.remove());
//   }
  
//   public double findMedian() {
//       if (max.size() == min.size())
//           return (max.peek() + min.peek()) / 2.0;
//       else 
//           return max.peek();
//   }
// }