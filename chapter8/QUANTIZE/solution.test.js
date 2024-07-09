import { describe, expect, test } from '@jest/globals';
import { solution } from './solution';

describe('Quantization', () => {
    test('10자리의 수열 3 3 3 1 2 3 2 2 2 1 을 3가지의 자연수로 양자화 할 때 오차 제곱의 합의 최소치는 0', () => {
        expect(solution(10, 3, '3 3 3 1 2 3 2 2 2 1')).toBe(0)
    })
    test('9자리의 수열 1 744 755 4 897 902 890 6 777 을 3가지의 자연수로 양자화 할 때 오차 제곱의 합의 최소치는 651', () => {
        expect(solution(9, 3, '1 744 755 4 897 902 890 6 777')).toBe(651)
    })
})
