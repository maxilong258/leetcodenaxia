function quickSort(arr: number[]): number[]{
  if (arr.length < 2) {
      return arr;
  }
  let pivotIndex = Math.floor(arr.length / 2) // 找到那个基准数
  let pivot = arr.splice(pivotIndex, 1)[0] // 取出基准数，并去除，splice返回值为数组。
  const left=[]
  const right=[];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right)); // 加入基准数
}
const testarr1 = [3,23,3,2,4,23,5,24,5,3425,43,3456,54,6,34,32,41,4,2432]
console.log(quickSort(testarr1))