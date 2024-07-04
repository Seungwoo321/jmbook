const filePath = require('path').join(__dirname, 'input');
let [testCase, ...input] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution (word, str) {
    // 와일드카드 패턴 w가 문자열 s에 대응되는지 여부를 반환한다.
    const match = (w, s) => {
        // w[pos]와 s[pos]를 맞춰나간다.
        let pos = 0;
        while (pos < s.length && pos < w.length && (w[pos] === '?' || w[pos] === s[pos])) {
            pos++
        }
        // 더이상 대응할 수 없으면 왜 while문이 끝났는지 확인한다.
        // w끝에 도달해서 끝난 경우: 문자열도 끝났어야 대응됨 
        if (pos === w.length) {
            return pos === s.length
        }
        // w[pos]가 * 인 경우를 만나서 끝난 경우: *에 몇 글자를 대응해야 할지 재귀 호출하면서 확인한다.
        if (w[pos] === '*') {
            for (let skip = 0; skip + pos <= s.length; skip ++) {
                if (match(w.substring(pos + 1), s.substring(skip + pos))) {
                    return true
                }
            }
        }
        // 이 외의 경우에는 모두 대응되지 않는다.
        return false;
    }
    return str.filter(s => match(word, s)).join('\n')
}

while (testCase--) {                                                                                                                    
    const pattern = input.shift();
    const fileSize = +input.shift();
    
    console.log(solution(pattern, input.splice(0, fileSize)))
}