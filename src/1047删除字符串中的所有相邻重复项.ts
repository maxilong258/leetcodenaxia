function removeDuplicates1047(s: string): string {
  const stack: string[] = []
  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0 || stack[stack.length - 1] !== s[i]) {
      stack.push(s[i])
    } else {
      stack.pop()
    }
  }
  return stack.join('')
};                                                                                                                                                                      

//双指针方法
// function removeDuplicates(s: string): string {
//   let i = 0
//   let j = 0
//   const arr = s.split('')
//   while (j < arr.length) {
//     arr[i] = arr[j]
//     if (i > 0 && arr[i - 1] === arr[i]) i -= 2
//     j++
//     i++
//   }
//   return arr.slice(0, i).join('')
// };