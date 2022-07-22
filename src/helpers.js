const winningSquareSets = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]

export function playerHasWon(array) {
  const winningRows = winningSquareSets.filter(set => {
    return set.every(square => array.includes(square))
  })

  if (winningRows.length > 0) {
    return true
  } else {
    return false
  }
}
