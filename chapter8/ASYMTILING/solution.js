
function solution (n) {
  const MOD = 1000000007;

  const tiling = (width, cache = {}) => {
    if (width <= 1) return 1;
    if (!cache[width]) cache[width] = -1;
    if (cache[width] !== -1) {
      // console.log('cached');
      return cache[width];
    }
    cache[width] = (tiling(width - 2, cache) + tiling(width - 1, cache)) % MOD;
    return cache[width];
  }
  // 2 * width 크기의 사각형을 채우는 비대칭 방법의 수를 반환한다.
  const asymmetric = (width) => {
    if (width % 2 === 1) {
      return (tiling(width) - tiling(width / 2) + MOD) % MOD;
    }

    let result = tiling(width);
    result = (result - tiling(width / 2) + MOD) % MOD;
    result = (result - tiling((width / 2) - 1) + MOD) % MOD;
    return result;
  }
  return asymmetric(n)
}

export {
    solution
}