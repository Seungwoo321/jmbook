const filePath = require('path').join(__dirname, 'input');
let [testCase, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution (n, h) {
    // 판자의 높이를 담은 배열 h[]가 주어질 때 사각형의 최대 너비를 반환한다.
    const bruteForce = (h) => {
        let result = 0;
        // 가능한 모든 left, right 조합을 순회한다.
        for (let left = 0; left < n; left ++) {
            let minHeight = h[left];
            for (let right = left; right < n; right ++) {
                minHeight = Math.min(minHeight, h[right]);
                result = Math.max(result, (right - left + 1) * minHeight)
            }
        }
        return result;
    
    }
    return bruteForce(h)
}


while (testCase--) {
    console.log(solution(arr.shift(), arr.shift().split(' ').map(Number)))
}

