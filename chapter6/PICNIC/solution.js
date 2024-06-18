const filePath = require('path').join(__dirname, 'input');
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
const tests = input.shift();


function solution (tests, arr) {
    console.log(tests, arr)

    // const 

    const countPairings = (n, taken) => {
        console.log(n, taken)
    }

    for (let i = 0; i < 1; i ++) {
        const [n, m] = arr.shift();
        const friends = arr.shift()
        countPairings(+n, friends.split(' ').map(v => +v))
    }
}

console.log(solution(tests, input))