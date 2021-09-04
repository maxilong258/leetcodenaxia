var solution = function(isBadVersion: any) {

  return function(n: number): number {
      let l = 0
      let r = n
      while (l < r) {
        let m = Math.floor(l + (r - l) / 2)
        if (isBadVersion(m)) {
          r = m
        } else {
          l = m + 1
        }
      }
      return l
  };
};