const { normalize, multiply } = require('./multipy')

// a += b * (10^k);를 구현한다.
const addTo = (a, b, k) => {
    b = new Array(k).fill(0).concat(b);
    let an = a.length;
    let bn = b.length;
    let i = 0;
    while (i < an || i < bn) {
        a[i] = (+a[i] || 0) + (+b[i] || 0)
        i++;
    }
    normalize(a);
    return a;
}

// console.log(addTo([1, 1, 1], [1, 1, 1], 3))

// a -= b;를 구현한다. a >= b를 가정한다.
const subFrom = (a, b) => {
    const an = a.length;
    for (let i = 0; i < an; i ++) {
        a[i] = a[i] - (b[i] || 0);
    }
    normalize(a);
    return a
}


const karatsuba = (a, b) => {
    // a가 b보다 짧을 경우 둘을 바꾼다.
    let an = a.length;
    let bn = b.length;
    if (an < bn) return karatsuba(b, a);

    // 기저 사례: a나 b가 비어 있는 경우
    if (an === 0 || bn === 0) return [];

    // 기저 사례: a가 비교적 짧은 경우 (On^2) 곱셈으로 변경한다.
    // 책에서는 an <= 50 이지만 여기서는 2로 수정
    if (an <= 2) return multiply(a, b);

    let half = parseInt(an / 2);
    // a와 b를 밑에서 half 자리와 나머지로 분리한다.
    let a0 = a.slice(0, half);
    let a1 = a.slice(half)
    let b0 = b.slice(0, Math.min(bn, half));
    let b1 = b.slice(Math.min(bn, half))
    
    // z2 = a1 * b1
    let z2 = karatsuba(a1, b1);
    
    // z0 = a0 * b0
    let z0 = karatsuba(a0, b0);
    
    // a0 = a0 + a1;
    let a0a1 = addTo(a0, a1, 0);
    // b0 = b0 + b1;
    let b0b1 = addTo(b0, b1, 0);
    
    // z1 = (a0 * b0) - z0 - z2;
    let z1 = karatsuba(a0a1, b0b1);
    subFrom(z1, z0);
    subFrom(z1, z2)
    
    // result = z0 + z1 * 10^half + z2 * 10^(half * 2)
    let result = []
    addTo(result, z0, 0);
    addTo(result, z1, half);
    addTo(result, z2, half + half);
    // console.log('result', result)
    return result;
}

console.log(karatsuba([4, 3, 2, 1], [8, 7, 6, 5]).reverse().join('')) // 7006652
console.log(karatsuba([9, 9, 9], [9, 9, 9]).reverse().join('')) // 998001
console.log(karatsuba([1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1]).reverse().join('')) // 121932631112635269
console.log(karatsuba([8, 9, 3, 7, 2, 4, 3, 5, 8, 4, 9, 3, 2, 8, 4].reverse(), [2, 3, 8, 9, 4, 7, 3, 2, 8, 9, 4, 7, 3, 2, 9].reverse()).reverse().join('')) // 213553048277135320552236238436
