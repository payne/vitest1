// sum.test.ts
import { expect, test } from 'vitest'
import { read } from './day1a'

test('adds 1 + 2 to equal 3', () => {
  let contents = read();
  expect(contents.length).toBe(55)
})
