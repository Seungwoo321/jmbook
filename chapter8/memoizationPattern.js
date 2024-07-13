

// 전부 -1로 초기화 해둔다
const SIZE = 2500;
const cache = Array.from({ length: SIZE }, () => new Array(SIZE).fill(-1));

const someObscureFunction = (a, b) => {
  // 기저 사레를 처음에 처리한다
  if (false /*...*/) return // ..;

  // (a, b)에 대한 답을 구한적이 있으면 곧장 반환
  const result = cache[a][b];
  if (result !== -1) return result;
  // 여기에 답을 계산한다.
  // ... //
  return result;
}

