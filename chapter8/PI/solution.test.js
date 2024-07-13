import { describe, expect, test } from '@jest/globals';
import { solution } from './solution';

describe("원주율 외우기", () => {
  test('Input 12341234 output 4', () => {
    expect(solution('12341234')).toBe(4)
  })
  test('Input 11111222 output 2', () => {
    expect(solution('11111222')).toBe(2)
  })
  test('Input 12122222 output 5', () => {
    expect(solution('12122222')).toBe(5)
  })
  test('Input 22222222 output 2', () => {
    expect(solution('22222222')).toBe(2)
  })
  test('Input 12673939 output 14', () => {
    expect(solution('12673939')).toBe(14)
  })
})