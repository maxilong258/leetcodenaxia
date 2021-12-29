// dfs 回溯
function combinationSum(candidates: number[], target: number): number[][] {
  let len = candidates.length
  const res = new Array()
  if (len === 0) return res
  const path = new Array()
  dfs(0, len, target)
  return res
  function dfs(begin: number, end: number, target: number) {
    if (target < 0) return
    if (target === 0) {
      res.push(Array.from(path))
      return
    }
    for (let i = begin; i < len; i++) {
      path.push(candidates[i])
      dfs(i, len, target - candidates[i])   
      path.pop()
    }
  }
}
// // dfs 回溯 剪枝
// function combinationSum(candidates: number[], target: number): number[][] {
//   let len = candidates.length
//   const res = []
//   if (len === 0) return res
//   const path = []
//   candidates.sort((a, b) => a - b)
//   dfs(0, len, target)
//   return res
//   function dfs(start: number, end: number, target: number) {
//     if (target === 0) {
//       res.push(Array.from(path))
//       return
//     }
//     for (let i = start; i < end; i++) {
//       if (target - candidates[i] < 0) break
//       path.push(candidates[i])
//       dfs(i, end, target - candidates[i])
//       path.pop()
//     }
//   }
// }