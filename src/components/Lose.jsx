import React from 'react'


function Lose( {lose, resetGame, score } ) {
   if (!lose) return null;
  // console.log({score})


  return (
    <div className="overlay">
      <div className="popup">
        <h2>Game Over! 😢</h2>
        <p>Your score: {score}</p>
        <button 
          className="play-again-btn"
          onClick={resetGame}
        >
          Play Again
        </button>
      </div>
    </div>
  );

}

export default Lose