const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution (n, clocks) {
    const SWITCHES = 10;
    const CLOCKS = 16;
    const linkeds = [
        'xxx.............',
        '...x...x.x.x....',
        '....x.....x...xx',
        'x...xxxx........',
        '......xxx.x.x...',
        'x.x...........xx',
        '...x..........xx',
        '....xx.x......xx',
        '.xxxxx..........',
        '...xxx...x...x..'
    ]

    const areAligned = (clocks) => clocks.every(v => v === 12);

    const push = (clocks, swtch) => {
        for (let clock = 0; clock < CLOCKS; clock++) {
            if (linkeds[swtch][clock] === 'x') {
                clocks[clock] += 3;
                if (clocks[clock] === 15) {
                    clocks[clock] = 3;
                }
            }
        }
    }

    const solve = (clocks, swtch) => {
        if (swtch === SWITCHES) {
            return areAligned(clocks) ? 0 : Infinity;
        }
        let result = Infinity;
        for (let i = 0; i < 4; i ++) {
            result = Math.min(result, i + solve(clocks, swtch + 1));
            push(clocks, swtch);
        }
        return result
    }
    let answer = [];
    for (let i = 0; i < clocks.length; i ++) {
        answer.push(solve(clocks[i], 0));
    }
    return answer.map(v => v === Infinity ? -1 : v).join('\n');
}

console.log(solution(+n, arr.map(r => r.split(' ').map(c => +c))))