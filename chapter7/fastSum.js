// 필수 조건: n은 자연수
// 1 + 2 + ... + n을 반환한다.

function fastSum(n) {
    if (n === 1) return 1;
    if (n % 2 === 1) return fastSum(n - 1) + n;
    return 2 * fastSum(n / 2) + (n / 2) * (n / 2);
}

console.log(fastSum(100));
