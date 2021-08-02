function selectSort(arr: number[]): number[]{
  let len = arr.length
  let minIndex
  let temp
  console.time('选择排序耗时')
  for(let i = 0; i < len - 1; i++){
    minIndex = i;
    for(let j = i + 1; j < len; j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.timeEnd('选择排序耗时');
  return arr;
}
const example = [8, 94, 15, 88, 55, 76, 21, 39];
console.log(selectSort(example));