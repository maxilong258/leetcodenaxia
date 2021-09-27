function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  if (!wordList.find(item => item === endWord)) return 0
  if (!wordList.find(item => item === beginWord)) wordList.push(beginWord)
  const graph = constructGraph(wordList)
  console.log(graph)
  const visited = new Set()
  const queue = []
  visited.add(beginWord)
  queue.push(beginWord)
  let cost = 1
  while (queue.length) {
    let size = queue.length
    for (let i = 0; i < size; i++) {
      let cur: any = queue.shift()
      if (cur === endWord) return cost
      const neighbors = graph.get(cur) || []
      console.log(neighbors)
      for (let neighbor of neighbors) {

        if (!visited.has(neighbor)) {
          visited.add(neighbor)
          queue.push(neighbor)
        }
      }
    }
    cost++
  }
  return 0
};

function constructGraph(wordList: string[]) {
  const graph = new Map()
  for (let i = 0; i < wordList.length - 1; i++) {
    for (let j = i + 1; j < wordList.length; j++) {
      let w1 = wordList[i]
      let w2 = wordList[j]
      if (oneChangeAway(w1, w2)) {
        if (graph.get(w1)) graph.get(w1).push(w2)
        else graph.set(w1, new Array(1).fill(w2))
        if (graph.get(w2)) graph.get(w2).push(w1)
        else graph.set(w2, new Array(1).fill(w1))
      }
    }
  }
  return graph
}

function oneChangeAway(w1: string, w2: string) {
  let diff = 0
  for (let i = 0; i < w1.length; i++) {
    let c1 = w1.charAt(i)
    let c2 = w2.charAt(i)
    if (c1 !== c2) {
      diff++
    }
  }
  return diff === 1
}