import { describe, expect, test } from "@jest/globals"
import { solution } from './solution'
describe('삼각형 위의 최대 경로 개수 세기', () => {
    test(`input
            4
            9
            5 7
            1 3 2
            3 5 5 6
        output
            3
    `, () => {
        expect(solution(4, [
            '4',
            '9',
            '5 7',
            '1 3 2',
            '3 5 5 6'
        ])).toBe(3)
    })
    // test(`input
    //         5
    //         1
    //         2 4
    //         8 16 8
    //         32 64 32 64
    //         128 256 128 256 128
    //     output
    //         ?
    // `, () => {
    //     expect(solution(5, [
    //         '1',
    //         '2 4',
    //         '8 16 8',
    //         '32 64 32 64',
    //         '128 256 128 256 128'
    //     ])).toBe(1)
    // })
})