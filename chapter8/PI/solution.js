function solution (input) {

    // N[a, b] 구간의 난이도를 반환한다.
    const classify = (a, b) => {

        const str = input.substring(a, b);
        // 난이도 1: 첫 글자로만 이루어진 문자열과 같은 경우
        if (str === str[0].padStart(str.length, str[0])) return 1;

        // 등차수열인지 검사한다.
        let progressive = true;
        for (let i = 0; i < str.length - 1; i ++) {
            if (str[i + 1] - str[i] !== str[1] - str[0]) {
                progressive = false;
            }
        }

        // 난이도 2: 등차수열이고 공차가 1 또는 -1
        if (progressive && Math.abs(str[1] - str[0]) === 1) return 2;

        // 두 수가 번갈아 등장하는지 확인한다
        let alternating = true;
        for (let i = 0; i < str.length; i ++) {
            if (str[i] !== str[i % 2]) {
                alternating = false;
            }
        }

        // 난이도 4: 두 수가 번걸아 등장
        if (alternating) return 4;

        // 난이도 5: 공차가 1이 아닌 등차수열 
        if (progressive) return 5;

        // 그 외 모든 경우
        return 10;
    }
    
    const memorize = (begin, cache = {}) => {

        // 기저 사례: 수열의 끝에 도달 했을 경우
        if (begin === input.length) return 0

        // 메모이제이션
        let result = cache[begin]
        if (!result) result = -1;
        if (result !== -1) return result;
        result = Infinity;

        for (let L = 3; L <= 5; L ++) {
            if (begin + L <= input.length) {
                result = Math.min(
                    result,
                    memorize(begin + L, cache) + classify(begin, begin + L)
                )
            }
        }
        return result;
    }
    return memorize(0)

}

export {
    solution
}