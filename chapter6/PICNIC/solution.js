const filePath = require('path').join(__dirname, 'input');
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
const tests = input.shift();


function solution (n, m, friends) {
    // 학생 쌍 2차원 배열을 생성한다
    const areFriends = Array.from({ length: n }, () => new Array(n).fill(0));
    let i = 0;
    while (m--) {
        const first = friends[i];
        const second = friends[i + 1];
        areFriends[first][second] = 1;
        areFriends[second][first] = 1;
        i += 2;
    }

    // 학생이 짝을 찾았는지 표시
    const taken = new Array(n).fill(false);
    // 짝 지어주고 세기
    const countPairings = (taken) => {
        // 중복으로 세는것을 막기위해서 남은 학생들 중 가장 번호가 빠른 학생을 찾는다 
        let firstFree = -1
        for (let i = 0; i < n; i ++) {
            if (!taken[i]) {
                firstFree = i;
                break;
            }
        }

        // 기저 사례: 모든 학생을 짝을 찾았으면 한 가지 방법을 찾았으니 종료한다
        if (firstFree === -1) return 1;
        let result = 0;
        for (let pairWith = firstFree; pairWith < n; pairWith ++) {
            if (!taken[pairWith] && areFriends[firstFree][pairWith]) {
                taken[firstFree] = true;
                taken[pairWith] = true;
                result += countPairings(taken);
                taken[firstFree] = false;
                taken[pairWith] = false;
            }
        }
        return result;
    }

    return countPairings(taken);

}

for (let i = 0; i < tests; i++) {
    const [n, m] = input.shift().split(' ');
    const friends = input.shift();
    console.log(solution(+n, +m, friends.split(' ').map(v => +v)));
}

