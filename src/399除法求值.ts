class Pair {
  index: number;
  value: number;
  constructor(index: number, value: number) {
    this.index = index
    this.value = value
  }
}

function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
  let nvars = 0
  const variables = new Map()
  let n = equations.length
  for (let i = 0; i < n; i++) {
    if (!variables.has(equations[i][0])) variables.set(equations[i][0], nvars++)
    if (!variables.has(equations[i][1])) variables.set(equations[i][1], nvars++)
  }
  const edges = new Array(nvars)
  for (let i = 0; i < nvars; i++) {
    edges[i] = new Array()
  }
  for (let i = 0; i < n; i++) {
    let va = variables.get(equations[i][0])
    let vb = variables.get(equations[i][1])
    edges[va].push(new Pair(vb, values[i]))
    edges[vb].push(new Pair(va, 1 / values[i]))
  }
  let queriesCount = queries.length
  const ret = new Array(queriesCount)
  for (let i = 0; i < queriesCount; i++) {
    const query = queries[i]
    let result = -1
    if (variables.has(query[0]) && variables.has(query[1])) {
      let ia = variables.get(query[0])
      let ib = variables.get(query[1])
      if (ia === ib) result = 1
      else {
        const points = new Array()
        points.push(ia)
        const ratios = new Array(nvars).fill(-1)
        ratios[ia] = 1

        while (points.length && ratios[ib] < 0) {
          let x = points.pop()
          for (let pair of edges[x]) {
            let y = pair.index
            let val = pair.value
            if (ratios[y] < 0) {
              ratios[y] = ratios[x] * val
              points.push(y)
            }
          }
        }
        result = ratios[ib]
      }
    }
    ret[i] = result
  }
  return ret
};