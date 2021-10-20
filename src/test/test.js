class WordDictionary {
  map
  constructor() {
    this.map = new Map()
  }

  addWord(word) {
    let len = word.length
    if (this.map.has(len)) this.map.get(len).push(word)
    else this.map.set(len, [word])
    console.log(this.map)
  }

  search(word) {
    let len = word.length
    if (!this.map.has(len)) return false
    let c1
    let c2 
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
const a = new WordDictionary()
a.addWord('bad')
a.addWord('dad')
a.addWord('mad')
a.search('pad')
a.search('.ad')
a.search('b..')