
function sum (n) {
    let result = 0;
    for (let i = 1; i <= n; i ++) {
        result += i;
    }
    return result;
}

function recursiveSum (n) {    
    if (n === 1) return 1; // 더 이상 쪼개지지 않을 때를 기저 사례 (base case)라고 한다
    return n + recursiveSum(n - 1);
}

console.log(sum(100))
console.log(recursiveSum(100))