const filePath = require('path').join(__dirname, 'input');
let [testCase, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution (word, str) {
  // 와일드카드 패턴 W[w...]가 문자열 S[s...]에 대응되는지 여부를 반환한다.
  const matchMemoized = (cache, W, S, w, s) => {
      // 메모이제이션
    let result = cache[w][s];
    if (result !== -1) {
      return result;
    }
    while (s < S.length && w < W.length && (W[w] === '?' || W[w] === S[s])) {
      w++;
      s++;
    }
    // 더이상 대응할 수 없으면 while문이 끝났는지 확인한다.
    // w끝에 도달해서 끝난 경우: 문자열도 끝났어야 대응됨 
    if (w === W.length) {
      return result = +(s === S.length);
    }
    // w[pos]가 * 인 경우를 만나서 끝난 경우: *에 몇 글자를 대응해야 할지 재귀 호출하면서 확인한다.
    if (W[w] === '*') {
      for (let skip = 0; skip + s <= S.length; skip++) {
        if (matchMemoized(cache, W, S, w + 1, skip + s)) {
          return result = 1
        }
      }
    }
    // 이 외의 경우에는 모두 대응되지 않는다.
    return result = 0;
      
  }
  return str.filter(S => {
    const maxLen = Math.max(word.length, S.length) + 1;
    // -1은 아직 답이 계산되지 않았음을 의미한다.
    // 1은 해당 입력들이 서로 대응됨을 의미한다.
    // 0은 해당 입력들이 서로 대응되지 않음을 의미한다.
    const cache = Array.from({ length: maxLen }, () => new Array(maxLen).fill(-1));
    return matchMemoized(cache, word, S, 0, 0);
  }).join('\n')
}

while (testCase--) {                                                                                                                    
  const pattern = input.shift();
  const fileSize = +input.shift();
  
  console.log(solution(pattern, input.splice(0, fileSize)));
}