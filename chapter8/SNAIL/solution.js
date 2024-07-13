
// 달팽이가 지금까지 days일 동안 climbed미터를 기어올라 왔을 때 m일 전까지 n미터 이상 기어올라갈 수 있을 확률
function solution(n, m) {
  const cache = Array.from({ length: m + 1 }, () => new Array((2 * m) + 1).fill(-1));
  const climb = (days, climbed) => {
    if (days === m) return climbed >= n ? 1 : 0;
    if (cache[days][climbed] !== -1) {
      // console.log('cached');
      return cache[days][climbed];
    }
    cache[days][climbed] = (0.25 * climb(days + 1, climbed + 1)) + (0.75 * climb(days + 1, climbed + 2));
    return cache[days][climbed];
  }
  return climb(0, 0)
}

export {
  solution
}

// console.log(solution(5, 4)) // 0.99609375
// console.log(solution(5, 3)) // 0.84375
// console.log(solution(4, 2)) // 0.5625
// console.log(solution(3, 2)) // 0.9375
