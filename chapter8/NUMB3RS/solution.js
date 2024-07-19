
// n: 지도에 포함된 마을의 수
// d: 탈출 후 지금까지 지난 일수
// p: 교도소가 있는 마을의 번호
// grid: 마을, A[i][j]가 1인 경우 i번 마을에서 j번 마을을 잇는 산길이 있음
// t: 정수로 확률을 계산할 마을의 수

// q: 정수로 확률을 계산할 마을의 번호 
function solution ([n, d, p], connected, t, q) {
  const deg = connected.map(arr => arr.filter(v => v).length)
  const search = (path, qq) => {
    // 기저 사례: d일이 지난 경우
    if (path.length === d + 1) {
      // 이 시나리오가 q에서 끝나지 않는다면 무효
      if (path[path.length - 1] !== qq) {
        return 0.0;
      }
      // path의 출현 확률을 계산한다.
      let result = 1.0;
      for (let i = 0; i + 1 < path.length; i ++) {
        result /= deg[path[i]];
      }
      return result;
    }
    let result = 0;
    // 경로의 다음 위치를 결정한다.
    for (let there = 0; there < n; there ++) {
      if (connected[path[path.length - 1]][there]) {
        path.push(there);
        result += search(path, qq)
        path.pop();
      }
    }
    return result
  }
  let answer = ''
  for (let i = 0; i < t; i ++) {
    answer += search([p], q[i]).toPrecision(8) + ' '
  }
  return answer.trim()
}
// => T개의 실수로 각 마을에 두니발 박사가 숨어 있을 확률을 출력 

export {
  solution
}