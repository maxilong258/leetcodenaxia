function majorityElement(nums: number[]): number {
  let hp = 0
  let curr = null
  for (let num of nums) {
    if (hp === 0) curr = num
    hp += (curr === num) ? 1 : -1
  }
  return curr
};