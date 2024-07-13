
// 달팽이가 m일 전까지 n미터 이상 기어오를 수 있는 경우의 수로 바꿔서 풀 수 있다.

function solution (n, m) {
  const cache = Array.from({ length: m + 1 }, () => new Array((2 * m) + 1).fill(-1));
  // 달팽이가 days일 동안 climbed미터를 기어올라 왔다고 할 때,
  // m일 전까지 n미터를 기어올라갈 수 있는 경우의 수
  const climb = (days, climbed) => {
    // 기저 사례: m일이 모두 지난 경우
    if (days === m) return climbed >= n ? 1 : 0;
    // 메모이제이션
    if (cache[days][climbed] !== -1) {
      // console.log('cached');
      return cache[days][climbed];
    }
    cache[days][climbed] = climb(days + 1, climbed + 1) + climb(days + 1, climbed + 2);
    return cache[days][climbed];
  }
  // console.log(climb(0, 0) + '/' + 2 ** m + '=' + climb(0, 0) / (2 ** m))
  return climb(0, 0) / (2 ** m)
}

console.log(solution(3, 2)) // = 0.75
console.log(solution(3, 3)) // 8/8 = 1
console.log(solution(3, 5)) // 32/32 = 1
console.log(solution(4, 3)) // 7/8 = 0.875
console.log(solution(5, 3)) // 4/8 = 0.5
console.log(solution(5, 4)) // = 0.9375
console.log(solution(5, 5)) // 32/32 = 1
console.log(solution(6, 4)) // = 0.6875
console.log(solution(7, 4)) // 5/16 = 0.3125
console.log(solution(10, 5)) // 1/32 = 0.03125
console.log(solution(12, 8)) // 163/256 = 0.63671875