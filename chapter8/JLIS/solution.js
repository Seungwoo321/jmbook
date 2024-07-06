const filePath = require('path').join(__dirname, 'input');
let [testCases, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function soluiton (n, m, A, B) {
    const cache = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(-1));
    const jlis = (indexA, indexB) => {
        let result = cache[indexA + 1][indexB + 1];
        if (result !== -1) return result;
        result = 2;
        let a = indexA === -1 ? -Infinity : A[indexA];
        let b = indexB === -1 ? -Infinity : B[indexB];
        let maxElement = Math.max(a, b);

        for (let nextA = indexA + 1; nextA < n; nextA ++) {
            if (maxElement < A[nextA]) {
                result = Math.max(result, jlis(nextA, indexB) + 1);
            }
        }
        for (let nextB = indexB + 1; nextB < m; nextB ++) {
            if (maxElement < B[nextB]) {
                result = Math.max(result, jlis(indexA, nextB) + 1);
            }
        }
        return result;
    }

    return jlis(-1, -1) - 2;

}

while (testCases --) {
    const [n, m] = arr.shift().split(' ').map(Number);
    const a = arr.shift().split(' ').map(Number);
    const b = arr.shift().split(' ').map(Number);
    console.log(soluiton(n, m, a, b))
}