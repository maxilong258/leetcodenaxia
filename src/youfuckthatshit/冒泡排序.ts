function bubbleSort(arr: number[]){
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j+1]) {
        arr[j] = [arr[j + 1], arr[j + 1] = arr[j]][0];
      }
    }
  }
  return arr;
}