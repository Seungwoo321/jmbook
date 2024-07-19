
// n: 지도에 포함된 마을의 수
// d: 탈출 후 지금까지 지난 일수
// p: 교도소가 있는 마을의 번호
// grid: 마을, A[i][j]가 1인 경우 i번 마을에서 j번 마을을 잇는 산길이 있음
// t: 정수로 확률을 계산할 마을의 수

// q: 정수로 확률을 계산할 마을의 번호 
function solution3([n, d, p], connected, t, q) {
  const deg = connected.map(arr => arr.filter(v => v).length)
  let cache = Array.from({ length: 51 }, () => new Array(101).fill(-1));

  const search3 = (here, days) => {
    // 기저 사례: 0일째
    if (days === 0) return (here === p ? 1.0 : 0.0)
    // 메모이제이션
    let result = cache[here][days]
    if (result > -0.5) return result
    cache[here][days] = 0.0
    for (let there = 0; there < n; there ++) {
      if (connected[here][there]) {
        cache[here][days] += search3(there, days - 1) / deg[there]
      }
    }
    return cache[here][days]
  }

  let answer = ''
  for (let i = 0; i < t; i++) {
    answer += search3(q[i], d).toPrecision(8) + ' '
  }
  return answer.trim()
}
// => T개의 실수로 각 마을에 두니발 박사가 숨어 있을 확률을 출력 

export {
  solution3
}