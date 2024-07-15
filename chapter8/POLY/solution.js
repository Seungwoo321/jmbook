
function solution (n) {
  const MOD = 10 * 1000 * 1000;
  const cache = Array.from({ length: n + 1}, () => new Array(n + 1).fill(-1));
  // n개의 정사각형으로 이루어졌고, 맨 위 가로줄에 first개의
  // 정사각형을 포함하는 폴리오미노의 수를 반환한다.
  const poly = (n, first) => {
    // 기저 사례: n === first
    if (n === first) return 1;
    // 메모이제이션
    if (cache[n][first] !== -1) return cache[n][first];

    cache[n][first]= 0;
    for (let second = 1; second <= n - first; second ++) {
      let add = second + first - 1;
      add *= poly(n - first, second);
      add %= MOD; 
      cache[n][first] += add;
      cache[n][first] %= MOD;
    }
    return cache[n][first];
  }
  let result = 0;
  for (let i = 1; i <= n; i ++) {
    result += poly(n, i);
    result %= MOD;
  }
  return result;
}

export {
  solution
}