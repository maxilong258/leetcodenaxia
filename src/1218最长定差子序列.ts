function longestSubsequence(arr: number[], difference: number): number {
  let res = 0;
  const dp = new Map();
  for (const v of arr) {
    dp.set(v, (dp.get(v - difference) || 0) + 1);
    res = Math.max(res, dp.get(v));
  }
  return res;
};