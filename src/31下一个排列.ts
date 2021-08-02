function nextPermutation(nums: number[]): void {
  let n = nums.length
  for (let i = n - 1; i >= 0; i--) {
    if (i === 0) {
      nums.sort((a, b) => { return a - b })
      return
    } else {
      if (nums[i] > nums[i - 1]) {
        for (let j = 1; j < n - 1; j++) {
          for (let k = i; k < n - j; k++) {
            if (nums[k] > nums[k+1]) {
              nums[k] = [nums[k + 1], nums[k + 1] = nums[k]][0];
            }
          }
        }
        for (let j = i; j < n; j++) {
          if (nums[j] > nums[i - 1]) {
            let temp = nums[i - 1]
            nums[i - 1] = nums[j]
            nums[j] = temp
            return
          }
        }
      }
    }
  }
}