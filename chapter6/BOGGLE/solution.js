const filePath = require('path').join(__dirname, 'input')
const [nums, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

const [H, W, L] = nums.split(' ');
const board = arr
const word = arr.pop();

function solution (h, w, l, word, board) {
    const directions = [[-1, -1], [-1, 0], [-1, 1], [1, -1], [1, 0], [1, 1], [0, -1], [0, 1]];

    const findWord = (y, x, word) => {
        if (y < 0 || y >= h || x < 0 || x >= w) return false;
        if (board[y][x] !== word[0]) return false
        if (word.length === 1) return true

        for (let [dy, dx] of directions) {
            const ny = dy + y;
            const nx = dx + x;
            if (findWord(ny, nx, word.substring(1))) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < h; i ++) {
        for (let j = 0; j < w; j ++) {
            if (board[i][j] === word[0]) {
                if (findWord(i, j, word)) {
                    return true
                }
            }
        }
    }
    return false;
}
console.log(solution(+H, +W, +L, word, board));