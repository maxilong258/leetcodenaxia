function isNumber(s: string): boolean {
  return /^ *[\+\-]?((\d+|\.\d+|\d+\.\d+)(\.?(e|E)[\+\-]?\d+)?|\d+\.((e|E)[\+\-]?\d+)?) *$/.test(s)
}

//正则，永远的痛