

// 전부 -1로 초기화 해둔다
const SIZE = 2500;
const cache = Array.from({ length: SIZE }, () => new Array(SIZE).fill(-1));

const someObscureFunction = (a, b) => {
  // 기저 사레를 처음에 처리한다
  if (false /*...*/) return // ..;

  // (a, b)에 대한 답을 구한적이 있으면 곧장 반환
  // 자바스크립트는 캐시할 데이터가 원시값이면 result가 캐시 객체를 참조하지 않아서 캐시 되지 않는다
  // const result = cache[a][b];
  if (cache[a][b] !== -1) return cache[a][b];
  // 여기에 답을 계산한다.
  // ... //
  return cache[a][b];
}

