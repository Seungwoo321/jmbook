const filePath = require('path').join(__dirname, 'input');
let [testCase, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution (n, h) {
    // h: 각 판자의 높이를 저장하는 배열
    // h[left..right] 구간에서 찾아낼 수 있는 가장 큰 사각형의 넓이를 반환한다.
    const solve = (left, right) => {
        // 기저 사례: 판자가 하나밖에 없는 경우
        if (left === right) return h[left];
        // [left, mid], [mid + 1, right] 두 두간으로 문제를 분할한다.
        let mid = Math.floor((left + right) / 2);
        // 분할한 문제를 각개격파
        let result = Math.max(solve(left, mid), solve(mid + 1, right));
        // 부분 문제3: 두 부분에 모두 걸치는 사각형 중 가장 큰 것을 찾는다.
        let lo = mid;
        let hi = mid + 1;
        let height = Math.min(h[lo], h[hi]);
        // [mid, mid + 1]만 포함하는 너비 2인 사각형을 고려한다.
        result = Math.max(result, height * 2);
        // 사각형이 입력 전체를 덮을 때까지 확장해 나간다.
        while (left < lo || hi < right) {
            // 항상 높이가 더 높은 쪽으로 확장한다.
            if (hi < right && (lo === left || h[lo - 1] < h[hi + 1])) {
                hi ++;
                height = Math.min(height, h[hi]);
            } else {
                lo --;
                height = Math.min(height, h[lo]);
            }
            // 확장한 후 사각형의 넓이
            result = Math.max(result, height * (hi - lo + 1));
        }
        return result;
    }
    return solve(0, n - 1)
}


while (testCase--) {
    console.log(solution(arr.shift(), arr.shift().split(' ').map(Number)))
}