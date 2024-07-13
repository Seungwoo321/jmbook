const filePath = require('path').join(__dirname, 'input2');
const [n, ...board] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution (n, board) {
  const cache = Array.from({ length: n }, () => new Array(n).fill(-1));
  const jump = (y ,x) => {
    // 기저 사례 처리
    if (y >= n || x >= n) return 0;
    if (y === n - 1 && x === n - 1) return 1;
    if (cache[y][x] !== -1) {
      // console.log('cached')
      return cache[y][x];
    }
    const jumpSize = board[y][x];
    cache[y][x] = jump(y + jumpSize, x) || jump(y, x + jumpSize);
    return cache[y][x];
  }
  return jump(0, 0);

}

console.log(solution(+n, board.map(r => r.split(' ').map(v => v === 'END' ? v : +v))));