// sum.test.ts
import { expect, test } from 'vitest'
import { read, groupCount, calorieArray, maxCalories } from './day1a'

test('maxCalories test with sample data', () => {
 expect(maxCalories()).toBe(24000)
})

