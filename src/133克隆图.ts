class Node133 {
  val: number
  neighbors: Node133[] | any
  constructor(val?: number, neighbors?: Node133[]) {
    this.val = (val===undefined ? 0 : val)
    this.neighbors = (neighbors===undefined ? [] : neighbors)
  }
}

const visited = new	Map()
function cloneGraph(node: Node133 | null): Node133 | null {
  if (node === null) return node
  if (visited.has(node)) return visited.get(node)
  const cloneNode = new Node133(node.val, new Array())
  visited.set(node, cloneNode)
  for (let nei of node.neighbors) {
    cloneNode.neighbors.push(cloneGraph(nei))
  }
  return cloneNode
};
