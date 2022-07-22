import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Square from './Square.js'
import { playerHasWon } from './helpers.js'

function Board() {
  const [xArray, setXArray] = useState([])
  const [yArray, setYArray] = useState([])
  const [isPlayerX, setPlayer] = useState(true)
  const [winner, setWinner] = useState({ playerHasWon: false, player: null })

  function handlePlayerClick(isPlayerX, square) {
    if (winner.playerHasWon) return
    if (isPlayerX === true) {
      xArray.push(square)
      setXArray(xArray)
      if (playerHasWon(xArray)) {
        setWinner({ playerHasWon: true, player: 1 })
      }
    } else {
      yArray.push(square)
      setYArray(yArray)
      if (playerHasWon(yArray)) {
        setWinner({ playerHasWon: true, player: 2 })
      }
    }

    setPlayer(!isPlayerX)
  }

  function displayMarker(square) {
    if (xArray.includes(square)) {
      return <FontAwesomeIcon icon="fa-solid fa-x" size="6x" />
    } else if (yArray.includes(square)) {
      return <FontAwesomeIcon icon="fa-solid fa-o" size="6x" />
    } else {
      return
    }
  }

  function displayGameDialog() {
    if (winner.playerHasWon) {
      return `Player ${winner.player} has WON!`
    }
    return isPlayerX ? "Player 1's Turn" : "Player 2's Turn"
  }

  return (
    <div className="boardContainer">
      <div className="gameDialog">
        <p>{displayGameDialog()}</p>
      </div>
      <div className="board">
        <div className="row">
          <Square displayMarker={displayMarker} handlePlayerClick={handlePlayerClick} isPlayerX={isPlayerX} square={1} />
          <Square displayMarker={displayMarker} handlePlayerClick={handlePlayerClick} isPlayerX={isPlayerX} square={2} />
          <Square displayMarker={displayMarker} handlePlayerClick={handlePlayerClick} isPlayerX={isPlayerX} square={3} />
        </div>
        <div className="row">
          <Square displayMarker={displayMarker} handlePlayerClick={handlePlayerClick} isPlayerX={isPlayerX} square={4} />
          <Square displayMarker={displayMarker} handlePlayerClick={handlePlayerClick} isPlayerX={isPlayerX} square={5} />
          <Square displayMarker={displayMarker} handlePlayerClick={handlePlayerClick} isPlayerX={isPlayerX} square={6} />
        </div>
        <div className="row">
          <Square displayMarker={displayMarker} handlePlayerClick={handlePlayerClick} isPlayerX={isPlayerX} square={7} />
          <Square displayMarker={displayMarker} handlePlayerClick={handlePlayerClick} isPlayerX={isPlayerX} square={8} />
          <Square displayMarker={displayMarker} handlePlayerClick={handlePlayerClick} isPlayerX={isPlayerX} square={9} />
        </div>
      </div>
    </div >
  )
}

export default Board
