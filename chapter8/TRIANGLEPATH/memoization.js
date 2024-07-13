const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(n, triangle) {
  // MAX_NUMBER: 한 칸에 들어갈 숫자의 최대치
  const MAX_NUMBER = 1000
  const cache = Array.from({ length: n }, 
    () => Array.from({ length: n },
        () => new Array(MAX_NUMBER * 100 + 1).fill(-1)
    )
  );
  // (y, x) 위치까지 내려오기 전에 만난 숫자들의 합이 sum 일 때
  // 맨 아래줄깢 내려가면서 얻을 수 있는 최대 경로를 반환한다.
  const path = (y, x, sum) => {
    // 기저 사례: 맨 아래 줄까지 도달했을 경우
    if (y === n - 1) return sum + triangle[y][x]
    // 메모이제이션
    if (cache[y][x][sum] !== -1) {
        // console.log('cached');
        return cache[y][x][sum];
    }
    sum += triangle[y][x];
    cache[y][x][sum] = Math.max(path(y + 1, x, sum), path(y + 1, x + 1, sum));
    return cache[y][x][sum]
  }
  return path(0, 0, 0);
}

console.log(solution(+n, arr.map(r => r.split(' ').map(Number))));

/**

    이 코드는 멀쩡해 보이지만 중대한 문제가 있다. 

        1. 사용해야 되는 메모리가 너무 크다. 배열의 크기가 입력으로 주어지는 숫자의 범위에 좌우 된다.

        2. path()가 특정 입력에 대해서는 완전 탐색처럼 동작한다. 경로마다 다 다른 합을 갖면 계산을 두 번 할일이 없으니 완전탐색과 다를바가 없다.
 */