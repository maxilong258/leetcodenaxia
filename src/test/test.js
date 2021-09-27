function subsets(nums) {
  const res = []
  dfs(res, nums, [], 0)
  return res
};

function dfs(res, nums, cur, index) {
  if (index >= nums.length) {
    res.push(Array.from(cur))
    return
  }
  cur.push(nums[index])
  dfs(res, nums, cur, index + 1)
  cur.pop()
  dfs(res, nums, cur, index + 1)
}

console.log(subsets([1,2,3]))