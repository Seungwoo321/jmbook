const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');


function solution (str) {
    const BIT = 32
    const decompressed = Array.from({ length: BIT }, () => new Array(BIT).fill(''));
    let it = 0;
    const decompress = (y, x, size) => {

        // 한 글자를 검사 할 때마다 반복자를 한 칸 앞으로 옮긴다.
        let head = str[it++];

        if (head === 'b' || head === 'w') {
            for (let dy = 0; dy < size; dy++) {
                for (let dx = 0; dx < size; dx++) {
                    decompressed[y + dy][x + dx] = head;
                }
            }
        } else if (head === 'x') {
            // 네 부분을 각각 순서대로 압축 해제한다.
            let half = size / 2;
            decompress(y, x, half);
            decompress(y, x + half, half);
            decompress(y + half, x, half);
            decompress(y + half, x + half, half);
        }
        
    }
    decompress(0, 0, BIT)
    return decompressed.map(r => r.join('')).join('\n')
}


for (let i = 0; i < +n; i ++ ) {
    console.log(solution(arr[i]))
    console.log()
}