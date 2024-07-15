import { describe, test, expect } from "@jest/globals"
import { solution } from "./solution"
describe('폴리오미노 (문제 ID: POLY, 난이도: 중', () => {
  test('input 2 output 2', () => {
    expect(solution(2)).toBe(2)
  })
  test('input 4 output 19', () => {
    expect(solution(4)).toBe(19)
  })
  test('input 92 output 4841817', () => {
    expect(solution(92)).toBe(4841817)
  })
})
