
const S = [4, 7, 6, 9, 8, 10]
const n = S.length
const choices = new Array(S.length + 1)
const cache = new Array(S.length + 1).fill(-1)

const lis = (start) => {
  let result = cache[start + 1]
  if (result !== -1) return result

  cache[start + 1] = 1
  let bestNext = -1
  for (let next = start + 1; next < n; next ++) {
    if (start === -1 || S[start] < S[next]) {
      const cand = lis(next) + 1
      if (cand > cache[start + 1]) {
        cache[start + 1] = cand
        bestNext = next
      }
    }
  }
  choices[start + 1] = bestNext
  return cache[start + 1]
}
console.log(lis(0))

const reconstruct = (start, seq) => {
  if (start !== -1) seq.push(S[start])
  const next = choices[start + 1]
  if (next !== -1) reconstruct(next, seq)
  return seq
}

console.log(reconstruct(0, []))