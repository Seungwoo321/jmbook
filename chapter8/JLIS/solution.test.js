import { describe, test, expect } from '@jest/globals'
import { soluiton } from './solution'
describe('합친 LIS', () => {
  test(`input
        3 3
        1 2 4
        3 4 7
      output
        5
  `, () => {
    expect(soluiton(3, 3, [1, 2, 4], [3, 4, 7])).toBe(5)
  })
  test(`input
        3 3
        1 2 3
        4 5 6
      output
        6
  `, () => {
    expect(soluiton(3, 3, [1, 2, 3], [4, 5, 6])).toBe(6)
  })
  test(`input
        5 3
        10 20 30 1 2
        10 20 30
      output
        5
  `, () => {
    expect(soluiton(5, 3, [10, 20, 30, 1, 2], [10 ,20, 30])).toBe(5)
  })
})