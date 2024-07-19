
// n: 지도에 포함된 마을의 수
// d: 탈출 후 지금까지 지난 일수
// p: 교도소가 있는 마을의 번호
// grid: 마을, A[i][j]가 1인 경우 i번 마을에서 j번 마을을 잇는 산길이 있음
// t: 정수로 확률을 계산할 마을의 수

// q: 정수로 확률을 계산할 마을의 번호 
function solution2([n, d, p], connected, t, q) {
  // cache[][]는 -1로 초기화해 둔다.
  let cache = Array.from({ length: 51 }, () => new Array(101).fill(-1));
  // deg[i] = 마을 i 와 연결된 마을의 개수
  const deg = connected.map(arr => arr.filter(v => v).length)

  // days일째에 here번 마을에 숨어 있다고 가정하고,
  // 마지막 날에 q번 마을에 숨어 있을 조건부 확률을 반환한다.
  const search2 = (here, days, qq) => {
    // 기저 사례: d일이 지난 경우
    if (days === d) return here === qq ? 1.0 : 0.0
    // 메모이제이션 
    let result = cache[here][days]
    if (result > -0.5) return result
    cache[here][days] = 0.0
    for (let there = 0; there < n; there ++) {
      if (connected[here][there]) {
        cache[here][days] += search2(there, days + 1, qq) / deg[here]
      }
    }
    return cache[here][days]
  }
  let answer = ''
  for (let i = 0; i < t; i++) {
    cache = cache.map(r => r.fill(-1))
    answer += search2(p, 0, q[i]).toPrecision(8) + ' '
  }
  return answer.trim()
}
// => search2(here, days) = 두니발 박사가 days 일째에 here번 마을에 숨어 있을 때, 마지막 날에 q번 마을에 있을 조건부 확률을 반환한다.

export {
  solution2
}