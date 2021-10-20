const info = {name: 'why', age: 18, friend: {name: 'kobe'}}

//浅拷贝
const obj = Object.assign({}, info)

//深拷贝1
const obj1 = JSON.parse(JSON.stringify(info))

//深拷贝2
// 深拷贝
function deepClone(obj = {}) {
  if (typeof obj !== "object" || obj == null) return obj
  let result
  if (obj instanceof Array) result = []
  else result = {}
  for (let key in obj)
    if (obj.hasOwnProperty(key)) result[key] = deepClone(obj[key])
  return result
}