const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution(n, triangle) {
    const cache = Array.from({ length: n }, () => new Array(n).fill(-1));
    const path = (y, x) => {
        if (y === n - 1) return triangle[y][x];
        let result = cache[y][x]
        if (result !== -1) return result;
        return result = Math.max(path(y + 1, x), path(y + 1, x + 1)) + triangle[y][x];
    }
    return path(0, 0, 0);

}

console.log(solution(+n, arr.map(r => r.split(' ').map(Number))));