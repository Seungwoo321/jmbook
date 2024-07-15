import { describe, test, expect } from '@jest/globals'
import { solution } from './solution'
import { solution2 } from './solution2'

describe('solution: 비대칭 타일링 (문제 ID: ASYMTILING, 난이도: 하)', () => {
  test('input 2 output 0', () => {
    expect(solution(2)).toBe(0)
  })
  test('input 4 output 2', () => {
    expect(solution(4)).toBe(2)
  })
  test('input 92 output 913227494', () => {
    expect(solution(92)).toBe(913227494)
  })
})
describe('solution2: 비대칭 타일링 (문제 ID: ASYMTILING, 난이도: 하)', () => {
  test('input 2 output 0', () => {
    expect(solution2(2)).toBe(0)
  })
  test('input 4 output 2', () => {
    expect(solution2(4)).toBe(2)
  })
  test('input 92 output 913227494', () => {
    expect(solution2(92)).toBe(913227494)
  })
})
