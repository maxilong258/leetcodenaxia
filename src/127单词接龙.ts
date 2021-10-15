function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  if (!wordList.find(item => item === endWord)) return 0
  if (!wordList.find(item => item === beginWord)) wordList.push(beginWord)
  const graph = constructGraph(wordList)
  const visited = new Set()
  const queue = []
  visited.add(beginWord)
  queue.push(beginWord)
  let cost = 1
  while (queue.length) {
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let cur = queue.shift()
      if (cur === endWord) return cost
      for (let nei of graph.get(cur) || []) {
        if (!visited.has(nei)) {
          visited.add(nei)
          queue.push(nei)
        }
      }
    }
    cost++
  }
  return 0
};

function constructGraph(wordList: string[]) {
  const graph = new Map
  for (let i = 0; i < wordList.length - 1; i++) {
    for (let j = i + 1; j < wordList.length; j++) {
      if (isOneDiff(wordList[i], wordList[j])) {
        if (graph.has(wordList[i])) graph.get(wordList[i]).push(wordList[j])
        else graph.set(wordList[i], [wordList[j]])
        if (graph.has(wordList[j])) graph.get(wordList[j]).push(wordList[i])
        else graph.set(wordList[j], [wordList[i]])
      }
    }
  }
  return graph
}

function isOneDiff(s1: string, s2: string) {
  let diff = 0
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) diff++
  }
  return diff === 1
}