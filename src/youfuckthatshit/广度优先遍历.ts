const data = [
  {
    name: 'a',
    children: [
      { name: 'b', children: [{ name: 'e' }] },
      { name: 'c', children: [{ name: 'f' }] },
      { name: 'd', children: [{ name: 'g' }] },
    ],
  },
  {
    name: 'a2',
    children: [
      { name: 'b2', children: [{ name: 'e2' }] },
      { name: 'c2', children: [{ name: 'f2' }] },
      { name: 'd2', children: [{ name: 'g2' }] },
    ],
  }
]
interface aa {
  name: string
  children: aa[]
}

function getName2(data: aa[]) {
  let result: string[] = [];
  let queue = data;
  while (queue.length > 0) {
    [...queue].forEach(child => {
      queue.shift();
      result.push(child.name);
      child.children && (queue.push(...child.children));
    });
  }
  return result.join(',');
}

console.log(getName2(data))