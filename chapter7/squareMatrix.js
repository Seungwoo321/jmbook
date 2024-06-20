
const matrixMultiplication = (n, a, b) => {
    const matrix = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let i = 0; i < n; i ++) {
        for (let j = 0; j < n; j ++) {
            for (let k = 0; k < n; k ++) {
                matrix[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return matrix;
}

function identity (n) {
    return Array.from({ length: n }, (_, i) => {
        return Array.from({ length: n }, (_, j) => +(j === i))
    })
}
// console.log(identity(10).map(r => r.join('')).join('\n'))

function pow (matrix, m) {
    // 기저 사례: A^0 = I)
    if (m === 0) return identity(matrix.length);
    if (m % 2 > 0) {
        return matrixMultiplication(matrix.length, pow(matrix, m - 1), matrix)
    }
    const half = pow(matrix, m / 2);
    return matrixMultiplication(half.length, half, half);
}

console.log(pow([
    [1, 2],
    [3, 4]
], 5).map(r => r.join(' ')).join('\n'))
