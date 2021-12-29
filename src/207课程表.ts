function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const indegree = new Array(numCourses).fill(0)
  for (let item of prerequisites) {
    indegree[item[0]]++
  }
  const queue = []
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i)
  }
  while (queue.length) {
    let curr = queue.shift()
    for (let item of prerequisites) {
      if (indegree[item[0]] === 0) continue
      if (item[1] === curr) indegree[item[0]]--
      if (indegree[item[0]] === 0) queue.push(item[0])
    }
  }
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] !== 0) return false
  }
  return true
}