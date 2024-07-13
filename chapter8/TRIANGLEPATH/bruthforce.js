const filePath = require('path').join(__dirname, 'input2');
const [n, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution (n, triangle) {
  const path = (y, x, sum) => {
    if (y === n - 1) return sum + triangle[y][x]
    return Math.max(path(y + 1, x, sum + triangle[y][x]), path(y + 1, x + 1, sum + triangle[y][x]))
  }
  return path(0, 0, 0);
}

console.log(solution(+n, arr.map(r => r.split(' ').map(Number))));