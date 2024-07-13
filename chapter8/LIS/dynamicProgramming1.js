const filePath = require('path').join(__dirname, 'input');
const [n, arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(n, arr) {
  const cache = new Array(n).fill(-1);
  // S[start] 에서 시작하는 증가 부분 수열 중 최대 길이를 반환한다.
  const lis = (start) => {
    if (cache[start] !== -1) {
      // console.log('cached');
      return cache[start];
    }
    // 항상 S[start]는 있기 때문에 길이는 최하 1
    cache[start] = 1
    for (let next = start + 1; next < n; next ++) {
      if (arr[start] < arr[next]) {
        cache[start] = Math.max(cache[start], lis(next) + 1);
      }
    }
    return cache[start];
  }
  // 항상 증가 부분 수열의 시작 위치를 지정해줘야 한다.
  let maxLen = 0;
  for (let begin = 0; begin < n; begin ++) {
    maxLen = Math.max(maxLen, lis(begin));
  }
  return maxLen;

}

console.log(solution(+n, arr.split(' ').map(Number)));