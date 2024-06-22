
// num[]의 자릿수 올림을 처리한다.
const normalize = (num) => {
    num.push(0);
    // 자릿수 올림을 처리한다.
    for (let i = 0; i + 1 < num.length; i++) {
        // 여기서는 사용하지 않지만 카라츠바 알고리즘에서 사용하기 때문에 미리 구현 된 것이다.
        if (num[i] < 0) {
            let borrow = parseInt((Math.abs(num[i]) + 9) / 10);
            num[i + 1] -= borrow;
            num[i] += borrow * 10;
        } else {
            num[i + 1] += parseInt(num[i] / 10);
            num[i] %= 10;
        }
    }

    while (num.length > 1 && num[num.length - 1] === 0) {
        num.pop();
    }
}

// 긴 두 자연수의 곱을 반환한다.
// 각 배열에는 각 수의 자릿수가 1의 자리에서부터 시작해 저장되어 있다.
// 예: multiply([3, 2, 1], [6, 5, 4]) = 123 * 456 = 56088 = [8, 8, 0, 6, 5]
const multiply = (a, b) => {
    const c = new Array(a.length + b.length - 1).fill(0);
    for (let i = 0; i < a.length; i ++) {
        for (let j = 0; j < b.length; j ++) {
            c[i + j] += a[i] * b[j];
        }
    }
    normalize(c);
    return c;
}
// console.log(multiply([3, 2, 1], [6, 5, 4]));
// console.log(multiply([4, 3, 2, 1], [8, 7, 6, 5]));
// console.log(multiply([9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9]));


module.exports = {
    normalize,
    multiply
}