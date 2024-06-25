const filePath = require('path').join(__dirname, 'input');
let [testCase, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const karatsuba = require('./karatsuba')

function solution (arr1, arr2) {
    const hug = (members, fans) => {
        let n = members.length;
        let m = fans.length;
        const A = new Array(n).fill(0);
        const B = new Array(m).fill(0);
        for (let i = 0; i < n; i ++) {
            A[i] = +(members[i] === 'M')

        }
        for (let i = 0; i < m; i ++) {
            B[m - i - 1] = +(fans[i] === 'M');
        }
        const C = karatsuba(A, B);
        let allHugs = 0;
        for (let i = n - 1; i < m; i ++) {
            if (C[i] === 0) {
                allHugs ++;
            }
        }
        return allHugs;
    }
    return hug(arr1, arr2)
}

while (testCase--) {
    console.log(solution(arr.shift(), arr.shift()));
}

