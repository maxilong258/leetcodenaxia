// function replaceSpace(s: string): string {
//   return s.replace(/ /g, '%20')
// }

function replaceSpace(s: string): string {
  let res = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      res += s[i]
    } else {
      res += '%20'
    }
  }
  return res
}