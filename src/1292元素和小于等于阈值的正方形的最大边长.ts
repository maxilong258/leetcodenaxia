function maxSideLength(mat: number[][], threshold: number): number {
  let row = mat.length
  let col = mat[0].length
  let prefix: number[][] = []
  for (let i = 1; i <= col; i++) {
    for (let j = 1; j <= col; j++) {
      prefix[i][j] = prefix[i - 1][j] + prefix[i][j - 1] - prefix[i - 1][j - 1] + mat[i - 1][j - 1]
    }
  }
  let l = 0
  let r = Math.min(row, col)
  let res = 0
  while (l < r) {
    let mid = Math.floor(l + (r - l) / 2)
    let flag = false
    for (let i = 1; i + mid <= row + 1; i++) {
      for (let j = 1; j + mid <= col + 1; j++) {
        let temp = prefix[i + mid - 1][j + mid - 1] - prefix[i + mid - 1][j - 1] - prefix[i - 1][j + mid - 1] + prefix[i - 1][j - 1]
        if (temp <= threshold) {
          flag = true
        }
      }
    }
    if (flag) {
      l = mid
    } else {
      r = mid - 1
    }
  }
  return l
}

// class Solution {
//     public int maxSideLength(int[][] mat, int threshold) {
//         //二分查找
//         int row = mat.length, col = mat[0].length;
//         int[][] prefix = new int[row + 1][col + 1];
//         for (int i = 1; i <= row; ++i) {
//             for (int j = 1; j <= col; ++j) {
//                 prefix[i][j] = prefix[i - 1][j] + prefix[i][j - 1] - prefix[i - 1][j - 1] + mat[i - 1][j - 1];
//             }
//         }

//         int left = 0, right = Math.min(row, col), mid = 0, res = 0;
//         while (left < right) {
//             mid = left + right + 1 >> 1;
//             boolean flag = false;
//             for (int i = 1; i + mid <= row + 1; ++i) {
//                 for (int j = 1; j + mid <= col + 1; ++j) {
//                     int temp = prefix[i + mid - 1][j + mid - 1] - prefix[i + mid - 1][j - 1] - prefix[i - 1][j + mid - 1] + prefix[i - 1][j - 1];
//                     if (temp <= threshold) {
//                         flag = true;
//                     }
//                 }
//             }
//             if (flag) {
//                 left = mid;
//             } else {
//                 right = mid - 1;
//             }
//         }
//         return left;
//     }
// }