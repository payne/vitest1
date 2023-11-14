// sum.test.ts
import { expect, test } from 'vitest'
import { read, groupCount } from './day1a'

test('can read the file', () => {
  let contents = read();
  expect(contents.length).toBe(55)
})

test('can count the groups', () => {
  let groups = groupCount();
  expect(groups.length).toBe(5)
})

