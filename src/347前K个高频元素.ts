function topKFrequent(nums: number[], k: number): number[] {
  var map = new Map()
  var len = nums.length
  for (var i = 0; i < len; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)
  }
  return [...map]
    .sort((a, b) => b[1] - a[1])
    .filter((v, i) => i < k)
    .map(v => v[0])
}

//更快的是使用堆排序 自己封装的堆好像还没有sort函数快。。。
