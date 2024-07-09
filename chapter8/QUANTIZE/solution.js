
function solution (n, s, input) {
    const nums = input.split(' ').map(Number); // 양자화해야 할 수열, 정렬한 상태
    const pSum = []; // 부분합을 저장한다
    const pSqSum = []; // 제곱의 부분합을 저장한다

    // 수열을 정렬하고 부분합을 계산한다
    const precalc = () => {
        nums.sort() 
        pSum.push(nums[0])
        pSqSum.push(nums[0]* nums[0])
        for (let i = 1; i < n; i ++) {
            pSum.push(pSum[i - 1] + nums[i]);
            pSqSum.push(pSqSum[i - 1] + nums[i] * nums[i]);
        }
    }
    precalc()

    // A[low] .. A[high] 구간을 하나의 숫자로 표현할 때 최소 오차 합을 계산한다.
    const minError = (low, high) => {
        // 부분합을 이용해 A[low] ~ A[hight]까지의 합을 구한다.
        const sum = pSum[high] - (low === 0 ? 0 : pSum[low - 1]);
        const sqSum = pSqSum[high] - (low === 0 ? 0 : pSqSum[low - 1]);
        // 평균을 반올림한 값으로 이 수들을 표현한다.
        const m = Math.round(sum / (high - low + 1));
        // sum(A[i] - m) ^ 2를 전개한 결과를 부분 합으로 표현
        let result = (sqSum - 2 * m * sum) + (m * m * (high - low + 1));
        return result;
    }

    const quantize = (from, parts, cache = {}) => {
        // 기저 사례: 모든 숫자를 다 양자화했을 때
        if (from === n) return 0;
        // 기저 사례: 숫자는 아직 남았는데 더 묶을 수 없을 때 아주 큰 값을 반환한다.
        if (parts === 0) return Infinity;
        
        if (!(from in cache)) cache[from] = {}
        if (!(parts in cache[from])) cache[from][parts] = -1

        let result = cache[from][parts];
        if (result !== -1) return result;
        result = Infinity;
        // 조각의 길이를 변화시켜 가며 최소치를 찾는다.
        for (let partSize = 1; from + partSize <= n; partSize ++) {
            result = Math.min(
                result,
                minError(from, from + partSize - 1) + quantize(from + partSize, parts - 1, cache)
            );
        }
        return result;
    }

    return quantize(0, s)
}

export {
    solution
}