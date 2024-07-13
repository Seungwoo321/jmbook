import { describe, test, expect } from '@jest/globals'
import { solution } from './solution'

describe('장마가 찾아왔다 (문제 ID: SNAL, 난이도: 하)', () => {
  test('input 5 4 output 0.99609375', () => {
    expect(solution(5, 4)).toBe(0.99609375)
  })
  test('input 5 3 output 0.84375', () => {
    expect(solution(5, 3)).toBe(0.84375)
  })
  test('input 4 2 output 0.5625', () => {
    expect(solution(4, 2)).toBe(0.5625)
  })
  test('input 3 2 output 0.84375', () => {
    expect(solution(3, 2)).toBe(0.9375)
  })
})
