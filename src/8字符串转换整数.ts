function myAtoi(s: string): number {
  let target = parseInt(s.trim()) || 0;
  if (target >= (Math.pow(2, 31) - 1)) return Math.pow(2, 31) - 1;
  if (target <= Math.pow(-2, 31)) return Math.pow(-2, 31);
  return target;
}

// ......