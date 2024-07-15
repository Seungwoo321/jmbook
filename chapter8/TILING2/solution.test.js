import { describe, expect, test } from '@jest/globals';
import { solution } from './solution';

describe('TILING2 - BOJ 11726', () => {
    test(' Input 2 output 2', () => {
        expect(solution('2')).toBe(2)
    })
    test(' Input 9 output 55', () => {
        expect(solution('9')).toBe(55)
    })
})