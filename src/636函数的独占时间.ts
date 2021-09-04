function exclusiveTime(n: number, logs: string[]): number[] {
  const res = new Array(n).fill(0);  // 按函数个数分别记录事件
  const stack: any[] = [];  // 记录栈
  // 遍历logs
  logs.forEach(log => {
    const item = log.split(':');
    // 分别取得函数key、函数状态（开始 / 结束）、位置
    const [key, state, index] = [parseInt(item[0]), item[1], parseInt(item[2])];
    if (state === 'start') {
      // 如果栈中至少有一个记录
      if (stack.length) {
        // 栈中最后一条记录的函数key和位置
        const [lastKey, lastIndex] = stack[stack.length - 1];
        // 将该记录对应的函数计时结果加上当前求得的时间
        res[lastKey] += index - lastIndex;
      }
      // 将当前函数的key和起始位置存入栈中
      stack.push([key, index]);
    } else {
      // 如果是end状态，则先从栈中弹出最后一条记录，获得其记录的位置（此位置代表当前函数开始运行的起始位置）
      const [lastKey, lastIndex] = stack.pop();
      // 将当前要结束的函数计时结果加上当前求得的时间，注意加一
      res[key] += index - lastIndex + 1;
      // 如果此时栈中还有剩余记录，则将栈中最后一条记录中位置的值更新为当前结束位置的下一位，代表下一个函数的起始位置
      if (stack.length) stack[stack.length - 1][1] = index + 1;
    }
  });
  return res;
}