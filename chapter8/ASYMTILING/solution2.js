
function solution2 (n) {
  const MOD = 1000000007;

  const tiling = (width, cache = {}) => {
    if (width <= 1) return 1;
    if (!cache[width]) cache[width] = -1;
    if (cache[width] !== -1) {
      // console.log('tiling cached')
      return cache[width];
    }
    cache[width] = (tiling(width - 2, cache) + tiling(width - 1, cache)) % MOD;
    return cache[width];
  }
  // 2 * width 크기의 사각형을 채우는 비대칭 방법의 수를 반환한다.
  const asymmetric = (width, cache = {}) => {
    // 기저 사례: 너비가 2 이하인 경우
    if (width <= 2) return 0;
    // 메모이제이션
    if (!cache[width]) cache[width] = -1;
    if (cache[width] !== -1) {
      // console.log('asymmetric cached')
      return cache[width];
    }
    let result = cache[width];
    result = asymmetric(width - 2, cache) % MOD;
    result = (result + asymmetric(width - 4, cache)) % MOD;
    result = (result + tiling(width - 3)) % MOD;
    result = (result + tiling(width - 3)) % MOD;
    cache[width] = result;
    return result;
    
  }
  return asymmetric(n)
}

export {
    solution2
}