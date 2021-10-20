function binarySearch(arr: number[], key: number): number {
  let low = 0
  let high = arr.length - 1
  while(low <= high){
    // let mid = (high + low) / 2
    let mid = 1 + (high - low) / 2
    if (key == arr[mid]) {
      return mid;
    } else if (key > arr[mid]) {
      low = mid + 1;
    } else if (key < arr[mid]) {
      high = mid -1;
    } else {
      return -1;
    }
  }
  return -1
};
const testarr = [1,2,3,4,5,6,7]
console.log(binarySearch(testarr, 4));
