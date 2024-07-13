const filePath = require('path').join(__dirname, 'input');
let [testCase, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution (word, str) {
  const matchMemoized = (cache, W, S, w, s) => {
    let result = cache[w][s];
    if (result !== -1) {
      return result;
    }
    if (s < S.length && w < W.length && (W[w] === '?' || W[w] === S[s])) {
      return result = matchMemoized(cache, W, S, w + 1, s + 1);
    }
    if (w === W.length) {
      return result = +(s === S.length);
    }
    if (W[w] === '*') {
      if (matchMemoized(cache, W, S, w +1, s) || (s < S.length && matchMemoized(cache, W, S, w, s + 1))) {
        return result = 1
      }
    }
    return result = 0;
  }
  return str.filter(S => {
    const maxLen = Math.max(word.length, S.length) + 1;
    const cache = Array.from({ length: maxLen }, () => new Array(maxLen).fill(-1));
    return matchMemoized(cache, word, S, 0, 0);
  }).join('\n')
}

while (testCase--) {                                                                                                                    
  const pattern = input.shift();
  const fileSize = +input.shift();
  
  console.log(solution(pattern, input.splice(0, fileSize)));
}