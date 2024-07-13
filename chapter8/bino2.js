
const SIZE = 10000;

const cache = Array.from({ length: SIZE }, () => new Array(SIZE).fill(-1));

const bino2 = (n, r) => {
  // 기저 사례
  if (r === 0 || n === r) return 1;
  // -1이 아니라면 한 번 계산했던 값이니 곧장 반환
  if (cache[n][r] !== -1) {
    return cache[n][r];
  }
  // 직접 계산한 뒤 배열 저장
  cache[n][r] = bino2(n - 1, r - 1) + bino2(n - 1, r);
  return cache[n][r]
}
console.log(bino2(120, 3))