const filePath = require('path').join(__dirname, 'input');
const [n, ...board] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution (n, board) {

  const jump = (y ,x) => {
    // 기저 사례: 게임판 밖을 벗어난 경우
    if (y >= n || x >= n) return false;
    // 기저 사례: 마지막 칸에 도착한 겨우
    if (y === n - 1 && x === n - 1) return true;

    let jumpSize = board[y][x];
    return jump(y + jumpSize, x) || jump(y, x + jumpSize);
  }
  return jump(0, 0)

}

console.log(solution(+n, board.map(r => r.split(' ').map(v => v === 'END' ? v : +v))))