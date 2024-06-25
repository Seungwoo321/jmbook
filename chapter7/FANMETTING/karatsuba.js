// 팬미팅 문제를 풀기 위해 normalize를 제외한 O(n^2) 곱셈함수와 카라츠바의 빠른 곱셈 함수

const multiply = (a, b) => {
    const c = new Array(a.length + b.length - 1).fill(0);
    for (let i = 0; i < a.length; i ++) {
        for (let j = 0; j < b.length; j ++) {
            c[i + j] += a[i] * b[j];
        }
    }
    // normalize(c);
    return c;
}

const addTo = (a, b, k) => {
    b = new Array(k).fill(0).concat(b);
    let an = a.length;
    let bn = b.length;
    let i = 0;
    while (i < an || i < bn) {
        a[i] = (+a[i] || 0) + (+b[i] || 0)
        i++;
    }
    // normalize(a);
    return a;
}

const subFrom = (a, b) => {
    const an = a.length;
    for (let i = 0; i < an; i ++) {
        a[i] = a[i] - (b[i] || 0);
    }
    // normalize(a);
    return a
}


const karatsuba = (a, b) => {
    let an = a.length;
    let bn = b.length;
    if (an < bn) return karatsuba(b, a);
    if (an === 0 || bn === 0) return [];
    if (an <= 2) return multiply(a, b);

    let half = Math.floor(an / 2);
    let a0 = a.slice(0, half);
    let a1 = a.slice(half)
    let b0 = b.slice(0, Math.min(bn, half));
    let b1 = b.slice(Math.min(bn, half))
    
    let z2 = karatsuba(a1, b1);
    let z0 = karatsuba(a0, b0);
    
    let a0a1 = addTo(a0, a1, 0);
    let b0b1 = addTo(b0, b1, 0);
    let z1 = karatsuba(a0a1, b0b1);
    subFrom(z1, z0);
    subFrom(z1, z2)
    
    let result = []
    addTo(result, z0, 0);
    addTo(result, z1, half);
    addTo(result, z2, half + half);

    return result;
}

module.exports = karatsuba