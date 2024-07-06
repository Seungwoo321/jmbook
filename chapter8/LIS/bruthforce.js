const filePath = require('path').join(__dirname, 'input');
const [n, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution (n, arr) {
    // 기저사례 arr가 텅 비어 있을 때
    const lis = (a) => {
        if (!a.length) return 0;
        let result = 0;
        for (let i = 0; i < a.length; i++) {
            const b = [];
            for (let j = i + 1; j < a.length; j++) {
                if (a[i] < a[j]) {
                    b.push(a[j]);
                }
            }
            result = Math.max(result, 1 + lis(b))
        }
        return result;
    }
    return lis(arr)

}

console.log(solution(+n, arr.split(' ').map(Number)));