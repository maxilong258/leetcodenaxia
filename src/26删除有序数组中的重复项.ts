function removeDuplicates(nums: number[]): number {
  if (nums === null || nums.length === 1) {
    return nums.length;
  }
  let i = 0, j = 1;
  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      j++;
    } else {
      i++;
      nums[i] = nums[j];
      j++;
    }
  }
  return i + 1;
};