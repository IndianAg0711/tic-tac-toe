import React from "react"

export default function Square({ displayMarker, handlePlayerClick, isPlayerX, square }) {
  return (
    <div className="square" onClick={() => handlePlayerClick(isPlayerX, square)}>
      {displayMarker(square)}
    </div>
  )
}
