function groupAnagrams(strs: string[]): string[][] {
  const map = new Map()
  for (let i = 0; i < strs.length; i++) {
    let asc = strs[i].split('').map(item => item.charCodeAt(0)).sort().join('')
    if (!map.has(asc)) map.set(asc, [strs[i]])
    else map.get(asc).push(strs[i])
  }
  return Array.from(map.values())
}