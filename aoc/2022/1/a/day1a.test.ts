// sum.test.ts
import { expect, test } from 'vitest'
import { read, groupCount, calorieArray } from './day1a'

test('can read the file', () => {
  let contents = read();
  expect(contents.length).toBe(55)
})

test('can count the groups', () => {
  let groups = groupCount();
  expect(groups.length).toBe(5)
})

test('calorieArray works with example data', () => {
  let ca = calorieArray()
  expect(ca).toStrictEqual([6000, 4000, 11000, 24000, 10000])
})

