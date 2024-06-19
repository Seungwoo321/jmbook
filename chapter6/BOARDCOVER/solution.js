const filePath = require('path').join(__dirname, 'input');
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

const tests = +input.shift()

function solution (h, w, arr) {
    const visited = Array.from({ length: h }, () => new Array(w).fill(0));
    for (let i = 0; i < h; i ++) {
        for (let j = 0; j < w; j ++) {
            visited[i][j] = +(arr[i][j] === '#');
        }
    }
    // console.log(h, w, '\n' + visited.map(r => r.join(' ')).join('\n'))
    // 주어진 칸을 덮을 수 있는 4가지 방법
    const coverType = [
        [[0, 0], [1, 0], [0, 1]],
        [[0, 0], [0, 1], [1, 1]],
        [[0, 0], [1, 0], [1, 1]],
        [[0, 0], [1, 0], [1, -1]]
    ];
    // 겹치거나 검은 칸을 덮을 때 false를 반환한다.
    const set = (board, y, x, type, delta) => {
        let ok = true;
        for (let i = 0; i < 3; i ++) {
            const [dy, dx] = coverType[type][i];
            const ny = dy + y;
            const nx = dx + x;
            if (ny < 0 || ny >= h || nx < 0 || nx >= w) {
                ok = false
            } else if ((board[ny][nx] += delta) > 1)  {
                ok = false;
            }
        }
        return ok
    }

    const cover = (board) => {
        // 아직 채우지 못한 칸 중 가장 윗줄 왼쪽에 있는 칸을 찾는다.
        let y = -1;
        let x = -1;
        for (let i = 0; i < h; i ++) {
            for (let j = 0; j < w; j ++) {
                if (!board[i][j]) {
                    y = i;
                    x = j;
                    break;
                }
            }
            if (y !== -1) break;
        }
        // 기저 사례: 모든 칸을 채웠으면 1을 반환한다
        if (y === -1) return 1;
        let result = 0;
        for (let type = 0; type < 4; type ++) {
            if (set(board, y, x, type, 1)) {
                result += cover(board);
            }
            // 덮었던 블록을 치운다
            set(board, y, x, type, -1)
        }
        return result;
    }
    return cover(visited)
}

for (let i = 0; i < tests; i ++) {
    const [H, W] = input[i].split(' ');
    console.log(solution(+H, +W, input.splice(i + 1, +H)));
}