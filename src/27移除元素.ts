function removeElement(nums: number[], val: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
};
const nums = [3, 2, 2, 3]
let val = 3
console.log(removeElement(nums, 3))