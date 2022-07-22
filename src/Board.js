import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Square from './Square.js'
import { playerHasWon } from './helpers.js'

function Board() {
  const [xArray, setXArray] = useState([])
  const [yArray, setYArray] = useState([])
  const [isPlayerX, setPlayer] = useState(true)

  function handlePlayerClick(isPlayerX, square) {
    if (isPlayerX === true) {
      xArray.push(square)
      setXArray(xArray)
      if (playerHasWon(xArray)) {
        alert('Player 1 has won!')
      }
    } else {
      yArray.push(square)
      setYArray(yArray)
      if (playerHasWon(yArray)) {
        alert('Player 2 has won!')
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


  return (
    <div className="boardContainer">
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
