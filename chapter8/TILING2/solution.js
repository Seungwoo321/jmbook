
function solution (n) {
    const MOD = 10007
    const tiling = (width, cache = {}) => {
        // 기저 사례: width가 1이하일 때
        if (width <= 1) return 1;
        // 메모이제이션
        if (!cache[width]) cache[width] = -1;
        if (cache[width] !== -1) {
            // console.log('cached')
            return cache[width];
        }
        cache[width] = (tiling(width - 2, cache) + tiling(width - 1, cache)) % MOD;
        return cache[width];
    }
    return tiling(n);
}

export {
    solution
}