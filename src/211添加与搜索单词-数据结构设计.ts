class WordDictionary {
  map: Map<number, string[]> | any
  constructor() {
    this.map = new Map()
  }

  addWord(word: string): void {
    let len = word.length
    if (this.map.has(len)) this.map.get(len).push(word)
    else this.map.set(len, [word])
  }

  search(word: string): boolean {
    let len = word.length
    if (!this.map.has(len)) return false
    let c1: string
    let c2: string 
    for (let w of this.map.get(len)) { 
      let flag = true
      for (let i = 0; i < len; i++) {
        c1 = w.charAt(i)
        c2 = word.charAt(i)
        if (c1 !== '.' && c2 !== '.' && c1 !== c2) {
          flag = false
          break
        }
      }
      if (flag) return true
    }
    return false
  }
}