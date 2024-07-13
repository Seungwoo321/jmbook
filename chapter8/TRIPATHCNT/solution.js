
function solution(n, arr) {
    const triangle = arr.map(r => r.split(' ').map(Number));
    const cache = Array.from({ length: n }, () => new Array(n).fill(-1));
    const path = (y, x) => {
      if (y === n - 1) return triangle[y][x];
      if (cache[y][x] !== -1) return cache[y][x];
      cache[y][x] = Math.max(path(y + 1, x), path(y + 1, x + 1)) + triangle[y][x];
      return cache[y][x]
    }
    const countCache = Array.from({ length: n }, () => new Array(n).fill(-1));
    const count = (y, x) => {
      if (y === n - 1) return 1;
      if (countCache[y][x] !== -1) {
        console.log(countCache)
        return countCache[y][x];
      }
      countCache[y][x] = 0;
      // countCache[y][x] += Math.max(path(y + 1, x + 1), path(y + 1, x))
      if (path(y + 1, x + 1) >= path(y + 1, x)) {
          countCache[y][x] += count(y + 1, x + 1)
      }
      if (path(y + 1, x + 1) <= path(y + 1, x)) {
          countCache[y][x] += count(y + 1, x)
      }
      return countCache[y][x]
    }
    return count(0, 0)
}

export {
    solution
}