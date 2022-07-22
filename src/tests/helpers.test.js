const { playerHasWon } = require('../helpers.js')

test('Player has not won', () => {
  expect(playerHasWon([1, 3, 7, 9])).toBe(false)
})

test('Player has won', () => {
  expect(playerHasWon([1, 5, 9])).toBe(true)
})
