
function solution(n, arr) {
    const triangle = arr.map(r => r.split(' ').map(Number));
    const cache = Array.from({ length: n }, () => new Array(n).fill(-1));
    const path = (y, x) => {
        if (y === n - 1) return triangle[y][x];
        if (cache[y][x] !== -1) return cache[y][x];
        return cache[y][x] = Math.max(path(y + 1, x), path(y + 1, x + 1)) + triangle[y][x];
    }
    const countCache = Array.from({ length: n }, () => new Array(n).fill(-1));
    const count = (y, x) => {
        if (y === n - 1) return 1;
        let result = countCache[y][x];
        if (result !== -1) return result;
        result = 0;
        // result = 0;
        result += Math.max(path(y + 1, x + 1), path(y + 1, x))
        // if (count(y + 1, x + 1) >= count(y + 1, x)) {
        //     result += count(y + 1, x + 1)
        // }
        // if (count(y + 1, x + 1) <= count(y + 1, x)) {
        //     result += count(y + 1, x)
        // }
        console.log(countCache)
        return result
    }
    return count(0, 0)
}

export {
    solution
}