const filePath = require('path').join(__dirname, 'input');
const [n, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution(n, arr) {
    const cache = new Array(n + 1).fill(-1);
    // S[start] 에서 시작하는 증가 부분 수열 중 최대 길이를 반환한다.
    const lis = (start) => {
        let result = cache[start + 1];
        if (result !== -1) return result
        // 항상 S[start]는 있기 때문에 길이는 최하 1
        result = 1
        for (let next = start + 1; next < n; next++) {
            if (start === -1 || arr[start] < arr[next]) {
                result = Math.max(result, lis(next) + 1)
            }
        }
        return result;
    }
    // 항상 증가 부분 수열의 시작 위치를 지정해줘야 하는 코드를 제거하기 위해서
    // arr[-1] 을 -Infinity 값이라고 가정하면 모든 시작 위치를 자동으로 시도하게 된다.
    // arr[-1] 은 가상으로 추가한 입력값이므로 최종 반환 값에서 빼준다.
    return lis(-1) - 1

}

console.log(solution(+n, arr.split(' ').map(Number)));